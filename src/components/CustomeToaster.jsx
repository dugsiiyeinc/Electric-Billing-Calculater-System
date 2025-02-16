// src/components/CustomToaster.js
import { Toaster } from "react-hot-toast";

const CustomToaster = () => {
  return (
    <Toaster
      toastOptions={{
        success: {
          duration: 3000,
          style: {
            backgroundColor: '#28a745',
            color: '#fff',
            fontSize: '16px',
            borderRadius: '12px',
            padding: '1rem',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            transition: 'transform 0.3s ease-in-out',
          },
          className: "flex items-center space-x-3 p-4 shadow-lg rounded-xl",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 12l4 4L16 8"
              />
            </svg>
          ),
        },
        error: {
          duration: 4000,
          style: {
            backgroundColor: '#dc3545',
            color: '#fff',
            fontSize: '16px',
            borderRadius: '12px',
            padding: '1rem',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            transition: 'transform 0.3s ease-in-out',
          },
          className: "flex items-center space-x-3 p-4 shadow-lg rounded-xl",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 6l12 12M6 18L18 6"
              />
            </svg>
          ),
        },
        info: {
          duration: 4000,
          style: {
            backgroundColor: '#17a2b8',
            color: '#fff',
            fontSize: '16px',
            borderRadius: '12px',
            padding: '1rem',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            transition: 'transform 0.3s ease-in-out',
          },
          className: "flex items-center space-x-3 p-4 shadow-lg rounded-xl",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 4v12M4 10h12"
              />
            </svg>
          ),
        },
      }}
    />
  );
};

export default CustomToaster;
