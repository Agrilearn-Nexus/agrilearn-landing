import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div id="contact" className="flex px-16 py-18 border-b border-gray-500 justify-between bg-[#16261E] text-[#B7B8AD]">
      <div className="w-1/4 flex flex-col gap-4">
        <h1 className="text-xl font-serif text-[#FBFBF8]">AgriLearn Nexus</h1>
        <p className="text-lg max-w-10/12">
          Empowering agriculture through education, research, and innovation.
          Building a sustainable future for farming communities.
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/agrilearn.nexus?igsh=emNkbnl1Z244Y2Yx&utm_source=ig_contact_invite"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookSquare
              size={25}
              className="text-[#FBFBF8] hover:text-[#E0B732] hover:scale-110 transition-all duration-300"
            />
          </a>

          <a
            href="https://www.instagram.com/agrilearn.nexus?igsh=emNkbnl1Z244Y2Yx&utm_source=ig_contact_invite"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaXTwitter
              size={25}
              className="text-[#FBFBF8] hover:text-[#E0B732] hover:scale-110 transition-all duration-300"
            />
          </a>

          <a
            href="https://www.instagram.com/agrilearn.nexus?igsh=emNkbnl1Z244Y2Yx&utm_source=ig_contact_invite"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <SiLinkedin
              size={25}
              className="text-[#FBFBF8] hover:text-[#E0B732] hover:scale-110 transition-all duration-300"
            />
          </a>

          <a
            href="https://www.instagram.com/agrilearn.nexus?igsh=emNkbnl1Z244Y2Yx&utm_source=ig_contact_invite"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram
              size={25}
              className="text-[#FBFBF8] hover:text-[#E0B732] hover:scale-110 transition-all duration-300"
            />
          </a>
        </div>
      </div>
      <div className="w-1/4 flex flex-col gap-2">
        <h1 className="text-xl font-serif text-[#FBFBF8]">Quick Links</h1>
        <Link className="w-fit">
          <h2 className="text-lg hover:text-[#E0B732]">Home</h2>
        </Link>
        <Link className="w-fit">
          <h2 className="text-lg hover:text-[#E0B732]">About US</h2>
        </Link>
        <Link className="w-fit">
          <h2 className="text-lg hover:text-[#E0B732]">Events</h2>
        </Link>
        <Link className="w-fit">
          <h2 className="text-lg hover:text-[#E0B732]">Services</h2>
        </Link>
        <Link className="w-fit">
          <h2 className="text-lg hover:text-[#E0B732]">Magazine</h2>
        </Link>
        <Link className="w-fit">
          <h2 className="text-lg hover:text-[#E0B732]">Contact</h2>
        </Link>
      </div>
      <div className="w-1/4 flex flex-col gap-2">
        <h1 className="text-xl font-serif text-[#FBFBF8]">Our Services</h1>
        <Link className="w-fit">
          <h2 className="text-lg hover:text-[#E0B732]">Farmer Training</h2>
        </Link>
        <Link className="w-fit">
          <h2 className="text-lg hover:text-[#E0B732]">Workshops</h2>
        </Link>
        <Link className="w-fit">
          <h2 className="text-lg hover:text-[#E0B732]">Research</h2>
        </Link>
        <Link className="w-fit">
          <h2 className="text-lg hover:text-[#E0B732]">Consultancy</h2>
        </Link>
        <Link className="w-fit">
          <h2 className="text-lg hover:text-[#E0B732]">Publications</h2>
        </Link>
        <Link className="w-fit">
          <h2 className="text-lg hover:text-[#E0B732]">Digital Learning</h2>
        </Link>
      </div>
      <div className="w-1/4 flex flex-col gap-2">
        <h1 className="text-xl font-serif text-[#FBFBF8]">Contact Us</h1>
        <div className="flex gap-2">
          <IoLocationOutline size={64} color={"#E0B732"} />
          <h2>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Tilak+Nagar+Road,+Near+Manoupchar+Kendra,+Begusarai,+Bihar,+India"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Agrilearn Nexus location in Google Maps"
            >
              Tilak Nagar Road, Near Manoupchar Kendra, Tilak Nagar, Vishnupur,
              Sarvoday Nagar, Begusarai, 851101, India
            </a>
          </h2>
        </div>
        <div className="flex gap-2 items-center">
          <IoCallOutline size={22} color={"#E0B732"} />
          <a href="tel:+917488468326" aria-label="Call us at +91 7488468326">
            Call Us: +91 7488468326
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <CiMail size={24} color={"#E0B732"} />
          <a
            href="mailto:support@agrilearnnexus.com"
            aria-label="Email support at Agrilearn Nexus"
          >
            support@agrilearnnexus.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
