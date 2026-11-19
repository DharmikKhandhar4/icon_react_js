import React from 'react';

const Loader = ({ fullScreen = false }) => {
  return (
    <div
      className={`${
        fullScreen ? "h-64" : "h-40"
      } w-full flex justify-center items-center py-10`}
    >
      <div className="animate-spin rounded-full border-4 border-red-600 border-t-transparent h-12 w-12"></div>
    </div>
  );
};

export default Loader;
