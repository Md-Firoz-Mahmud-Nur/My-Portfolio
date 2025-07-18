const Footer = () => {
  return (
    <div className="bg-gray-800">
      <div className="container mx-auto">
        <footer className="footer sm:footer-horizontal container mx-auto py-10 text-white">
          <aside>
            <p className="max-w-[283px] leading-6 text-[#E8E8E8]">
              Edwin Diaz is a software and web technologies engineer, a life
              coach trainer who is also a serial .
            </p>
            {/* <div className="flex gap-1.5">
              <div className="rounded-full bg-[#2c2c2c] p-3">
                <FaGoogle className="text-white"></FaGoogle>
              </div>
              <div className="rounded-full bg-[#2c2c2c] p-3">
                <FaTwitter className="text-white"></FaTwitter>
              </div>
              <div className="rounded-full bg-[#2c2c2c] p-3">
                <FaInstagram className="text-white"></FaInstagram>
              </div>
              <div className="rounded-full bg-[#2c2c2c] p-3">
                <FaLinkedin className="text-white"></FaLinkedin>
              </div>
            </div> */}
          </aside>
          <nav>
            <h6 className="footer-title">About</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Skills</a>
            <a className="link link-hover">Projects</a>
            <a className="link link-hover">Education</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Resume</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">Why Car Doctor</a>
            <a className="link link-hover">About</a>
          </nav>
          <nav>
            <h6 className="footer-title">Support</h6>
            <a className="link link-hover">Support Center</a>
            <a className="link link-hover">Feedback</a>
            <a className="link link-hover">Accessability</a>
          </nav>
        </footer>
      </div>
      <div className="container mx-auto p-4 text-center text-white">
        <p>&copy; 2025 Md. Firoz Mahmud Nur. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
