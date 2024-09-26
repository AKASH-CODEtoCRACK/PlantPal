export default function Footer() {
    return (
      <footer className="bg-dark-green text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">PlantPal</h3>
              <p className="text-sm mt-1">Your AI-powered plant identification companion</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-light-green transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-light-green transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-light-green transition-colors duration-300">Contact Us</a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm">
            © {new Date().getFullYear()} PlantPal. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }