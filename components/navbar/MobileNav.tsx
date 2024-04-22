"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Button from "../ui/Button";
import { sectionLinks } from "./NavLinks";

const MobileNav = ({
  buttonText,
  resume,
}: {
  buttonText: string | undefined;
  resume: string | undefined;
}) => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  };

  const middleVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  };

  const listVariants = {
    closed: { x: "100vw" },
    opened: { x: 0 },
  };
  return (
    <div className="md:hidden font-mono">
      <button
        id="menu-button"
        aria-label="menu button"
        className="w-10 h-8 flex flex-col justify-between z-50 relative"
        onClick={() => setOpen((prev) => !prev)}
      >
        <motion.div
          transition={{ duration: 0.25, ease: "easeInOut" }}
          variants={topVariants}
          animate={open ? "opened" : "closed"}
          className="w-10 h-1 rounded bg-primary origin-left"
        ></motion.div>
        <motion.div
          transition={{ duration: 0.25, ease: "easeInOut" }}
          variants={middleVariants}
          animate={open ? "opened" : "closed"}
          className="w-10 h-1 rounded bg-primary"
        ></motion.div>
        <motion.div
          transition={{ duration: 0.25, ease: "easeInOut" }}
          variants={bottomVariants}
          animate={open ? "opened" : "closed"}
          className="w-10 h-1 rounded bg-primary origin-left"
        ></motion.div>
      </button>
      {open && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="absolute duration-300 top-0 left-0 w-screen h-screen bg-slate-950/95 flex flex-col items-center justify-center gap-6 z-40"
        >
          <ul className="flex flex-col items-start gap-6 list-none">
            {sectionLinks.map(({ name, link }, index) => (
              <motion.li
                key={name}
                className="nav-items-list-item"
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.3 + index * 0.1,
                }}
              >
                <Link
                  href={link}
                  className="custom-focus p-3 tran300 hover:text-primary"
                >
                  <span className="text-primary mr-1">0{index + 1}.</span>
                  {name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.6,
            }}
          >
            <Button text={buttonText || "Resume"} link={resume || ""} />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default MobileNav;
