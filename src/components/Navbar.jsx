import { Link } from "react-router-dom";

// Navbar
function Navbar() {
  return (
    <nav className="bg-gray-950 p-4 max-h-15 flex justify-between items-center shadow border-b border-gray-800 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          {/* Logo SVG DAVE maior e sem texto ao lado */}
          <img
            src="/imageDave.png"
            alt="Logo DAVE"
            className="h-15 w-auto"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar; 