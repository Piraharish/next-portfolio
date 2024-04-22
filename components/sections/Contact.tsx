"use client";

import Button from "@/components/ui/Button";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import { MotionSection } from "../motions";

interface ContactData {
  title: string;
  subTitle: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

const Contact = () => {
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
    <MotionSection
      className="max-w-2xl items-center text-center gap-2"
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
      <h2 className="text-lg text-primary font-mono">
        <span className="mr-2">05.</span>
        {contactData?.title}
      </h2>
      <h1 className="text-5xl font-extrabold mb-2">{contactData?.subTitle}</h1>
      <p className="tracking-wide mb-3">{contactData?.text}</p>
      <div className="contact-cta">
        <Button
          link={
            contactData?.buttonLink ||
            "mailto:piraharish.s@gmail.com?subject=Hello from your Website"
          }
          text={contactData?.buttonText || "Say Hello"}
        />
      </div>
    </MotionSection>
  );
};

export default Contact;
