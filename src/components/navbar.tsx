import Link from 'next/link';
import { FaGithub, FaTelegram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/5 backdrop-blur-sm shadow-lg border-b border-white/5 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
            >
              Home
            </Link>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/shulgastanslv">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://t.me/shulgastanslv">
              <FaTelegram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 