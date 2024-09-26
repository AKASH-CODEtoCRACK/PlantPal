import { useState, useRef } from 'react';

export default function ImageUpload({ onImageUpload }) {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onImageUpload(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      onImageUpload(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleCaptureClick = () => {
    cameraInputRef.current.click();
  };

  return (
    <div
      className={`bg-gradient-to-br from-light-green to-dark-green rounded-xl p-8 text-center transition-all duration-300 ease-in-out ${
        dragActive ? 'scale-105 shadow-lg' : ''
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mb-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <span className="text-xl font-semibold mb-6 text-white">Drag and drop an image here, or use the buttons below</span>
        <div className="flex space-x-4">
          <button
            onClick={handleUploadClick}
            className="bg-white text-dark-green font-bold py-2 px-4 rounded-full hover:bg-opacity-90 transition-colors duration-300"
          >
            Upload Image
          </button>
          <button
            onClick={handleCaptureClick}
            className="bg-secondary text-white font-bold py-2 px-4 rounded-full hover:bg-opacity-90 transition-colors duration-300"
          >
            Take Picture
          </button>
        </div>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleChange}
        accept="image/*"
      />
      <input
        ref={cameraInputRef}
        type="file"
        className="hidden"
        onChange={handleChange}
        accept="image/*"
        capture="environment"
      />
    </div>
  );
}