const Footer = () => {
  return (
    <>
      <footer className="bg-black text-gray-400 py-8 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div>
              <h3 className="text-sm font-bold text-white mb-3">Explore</h3>
              <ul>
                <li className="text-gray-400 hover:underline">Home</li>
                <li className="text-gray-400 hover:underline">TV Shows</li>
                <li className="text-gray-400 hover:underline">Movies</li>
                <li className="text-gray-400 hover:underline">New & Popular</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white mb-3">Company</h3>
              <ul>
                <li className="text-gray-400 hover:underline">About Us</li>
                <li className="text-gray-400 hover:underline">Careers</li>
                <li className="text-gray-400 hover:underline">
                  Investor Relations
                </li>
                <li className="text-gray-400 hover:underline">Help Center</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white mb-3">Legal</h3>
              <ul>
                <li className="text-gray-400 hover:underline">Terms of Use</li>
                <li className="text-gray-400 hover:underline">
                  Privacy Policy
                </li>
                <li className="text-gray-400 hover:underline">
                  Cookie Preferences
                </li>
                <li className="text-gray-400 hover:underline">Legal Notices</li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center border-t border-gray-600 pt-6">
            <p className="text-sm">
              Copyright © {new Date().getFullYear()} - M-Flix. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
