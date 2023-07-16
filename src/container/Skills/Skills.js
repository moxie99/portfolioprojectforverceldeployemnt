import React, { useState, useEffect } from 'react';
import './Skills.scss';
import ReactToolTip from 'react-tooltip';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>Skills and Experiences</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills?.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div
                className='app__flex'
                style={{
                  backgroundColor: index % 2 !== 0 ? 'white' : '#F6EEE6',
                }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name.toUpperCase()}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='app__skills-experience'>
          {experiences?.map((experience, index) => (
            <motion.div
              className='app__skills-experience-item'
              key={experience.year}
            >
              <div className='app__skills-experience-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              <motion.div className='app__skills-experience-works'>
                {experience.works.map((work, index) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='app__skills-experience-work'
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                    </motion.div>
                    <ReactToolTip
                      id={work.name}
                      effect='solid'
                      arrowColor='#a1a1a1'
                      className='exp-tooltip'
                    >
                      {work.desc}
                    </ReactToolTip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'Skills',
  'app__whitebg'
);
