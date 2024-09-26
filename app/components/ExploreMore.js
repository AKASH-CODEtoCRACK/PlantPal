import { FaLeaf, FaTree, FaSeedling, FaInfoCircle } from 'react-icons/fa';

const categories = [
  { title: 'Identify Plants', icon: '🌿', color: 'from-green-300 to-green-500' },
  { title: 'Discover Trees', icon: '🌳', color: 'from-green-400 to-green-600' },
  { title: 'Learn About Flowers', icon: '🌸', color: 'from-green-500 to-green-700' },
  { title: 'Get Plant Care Tips', icon: 'ℹ️', color: 'from-green-600 to-green-800' },
];

export default function ExploreMore() {
  return (
    <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
      <h2 className="text-3xl font-bold text-center mb-6 text-dark-green">
        Explore More with PlantPal
      </h2>
      <p className="text-center mb-8 text-gray-600">
        Dive into the world of plants, trees, and flowers with our AI-powered identification tool.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center p-4 rounded-xl bg-gradient-to-br ${category.color} transform hover:scale-105 transition-all duration-300 cursor-pointer`}
          >
            <div className="bg-white rounded-full p-3 mb-3 shadow-md">
              <span className="text-4xl">{category.icon}</span>
            </div>
            <h3 className="text-sm font-medium text-center text-white">{category.title}</h3>
          </div>
        ))}
      </div>
      <div className="mt-10 bg-light-green rounded-xl p-6 shadow-inner">
        <h3 className="font-semibold mb-4 text-lg text-center text-dark-green">How to use PlantPal:</h3>
        <ol className="text-sm text-gray-700 space-y-2">
          {[
            'Upload or snap a photo of a plant',
            'Let our AI analyze the image',
            'Get detailed plant information',
            'Explore more to become a plant expert!'
          ].map((step, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 flex-shrink-0 w-6 h-6 rounded-full bg-dark-green text-white flex items-center justify-center text-xs font-bold">{index + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
