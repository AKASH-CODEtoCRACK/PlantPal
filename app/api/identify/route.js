import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request) {
  const formData = await request.formData();
  const image = formData.get('image');

  if (!image) {
    return Response.json({ error: 'No image provided' }, { status: 400 });
  }

  const buffer = await image.arrayBuffer();
  const base64Image = Buffer.from(buffer).toString('base64');

  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

  try {
    const result = await model.generateContent([
      'Identify this plant and provide the following information: scientific name, common name, family, genus, brief description, and any interesting facts.',
      {
        inlineData: {
          mimeType: 'image/jpeg',
          data: base64Image
        }
      }
    ]);

    const response = await result.response;
    const plantInfo = response.text();

    console.log('Raw plant info:', plantInfo); // Log raw plant info

    // Parse the response and structure it
    const structuredInfo = parsePlantInfo(plantInfo);

    console.log('Structured plant info:', structuredInfo); // Log structured plant info

    return Response.json(structuredInfo);
  } catch (error) {
    console.error('Error identifying plant:', error);
    return Response.json({ error: 'Failed to identify plant' }, { status: 500 });
  }
}

function parsePlantInfo(text) {
  const info = {
    scientificName: '',
    commonName: '',
    family: '',
    genus: '',
    briefDescription: '',
    interestingFacts: '',
    score: Math.floor(Math.random() * 20) + 80, // Simulated score between 80-99
  };

  const lines = text.split('\n');
  let currentField = '';

  lines.forEach(line => {
    line = line.trim();
    if (line.toLowerCase().includes('scientific name:')) {
      currentField = 'scientificName';
      info[currentField] = line.split(':')[1]?.trim() || '';
    } else if (line.toLowerCase().includes('common name:')) {
      currentField = 'commonName';
      info[currentField] = line.split(':')[1]?.trim() || '';
    } else if (line.toLowerCase().includes('family:')) {
      currentField = 'family';
      info[currentField] = line.split(':')[1]?.trim() || '';
    } else if (line.toLowerCase().includes('genus:')) {
      currentField = 'genus';
      info[currentField] = line.split(':')[1]?.trim() || '';
    } else if (line.toLowerCase().includes('brief description:')) {
      currentField = 'briefDescription';
      info[currentField] = line.split(':')[1]?.trim() || '';
    } else if (line.toLowerCase().includes('interesting facts:')) {
      currentField = 'interestingFacts';
      info[currentField] = line.split(':')[1]?.trim() || '';
    } else if (currentField && line) {
      // Append to the current field if it's a continuation
      info[currentField] += ' ' + line;
    }
  });

  return info;
}