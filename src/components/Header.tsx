import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <>
        <nav className="bg-blue-700 py-4 px-6 flex items-center justify-between mb-5">
          <div className="flex items-center">
            <Link to="/">
              <div className="text-lg uppercase font-bold text-white">
                Clerk App
              </div>
            </Link>
          </div>
        </nav>
      </>
    );
  };

export default Header;
