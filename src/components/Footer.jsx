const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-5">
      <div className="flex justify-center">
        <p className="text-gray-600 text-sm">
          Copyright © {new Date().getFullYear()} - All rights reserved by
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-medium ml-1">
            Mohamamd Sakhawat Hossain
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
