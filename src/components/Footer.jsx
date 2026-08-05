import "./Footer.css";

import logo from "../assets/logo.png";

import {
  FaPhone,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="footer">

      {/* ================= TOP ================= */}

      <div className="footer-top">
        <div className="footer-brand">

          <img
            src={logo}
            alt="Aura Design Hub Logo"
          />

          <h2>Aura Design Hub</h2>

          <p>
            Designed to be felt, not just seen.
            We create premium branding, graphic design,
            print solutions and visual identities that
            help businesses stand out.
          </p>

        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="footer-content">

        {/* LINKS */}

        <div className="footer-column">

          <h3>Explore</h3>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>

        </div>

        {/* SERVICES */}

        <div className="footer-column">

          <h3>Services</h3>

          <a href="/services">Brand Identity</a>
          <a href="/services">Logo Design</a>
          <a href="/services">Print Design</a>
          <a href="/services">Packaging Design</a>
          <a href="/services">Social Media Design</a>

        </div>

        {/* CONTACT */}

        <div className="footer-column">

          <h3>Contact</h3>

          <a href="tel:+256708624719">
            <FaPhone />
            <span>+256 708 624719</span>
          </a>

          <a href="tel:+256700698991">
            <FaPhone />
            <span>+256 700 698991</span>
          </a>

          <a
            href="https://wa.me/256708624719"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>

          <a href="mailto:info@auradesignhub.com">
            <span>info@auradesignhub.com</span>
          </a>

        </div>

        {/* SOCIALS */}

        <div className="footer-column">

          <h3>Follow Us</h3>

          <p>
            Follow our creative journey across all platforms.
          </p>

          <div className="footer-socials">

            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="X">
              <FaXTwitter />
            </a>

            <a href="#" aria-label="TikTok">
              <SiTiktok />
            </a>

            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

          </div>

          <a
            href="/contact"
            className="footer-btn"
          >
            Start Your Project
            <FaArrowRight />
          </a>

        </div>

      </div>

      {/* ================= BOTTOM ================= */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Aura Design Hub.
          All Rights Reserved.
        </p>

        <p>
          Powered by{" "}
          <a
            href="https://inter-linktech.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            INTER-LINK TECH
          </a>
        </p>

      </div>

    </footer>
  );
}