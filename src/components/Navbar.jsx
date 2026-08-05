import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import logo from "../assets/logo.png";
import "./Navbar.css";


export default function Navbar() {


  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const location = useLocation();



  const isActive = (path) => {

    return location.pathname === path;

  };



  const closeMenu = () => {

    setOpen(false);

  };



  useEffect(() => {


    const handleScroll = () => {

      setScrolled(window.scrollY > 40);

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  }, []);





  useEffect(() => {

    closeMenu();

  }, [location.pathname]);






  return (


    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>


      <div className="navbar-container">



        {/* LOGO */}


        <Link
          to="/"
          className="brand"
        >


          <img

            src={logo}

            alt="Aura Design Hub Logo"

          />



          <div className="brand-text">


            <h2>
              Aura
            </h2>


            <span>
              Design Hub
            </span>


          </div>


        </Link>







        {/* DESKTOP NAVIGATION */}


        <nav className="nav-links">



          <Link

            to="/"

            className={isActive("/") ? "active" : ""}

          >
            Home
          </Link>




          <Link

            to="/about"

            className={isActive("/about") ? "active" : ""}

          >
            About
          </Link>





          <Link

            to="/services"

            className={isActive("/services") ? "active" : ""}

          >
            Services
          </Link>





          <Link

            to="/portfolio"

            className={isActive("/portfolio") ? "active" : ""}

          >
            Portfolio
          </Link>





          <Link

            to="/gallery"

            className={isActive("/gallery") ? "active" : ""}

          >
            Gallery
          </Link>





          <Link

            to="/contact"

            className={isActive("/contact") ? "active" : ""}

          >
            Contact
          </Link>



        </nav>







        {/* ACTION BUTTONS */}



        <div className="nav-actions">



          <a

            href="https://wa.me/256708624719"

            className="whatsapp-link"

            target="_blank"

            rel="noopener noreferrer"

            aria-label="WhatsApp"

          >

            <FaWhatsapp />

          </a>





          <Link

            to="/contact"

            className="quote-btn"

          >

            Get Quote

          </Link>




        </div>







        {/* MOBILE MENU BUTTON */}



        <button

          type="button"

          className={`hamburger ${open ? "active" : ""}`}

          onClick={() => setOpen(!open)}

          aria-label="Toggle navigation"

        >


          <span></span>

          <span></span>

          <span></span>


        </button>





      </div>









      {/* MOBILE MENU */}



      <div

        className={`mobile-menu ${open ? "show" : ""}`}

      >




        <Link

          onClick={closeMenu}

          to="/"

        >

          Home

        </Link>





        <Link

          onClick={closeMenu}

          to="/about"

        >

          About

        </Link>





        <Link

          onClick={closeMenu}

          to="/services"

        >

          Services

        </Link>





        <Link

          onClick={closeMenu}

          to="/portfolio"

        >

          Portfolio

        </Link>





        <Link

          onClick={closeMenu}

          to="/gallery"

        >

          Gallery

        </Link>





        <Link

          onClick={closeMenu}

          to="/contact"

        >

          Contact

        </Link>





        <Link

          onClick={closeMenu}

          to="/contact"

          className="mobile-btn"

        >

          Start Project

        </Link>





      </div>



    </header>


  );

}