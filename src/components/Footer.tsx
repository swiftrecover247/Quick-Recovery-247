export function Footer() {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-yellow rounded flex items-center justify-center transform -skew-x-12">
                 <span className="font-heading font-bold text-brand-dark text-sm transform skew-x-12">QR</span>
              </div>
              <span className="font-heading font-bold text-lg text-white tracking-tight">
                Quick Recovery <span className="text-brand-yellow">24/7</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Fast, reliable, and professional vehicle recovery services operating 24 hours a day. Specialists in West London and the M4 Corridor.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-yellow transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-yellow transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://wa.me/447882368634" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-yellow transition-colors">
                <span className="sr-only">WhatsApp</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.031 2c-5.523 0-10 4.477-10 10 0 1.93.551 3.731 1.508 5.234L2.235 22l4.898-1.28c1.464.845 3.123 1.28 4.898 1.28 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10Zm5.449 14.502c-.227.633-1.32.122-1.815-.123-.396-.196-1.748-.839-3.003-2.106-1.077-1.087-1.868-2.454-2.145-2.923-.277-.47-.07-1.298.396-1.815.176-.196.39-.387.616-.622.257-.27.35-.453.518-.755.158-.287.086-.531-.035-.747-.117-.215-1.01-2.434-1.385-3.333-.362-.871-.73-.755-1.002-.767-.257-.012-.55-.015-.845-.015-.293 0-.77.11-1.173.548-.403.438-1.542 1.506-1.542 3.673 0 2.167 1.579 4.261 1.799 4.557.22.296 3.097 4.73 7.502 6.634 1.05.455 1.868.727 2.508.93 1.052.333 2.008.286 2.76.173.839-.126 2.585-1.056 2.951-2.076.368-1.018.368-1.89.257-2.076-.112-.185-.406-.296-.845-.514Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-3 test-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Breakdown Recovery</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Accident Recovery</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Motorway Rescue</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Jump Starts</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Commercial Fleet</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3 test-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Coverage Areas</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Pricing Info</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">24/7 Contact</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:07882368634" className="block text-brand-yellow font-bold text-lg mb-1">07882 368 634</a>
              <a href="tel:07477650680" className="block text-brand-yellow font-bold text-lg mb-3">07477 650 680</a>
              <p className="text-gray-400"><a href="mailto:swiftrecover247@gmail.com" className="hover:text-brand-yellow">swiftrecover247@gmail.com</a></p>
              <p className="text-gray-400">Dispatch Center: West London, UK</p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Quick Recovery 24/7. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <span>Fully Insured</span>
            <span>•</span>
            <span>Certified Operators</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
