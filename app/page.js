'use client';

import { useState } from 'react';
import ImageUpload from './components/ImageUplaod';
import ImagePreview from './components/ImagePreview';
import PlantInfo from './components/PlantInfo';
import ExploreMore from './components/ExploreMore';

export default function Home() {
  const [plantData, setPlantData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = async (file) => {
    setLoading(true);
    setImagePreview(URL.createObjectURL(file));
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/identify', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log('Received plant data:', data); // Log received plant data
      setPlantData(data);
    } catch (error) {
      console.error('Error identifying plant:', error);
      setPlantData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-light-green to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-dark-green">PLANT IDENTIFIER</h1>
        <p className="text-center mb-8 text-gray-700">Upload a picture and we'll tell you what is the plant, tree, or flower</p>
        <div className="max-w-4xl mx-auto">
          <ImageUpload onImageUpload={handleImageUpload} />
          {(imagePreview || loading || plantData) && (
            <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
              {imagePreview && (
                <div className="w-full h-64 relative">
                  <img src={imagePreview} alt="Uploaded plant" className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-6">
                {loading ? (
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-dark-green"></div>
                    <p className="mt-4 text-xl text-gray-700">Identifying plant...</p>
                  </div>
                ) : (
                  plantData && <PlantInfo plantData={plantData} />
                )}
              </div>
            </div>
          )}
          <ExploreMore />
        </div>
      </div>
    </div>
  );
}