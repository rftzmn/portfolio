import "./Skills.scss";
import { motion } from "framer-motion";
import AppWrapp from "../wraper/AppWrapp";
import { useEffect, useState } from "react";
import { client, urlFor } from "../client";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const experiencesQuery = '*[_type == "experiences"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
    client.fetch(experiencesQuery).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div></motion.div>
      </div>
    </>
  );
};

export default AppWrapp(Skills, "skills");
