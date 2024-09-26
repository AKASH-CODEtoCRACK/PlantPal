import Image from 'next/image';
import { FaLeaf, FaSearchengin, FaBookOpen, FaMobileAlt } from 'react-icons/fa';
import { SiLinkedin, SiGithub, SiTelegram } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const features = [
  { icon: FaLeaf, title: 'Accurate Plant Identification', description: 'Utilize advanced AI to identify plants from images with high accuracy.' },
  { icon: FaSearchengin, title: 'Extensive Plant Database', description: 'Access a vast database of plant species, including rare and exotic varieties.' },
  { icon: FaBookOpen, title: 'Detailed Plant Information', description: 'Get comprehensive details about each plant, including care tips and interesting facts.' },
  { icon: FaMobileAlt, title: 'Mobile-Friendly Design', description: 'Use the app seamlessly on any device, from desktop to smartphone.' },
];

const benefits = [
  'Enhance your botanical knowledge',
  'Improve plant care skills',
  'Discover new plant species',
  'Contribute to biodiversity awareness',
];

export default function About() {
  return (
    <div className="bg-gradient-to-br from-light-green to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-dark-green mb-12">About PlantPal</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-dark-green mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-xl">
                <div className="bg-green-100 rounded-full p-4 mb-4">
                  <feature.icon className="text-4xl text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-dark-green">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-dark-green mb-8">Benefits</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <ul className="list-none space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="bg-green-500 rounded-full p-1 mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-semibold text-center text-dark-green mb-8">Developer</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto flex flex-col md:flex-row items-center">
            <Image
              src="/images/myAvatar.jpeg"
              alt="Akash Tiwari"
              width={200}
              height={200}
              className="rounded-full mb-4 md:mb-0 md:mr-6"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-2 text-dark-green">Akash Tiwari</h3>
              <p className="text-gray-600 mb-4">MERN Stack Developer</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://www.linkedin.com/in/akash-tiwari--/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                  <SiLinkedin className="text-2xl" />
                </a>
                <a href="https://github.com/AKASH-CODEtoCRACK/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors duration-300">
                  <SiGithub className="text-2xl" />
                </a>
                <a href="https://t.me/Tiwari_akash" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
                  <SiTelegram className="text-2xl" />
                </a>
                <a href="mailto:tiwariakash95077@gmail.com" className="text-red-600 hover:text-red-800 transition-colors duration-300">
                  <MdEmail className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}