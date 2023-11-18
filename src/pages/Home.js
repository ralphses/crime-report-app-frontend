import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export default function CrimeReportHomePage() {

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 animate-fade-in mb-4">
          Gandu Community Watch
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Empowering residents to report and address community safety concerns.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Link to="/add-crime-scene" className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300">
            List your lodge
          </Link>
          <Link to="/safety-tips" className="text-sm font-semibold leading-6 text-gray-700">
            Safety Tips <span className="ml-1">&#8594;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
