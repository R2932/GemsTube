/** @type {import('tailwindcss').Configuration}*/
// Import the necessary modules
// Import the necessary modules
import plugin from 'tailwindcss/line-clamp';

// Export the Tailwind CSS configuration
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [plugin],
};

