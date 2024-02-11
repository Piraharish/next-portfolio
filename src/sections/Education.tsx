import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "../../sanity/lib/client";

interface Education {
  name: string;
  role: string;
  url: string;
  start: string;
  end: string;
  shortDescription: string[];
}

function Education() {
  const [selected, setSelected] = useState(0);
  const [educations, setEducations] = useState<Education[]>([]);

  useEffect(() => {
    client
      .fetch<Education[]>(
        `*[_type == "education"] | order(_createdAt asc){
        name,
        role,
        start,
        end,
        shortDescription,
        url
      }`
      )
      .then((data) => {
        setEducations(data);
      })
      .catch((error) => {
        console.error("Error fetching education data:", error);
      });
  }, []);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  return (
    <motion.div
      className="education"
      id="education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Courses I&rsquo;ve done</h2>
      </div>
      <div className="container">
        <ul className="edu-slider">
          <div className="underline"></div>
          {educations.map((education, index) => (
            <li
              className={`edu-slider-item ${
                index === selected && "edu-slider-item-selected"
              }`}
              onClick={() => setSelected(index)}
              key={education.name}
            >
              <span>{education.name}</span>
            </li>
          ))}
        </ul>
        <div className="edu-details">
          <div className="edu-details-position">
            <h3>
              <span>{educations[selected]?.role}</span>
              <span className="edu-details-position-company">
                &nbsp;@&nbsp;
                <Link
                  href={educations[selected]?.url || ''}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  {educations[selected]?.name}
                </Link>
              </span>
            </h3>
            <p className="edu-details-range">
              {educations[selected]?.start} - {educations[selected]?.end}
            </p>
            <ul className="edu-details-list">
              {educations[selected]?.shortDescription?.map(
                (description, index) => (
                  <li key={index} className="edu-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
