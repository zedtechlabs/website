export default function Footer() {
  return (
    <footer className="py-8 bg-secondary-dark bg-[#0A0F1F] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="h-10 w-auto mr-3">
              <img 
                src="/attached_assets/logo trans.png" 
                alt="Zed Tech Lab" 
                className="h-full w-auto"
              />
            </div>
            <div>
              <span className="font-['Space_Grotesk'] font-bold text-xl">Zed Tech Lab</span>
            </div>
          </div>
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Zed Tech Lab. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
