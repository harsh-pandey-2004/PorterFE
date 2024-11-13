import React from 'react';
import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Home from './pages/Home.jsx';
import EstimateResults from './components/landingPageSections/EstimateResults.jsx';
import TrackParcels from './pages/TrackParcels';
import NewShipment from './pages/NewShipment';
import Reports from './pages/Reports.jsx';
import Footer from './components/footer/Footer.jsx';
import About from './components/footerSection/AboutUs.jsx';
import Services from './components/footerSection/Services.jsx';
import Faq from './components/footerSection/Faq.jsx';
import Contact from './components/footerSection/ContactUs.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import UserDashboard from './pages/UserDashboard.jsx';
import UserProfile from './components/userdashboardsection/UserProfile.jsx';
import ParcelHistory from './components/userdashboardsection/ParcelHistory.jsx';
import TrackParcel from './components/userdashboardsection/TrackParcel.jsx';
import CreateParcel from './components/userdashboardsection/CreateParcel.jsx';
import UpdateParcel from './components/userdashboardsection/UpdateParcel.jsx';
// import DeleteParcel from './components/userdashboardsection/DeleteParcel.jsx';
import CancelParcel from './components/userdashboardsection/CancelParcel.jsx';
import Settings from './components/userdashboardsection/Settings.jsx';
import Blog from './components/footerSection/Blog.jsx';
import Testimonial from './components/footerSection/Testimonial.jsx';
import Support from './components/footerSection/Support.jsx';

import Partners from './components/footerSection/Partners.jsx';
import ParcelOffer from './components/userdashboardsection/ParcelOffer.jsx';
import ForgotPassword from './components/forgotpassword/ForgotPassword.jsx';
import ResetPassword from './components/resetpassword/ResetPassword.jsx';
import DeliveryPartnerDashboard from './pages/DeliveryPartnerDashboard.jsx';
import UpdateDetails from './components/deliverypartnerdashboard/UpdateDetails.jsx';
import Dashboard from './components/deliverypartnerdashboard/Dashboard.jsx';
import ParcelBids from './components/deliverypartnerdashboard/ParcelBids.jsx';
import AcceptedParcels from './components/deliverypartnerdashboard/AcceptedParcels.jsx';
import Profile from './components/deliverypartnerdashboard/Profile.jsx';

function App() {
  return (
    
    <div className="">
      <BrowserRouter>
        <Navbar />
        <div className="">
          <Routes>
            {/* navbar */}
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<HeroWithOverlay />} /> */}
            <Route path="/estimate-results" element={<EstimateResults />} />
            <Route path="/track" element={<TrackParcels />} />
            <Route path="/new-shipment" element={<NewShipment />} />
            <Route path="/reports" element={<Reports />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/reset-password' element={<ResetPassword/>}/>
            <Route path='/register' element={<Register />} />

            {/* userdashboard */}
            <Route path="/dashboard/*" element={<UserDashboard />}>
              <Route index element={<Navigate to="profile" />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="parcel-history" element={<ParcelHistory />} />
              <Route path="track-parcel" element={<TrackParcel />} />
              <Route path="create-parcel" element={<CreateParcel />} />
              <Route path='parcel-offer' element={<ParcelOffer/>}/> 
              <Route path="update-parcel" element={<UpdateParcel />} />
              {/* <Route path="delete-parcel" element={<DeleteParcel />} /> */}
              <Route path="cancel-parcel" element={<CancelParcel/>}/>
              <Route path="settings" element={<Settings />} />
            </Route>

            {/* Delivery Partner Dashboard Route */}
        <Route path="/partner-dashboard/*" element={<DeliveryPartnerDashboard />}>
        <Route index element={<Navigate to="update-details" />} />
          <Route path="dashboard" element={<Dashboard />} /> 
          <Route path="parcel-bids" element={<ParcelBids />} />
          <Route path="accepted-parcels" element={<AcceptedParcels />} />
          <Route path="profile" element={<Profile />} />
          <Route path="update-details" element={<UpdateDetails/>}/>
        </Route>

            {/* footer */}
            <Route path="/about_us" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact_us" element={<Contact />} />
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/testimonials' element={<Testimonial/>}/>
            <Route path='/support' element={<Support/>}/>
            <Route path='/partners' element={<Partners/>}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;

