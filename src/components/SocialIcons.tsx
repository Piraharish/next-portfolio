import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { motion } from "framer-motion";

function SocialIcons() {
  const socialLinks = [
    { name: "Github", icon: <FiGithub />, link: "https://www.github.com/Piraharish" },
    { name: "Facebook", icon: <FiFacebook />, link: "https://www.facebook.com/Piraharish" },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/piraharish",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://instagram.com/Piraharish",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://twitter.com/piraharish",
    },
  ];
  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;
