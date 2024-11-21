import React, { useState, useEffect } from 'react';
import { updateDetails } from '../../services/deliveryPartnerDashboard';

const UpdateDetails = () => {
  
const [formData, setFormData] = useState(() => {
   
    const user = JSON.parse(localStorage.getItem('user'));
    const userId=user._id;
    
    const savedData = localStorage.getItem('formData');
    return savedData ? JSON.parse(savedData) : {
      personalInfo: {
        address: '',
        emergencyContactName: '',
        emergencyContactPhone: '',
      },
      aadharAndDriving: {
        aadharNumber: '',
        aadharFile: null,
        drivingLicenseNumber: '',
        drivingLicenseFile: null,
      },
      vehicleInfo: {
        vehicleRegistrationNumber: '',
        vehicleType: '',
        vehicleModel: '',
        vehicleYear: '',
        vehicleRegistrationFile: null,
        pollutionCertificateFile: null,
      },
      bankAccount: {
        accountHolderName: '',
        accountNumber: '',
        bankName: '',
        ifscCode: '',
      },
      insuranceAndPreferences: {
        insuranceDetails: '',
        preferredWorkingHours: '',
        preferredDeliveryRegions: '',
        criminalRecordDeclaration: '',
        
      },
      userId: userId || '',
    };
  });

  const [currentStep, setCurrentStep] = useState(1);

  
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle nested form data updates
    if (name.startsWith('personalInfo.')) {
      const field = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        personalInfo: { ...prev.personalInfo, [field]: value },
      }));
    } else if (name.startsWith('aadharAndDriving.')) {
      const field = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        aadharAndDriving: { ...prev.aadharAndDriving, [field]: value },
      }));
    } else if (name.startsWith('vehicleInfo.')) {
      const field = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        vehicleInfo: { ...prev.vehicleInfo, [field]: value },
      }));
    } else if (name.startsWith('bankAccount.')) {
      const field = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        bankAccount: { ...prev.bankAccount, [field]: value },
      }));
    } else if (name.startsWith('insuranceAndPreferences.')) {
      const field = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        insuranceAndPreferences: { ...prev.insuranceAndPreferences, [field]: value },
      }));
    } else if (
      name === 'aadharFile' ||
      name === 'drivingLicenseFile' ||
      name === 'vehicleRegistrationFile' ||
      name === 'pollutionCertificateFile'
    ) {
      setFormData((prev) => ({
        ...prev,
        [name]: e.target.files[0],
      }));
    }
  };

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrevious = () => setCurrentStep((prev) => prev - 1);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formToSend = new FormData();
    // Append all form fields to FormData object
    formToSend.append('personalInfo.address', formData.personalInfo.address);
    formToSend.append('personalInfo.emergencyContactName', formData.personalInfo.emergencyContactName);
    formToSend.append('personalInfo.emergencyContactPhone', formData.personalInfo.emergencyContactPhone);
    formToSend.append('aadharAndDriving.aadharNumber', formData.aadharAndDriving.aadharNumber);
    formToSend.append('aadharFile', formData.aadharAndDriving.aadharFile);
    formToSend.append('aadharAndDriving.drivingLicenseNumber', formData.aadharAndDriving.drivingLicenseNumber);
    formToSend.append('drivingLicenseFile', formData.aadharAndDriving.drivingLicenseFile);
    formToSend.append('vehicleInfo.vehicleRegistrationNumber', formData.vehicleInfo.vehicleRegistrationNumber);
    formToSend.append('vehicleInfo.vehicleType', formData.vehicleInfo.vehicleType);
    formToSend.append('vehicleInfo.vehicleModel', formData.vehicleInfo.vehicleModel);
    formToSend.append('vehicleInfo.vehicleYear', formData.vehicleInfo.vehicleYear);
    formToSend.append('vehicleRegistrationFile', formData.vehicleInfo.vehicleRegistrationFile);
    formToSend.append('pollutionCertificateFile', formData.vehicleInfo.pollutionCertificateFile);
    formToSend.append('bankAccount.accountHolderName', formData.bankAccount.accountHolderName);
    formToSend.append('bankAccount.accountNumber', formData.bankAccount.accountNumber);
    formToSend.append('bankAccount.bankName', formData.bankAccount.bankName);
    formToSend.append('bankAccount.ifscCode', formData.bankAccount.ifscCode);
    formToSend.append('insuranceAndPreferences.insuranceDetails', formData.insuranceAndPreferences.insuranceDetails);
    formToSend.append('insuranceAndPreferences.preferredWorkingHours', formData.insuranceAndPreferences.preferredWorkingHours);
    formToSend.append('insuranceAndPreferences.preferredDeliveryRegions', formData.insuranceAndPreferences.preferredDeliveryRegions);
    formToSend.append('insuranceAndPreferences.criminalRecordDeclaration', formData.insuranceAndPreferences.criminalRecordDeclaration);
    
  
    try {
      const response = await updateDetails(formToSend); 
      console.log('Form submitted successfully', response);
    } catch (error) {
      console.error('Form submission error', error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 space-y-6">
      {/* Step Indicator */}
      <div className="w-full flex justify-between items-center mb-6 gap-1"> {/* Add gap-2 for spacing */}
        {[1, 2, 3, 4, 5].map((step) => (
          <div
            key={step}
            className={`w-1/5 h-2 rounded ${step <= currentStep ? 'bg-[#4FC3F7]' : 'bg-gray-300'}`}
          />
        ))}
      </div>

      {/* Section 1: Address & Contact Information */}
      {currentStep === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Address & Contact Information</h2>
          <input
            type="text"
            name="personalInfo.address"
            value={formData.personalInfo.address}
            onChange={handleChange}
            placeholder="Enter your address"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="personalInfo.emergencyContactName"
            value={formData.personalInfo.emergencyContactName}
            onChange={handleChange}
            placeholder="Emergency Contact Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="personalInfo.emergencyContactPhone"
            value={formData.personalInfo.emergencyContactPhone}
            onChange={handleChange}
            placeholder="Emergency Contact Phone"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button onClick={handleNext} className="bg-[#4FC3F7] w-full p-2 rounded text-white">
            Next
          </button>
        </div>
      )}

      {/* Section 2: Aadhar & Driving License Details */}
      {currentStep === 2 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Aadhar & Driving License Details</h2>
          <input
            type="text"
            name="aadharAndDriving.aadharNumber"
            value={formData.aadharAndDriving.aadharNumber}
            onChange={handleChange}
            placeholder="Aadhar Number"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <label className="block mt-2">Upload Aadhar Document:</label>
          <input
            type="file"
            name="aadharFile"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="aadharAndDriving.drivingLicenseNumber"
            value={formData.aadharAndDriving.drivingLicenseNumber}
            onChange={handleChange}
            placeholder="Driving License Number"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <label className="block mt-2">Upload Driving License Document:</label>
          <input
            type="file"
            name="drivingLicenseFile"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button onClick={handleNext} className="bg-[#4FC3F7] w-full p-2 rounded text-white">
            Next
          </button>
          <button onClick={handlePrevious} className="bg-gray-300 w-full p-2 rounded">
            Previous
          </button>
        </div>
      )}

      {/* Section 3: Vehicle Information */}
      {currentStep === 3 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Vehicle Information</h2>
          <input
            type="text"
            name="vehicleInfo.vehicleRegistrationNumber"
            value={formData.vehicleInfo.vehicleRegistrationNumber}
            onChange={handleChange}
            placeholder="Vehicle Registration Number"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="vehicleInfo.vehicleType"
            value={formData.vehicleInfo.vehicleType}
            onChange={handleChange}
            placeholder="Vehicle Type (e.g., Bike, Car, Truck)"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="vehicleInfo.vehicleModel"
            value={formData.vehicleInfo.vehicleModel}
            onChange={handleChange}
            placeholder="Vehicle Model"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="vehicleInfo.vehicleYear"
            value={formData.vehicleInfo.vehicleYear}
            onChange={handleChange}
            placeholder="Vehicle Year (YYYY)"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <label className="block mt-2">Upload Vehicle Registration Document:</label>
          <input
            type="file"
            name="vehicleRegistrationFile"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <label className="block mt-2">Upload Pollution Certificate Document:</label>
          <input
            type="file"
            name="pollutionCertificateFile"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button onClick={handleNext} className="bg-[#4FC3F7] w-full p-2 rounded text-white">
            Next
          </button>
          <button onClick={handlePrevious} className="bg-gray-300 w-full p-2 rounded">
            Previous
          </button>
        </div>
      )}

      {/* Section 4: Bank Account Details */}
      {currentStep === 4 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Bank Account Details</h2>
          <input
            type="text"
            name="bankAccount.accountHolderName"
            value={formData.bankAccount.accountHolderName}
            onChange={handleChange}
            placeholder="Account Holder Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="bankAccount.accountNumber"
            value={formData.bankAccount.accountNumber}
            onChange={handleChange}
            placeholder="Account Number"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="bankAccount.bankName"
            value={formData.bankAccount.bankName}
            onChange={handleChange}
            placeholder="Bank Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="bankAccount.ifscCode"
            value={formData.bankAccount.ifscCode}
            onChange={handleChange}
            placeholder="IFSC Code"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button onClick={handleNext} className="bg-[#4FC3F7] w-full p-2 rounded text-white">
            Next
          </button>
          <button onClick={handlePrevious} className="bg-gray-300 w-full p-2 rounded">
            Previous
          </button>
        </div>
      )}

      {/* Section 5: Insurance & Preferences */}
      {currentStep === 5 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Insurance & Preferences</h2>
          <textarea
            name="insuranceAndPreferences.insuranceDetails"
            value={formData.insuranceAndPreferences.insuranceDetails}
            onChange={handleChange}
            placeholder="Insurance Details"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="insuranceAndPreferences.preferredWorkingHours"
            value={formData.insuranceAndPreferences.preferredWorkingHours}
            onChange={handleChange}
            placeholder="Preferred Working Hours"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="insuranceAndPreferences.preferredDeliveryRegions"
            value={formData.insuranceAndPreferences.preferredDeliveryRegions}
            onChange={handleChange}
            placeholder="Preferred Delivery Regions"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            name="insuranceAndPreferences.criminalRecordDeclaration"
            value={formData.insuranceAndPreferences.criminalRecordDeclaration}
            onChange={handleChange}
            placeholder="Criminal Record Declaration"
            className="w-full p-2 border border-gray-300 rounded"
          />
          {/* <input
            type="password"
            name="insuranceAndPreferences.password"
            value={formData.insuranceAndPreferences.password}
            onChange={handleChange}
            placeholder="Set a new password"
            className="w-full p-2 border border-gray-300 rounded"
          /> */}
          <button type="submit" className="bg-[#4FC3F7] w-full p-2 rounded text-white">
            Submit
          </button>
          <button onClick={handlePrevious} className="bg-gray-300 w-full p-2 rounded">
            Previous
          </button>
        </div>
      )}
    </form>
  );
};

export default UpdateDetails;
