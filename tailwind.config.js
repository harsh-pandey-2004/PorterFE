/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#1D3557',      // Navy Blue
        // secondary: '#4FC3F7',
        secondary:"yellow",// Bright Cyan
        background: '#F5F5F5',   // Light Gray
        text: '#1D3557',         // Black (Text)
        accentSuccess: '#4CAF50', // Success Green
        accentWarning: '#FFC107', // Warning Yellow
        accentDanger: '#F44336',  // Danger Red
        darkGray: '#6C757D',     // Dark Gray
        lightGray: '#E0E0E0',    // Divider Gray
      }
    },
  },
  plugins: [],
}

