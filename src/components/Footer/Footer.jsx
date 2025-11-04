import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 mx-auto">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Hero App
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
