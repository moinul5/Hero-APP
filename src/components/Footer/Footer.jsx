import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer font-semibold sm:footer-horizontal footer-center bg-base-300  p-4 mx-auto bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white ">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Hero
            App
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
