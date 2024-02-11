import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";

interface AboutData {
  title: string;
  paragraphs: string[];
  technologies: string[];
  image: any;
}

function About() {
  const [aboutData, setAboutData] = useState<AboutData[]>([]);

  useEffect(() => {
    client
      .fetch<AboutData[]>(
        `*[_type == "about"]{
          title,
          paragraphs,
          technologies,
          image,
        }`
      )
      .then((data) => {
        setAboutData(data);
      })
      .catch((error) => console.error("Error fetching about data:", error));
  }, []);

  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      {aboutData.map((data, index) => (
        <div key={index}>
          <div className="title">
            <h2>{data.title || "About Me"}</h2>
          </div>
          <div className="about-grid">
            <div className="about-grid-info">
              {data.paragraphs?.map((paragraph, index) => (
                <p key={index} className="about-grid-info-text">
                  {paragraph}
                </p>
              ))}
              <ul className="about-grid-info-list">
                {data.technologies?.map((technology, index) => (
                  <li key={index} className="about-grid-info-list-item">
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-grid-photo">
              <div className="overlay"></div>
              <div className="overlay-border"></div>
              <div className="about-grid-photo-container">
                <Image
                  src={urlForImage(data.image)}
                  alt="profile"
                  fill
                  quality={100}
                  sizes="100"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default About;
