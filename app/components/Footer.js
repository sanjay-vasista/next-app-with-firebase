export default function Footer() {
    return (
      <footer className="w-full bottom-0 bg-gradient-to-r from-gray-800 to-gray-900 py-6 text-white text-center">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Vasista. All rights reserved.</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-blue-400">🔗 Facebook</a>
            <a href="#" className="hover:text-blue-400">🔗 Twitter</a>
            <a href="#" className="hover:text-blue-400">🔗 LinkedIn</a>
          </div>
        </div>
      </footer>
    );
  }
  