export default function PlantInfo({ plantData }) {
    if (!plantData) return null;
  
    console.log('Rendering plant data:', plantData); // Log plant data being rendered

    // Function to clean up the text by removing asterisks and trimming
    const cleanText = (text) => {
        if (typeof text === 'string') {
            return text.replace(/\*/g, '').trim();
        }
        return '';
    };

    // Simulated additional data (replace with actual data when available)
    const regions = ['South Asia', 'Southeast Asia', 'Parts of Africa'];
    const careTips = [
        'Provide full sun to partial shade',
        'Water regularly, keeping soil moist but not waterlogged',
        'Prune regularly to promote bushier growth',
        'Fertilize monthly during growing season'
    ];

    return (
      <div className="space-y-6 text-gray-800">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-dark-green">{cleanText(plantData.scientificName) || 'Unknown Plant'}</h2>
          <div className="flex items-center">
            <div className="w-32 bg-gray-200 rounded-full h-4 mr-2">
              <div className="bg-green-500 h-4 rounded-full" style={{width: `${plantData.score || 0}%`}}></div>
            </div>
            <span className="text-lg font-semibold text-gray-700">{plantData.score || 0}% Match</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold text-dark-green mb-2">Basic Information</h3>
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-2 font-medium text-dark-green">Common Name:</td>
                  <td className="py-2">{cleanText(plantData.commonName) || 'N/A'}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-2 font-medium text-dark-green">Family:</td>
                  <td className="py-2">{cleanText(plantData.family) || 'N/A'}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-2 font-medium text-dark-green">Genus:</td>
                  <td className="py-2">{cleanText(plantData.genus) || 'N/A'}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-dark-green mb-2">Description</h3>
            <p className="text-gray-700">{cleanText(plantData.briefDescription) || 'No description available.'}</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-dark-green mb-2">Interesting Facts</h3>
          <p className="text-gray-700">{cleanText(plantData.interestingFacts) || 'No interesting facts available.'}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-dark-green mb-2">Native Regions</h3>
          <ul className="list-disc list-inside text-gray-700">
            {regions.map((region, index) => (
              <li key={index}>{region}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-dark-green mb-2">Care Tips</h3>
          <ul className="list-disc list-inside text-gray-700">
            {careTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    );
}