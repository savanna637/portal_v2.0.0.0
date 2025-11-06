import { Mail, Phone, ArrowUp, Star, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-gray-100 mt-10 overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random()}s`,
            }}
          >
            <Star className="w-1 h-1 text-white" />
          </div>
        ))}
      </div>

      {/* Mouse Glow Effect */}
      <div
        className="absolute w-48 h-48 rounded-full opacity-15 pointer-events-none transition-all duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
          left: mousePosition.x - 96,
          top: mousePosition.y - 96,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-6">
        {/* Compact Single Row Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          
          {/* Left: Brand + Quick Description */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center group">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 transform group-hover:rotate-12 transition-transform duration-300">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  MyCompany
                </h2>
                <p className="text-xs text-gray-400 hidden lg:block">Modern solutions for teams</p>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="hidden md:flex items-center space-x-6">
              {[
                { name: 'Home', href: '#' },
                { name: 'About', href: '#' },
                { name: 'Contact', href: '#' },
                { name: 'Privacy', href: '#' }
              ].map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-sm text-gray-300 hover:text-white transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Center: Contact Info */}
          <div className="flex items-center space-x-6">
            <div className="group flex items-center space-x-2">
              <div className="p-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-3 h-3 text-white" />
              </div>
              <a 
                href="mailto:info@mycompany.com" 
                className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
              >
                info@mycompany.com
              </a>
            </div>
            
            <div className="group flex items-center space-x-2">
              <div className="p-1.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-md group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm text-gray-300">+36 1 234 5678</span>
            </div>
          </div>

          {/* Right: Copyright + Scroll Button */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              {/* Social Proof */}
              <div className="hidden lg:flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-2.5 h-2.5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-400">10K+ users</span>
              </div>
              
              <div className="text-xs text-gray-400 flex items-center space-x-2">
                <span>© {new Date().getFullYear()} MyCompany</span>
                <div className="hidden md:flex items-center space-x-1">
                  <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  <span>Made with</span>
                  <div className="w-2 h-2 bg-red-500 rounded-sm transform rotate-45"></div>
                  <span>in Hungary</span>
                </div>
              </div>
            </div>
            
            {/* Scroll to top button */}
            {showScrollTop && (
              <button
                onClick={scrollToTop}
                className="group p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
              >
                <ArrowUp className="w-3 h-3 text-white group-hover:animate-bounce" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </footer>
  );
}