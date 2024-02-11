import Button from "@/components/Button";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "../../sanity/lib/client";

interface ContactData {
  title: string;
  subTitle: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

function Contact() {
  const [contactData, setContactData] = useState<ContactData | null>(null);

  useEffect(() => {
    client
      .fetch<ContactData>(
        `*[_type == "contact"][0]{
        title,
        subTitle,
        text,
        buttonText,
        buttonLink,
      }`
      )
      .then((data) => {
        setContactData(data);
      })
      .catch((error) => {
        console.error("Error fetching contact data:", error);
      });
  }, []);

  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">{contactData?.title || "What's Next?"}</h2>
      <h2 className="contact-sub-title">
        {contactData?.subTitle || "Get In Touch"}
      </h2>
      <p className="contact-text">
        {contactData?.text ||
          "Since I'm currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!"}
      </p>
      <div className="contact-cta">
        <Button
          link={
            contactData?.buttonLink ||
            "mailto:piraharish.s@gmail.com?subject=Hello from your Website"
          }
          text={contactData?.buttonText || "Say Hello"}
        />
      </div>
    </motion.div>
  );
}

export default Contact;
