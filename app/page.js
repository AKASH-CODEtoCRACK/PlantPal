'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageUpload from './components/ImageUplaod';
import PlantInfo from './components/PlantInfo';
import ExploreMore from './components/ExploreMore';

export default function Home() {
  const [plantData, setPlantData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState(null);

  const handleImageUpload = async (file) => {
    setLoading(true);
    setError(null);
    setImagePreview(URL.createObjectURL(file));
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/identify', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setPlantData(data);
    } catch (error) {
      console.error('Error identifying plant:', error);
      if (error.message.includes('429')) {
        setError('API request limit reached. Please try again later.');
      } else if (error.message.includes('Plant not identified')) {
        setError('Unable to identify the plant. Please try a different image.');
      } else {
        setError('An error occurred while identifying the plant. Please try again.');
      }
      setPlantData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-light-green to-white py-6 px-4 sm:py-12 sm:px-6 lg:px-8 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-dark-green">PLANT IDENTIFIER</h1>
        <p className="text-center mb-8 text-gray-700 text-sm sm:text-base">Upload a picture and we&apos;ll tell you what is the plant, tree, or flower</p>
        <ImageUpload onImageUpload={handleImageUpload} />
        {(imagePreview || loading || plantData || error) && (
          <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
            {imagePreview && (
              <div className="w-full h-48 sm:h-64 relative">
                <Image
                  src={imagePreview}
                  alt="Uploaded plant"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            <div className="p-4 sm:p-6">
              {loading ? (
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-dark-green"></div>
                  <p className="mt-4 text-lg text-gray-700">Identifying plant...</p>
                </div>
              ) : error ? (
                <div className="text-center text-red-500">{error}</div>
              ) : (
                plantData && <PlantInfo plantData={plantData} />
              )}
            </div>
          </div>
        )}
        <ExploreMore />
      </div>
    </div>
  );
}