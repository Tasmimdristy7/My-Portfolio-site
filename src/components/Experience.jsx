import React from 'react';
import { Box,  } from '@chakra-ui/react';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookie, faCloud, faNotesMedical, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const ExperienceItem = ({ icon, companyName, jobTitle, date, description }) => (
  <Box className="accordion-item">
    <Box flex="1" textAlign="left" display="flex" alignItems="center">
      {icon}
      <Box>
        <span className="company-name">{companyName}</span>
        <Box fontWeight="bold">{jobTitle}</Box>
      </Box>
    </Box>
    <Box textAlign="right" ml="auto">
      <Box className="details">{date}</Box>
    </Box>
    <Box className="accordion-panel">
      {description}
    </Box>
  </Box>
);

const Experience = () => {
  return (
    
    <Box className="experience-container" >
       
      {/* Work Section */}
      
      <Box p={18} className="flex-section work-section">
       

        <ExperienceItem
          icon={<FontAwesomeIcon icon={faCookie} size="2x" style={{ marginRight: '5px', marginTop: '-24px' }} />}
          companyName="Snickerdoodle Labs"
          jobTitle="Software Test Engineer"
          date="June 2022 - Present"
          description=""
        />

        <ExperienceItem
          icon={<FontAwesomeIcon icon={faCloud} size="2x" style={{ marginRight: '5px', marginTop: '-24px' }} />}
          companyName="Klover Cloud"
          jobTitle="Software Test Engineer"
          date="Nov 2021 - Nov 2022"
          description=""
        />

        <ExperienceItem
          icon={<FontAwesomeIcon icon={faNotesMedical} size="2x" style={{ marginRight: '5px', marginTop: '-24px' }} />}
          companyName="Shastho Limited"
          jobTitle="Software QA Engineer"
          date="Jul'20 - June'21"
          description=""
        />
      </Box>

      {/* Vertical Divider */}
      <Box className="divider"></Box>

      {/* Education Section */}
      <Box p={18} className="flex-section education-section">
        

        <ExperienceItem
          icon={<FontAwesomeIcon icon={faGraduationCap} size="2x" style={{ marginRight: '5px', marginTop: '-24px' }} />}
          companyName="Brac University"
          jobTitle="BSc in Computer Science"
          date="July'19 - April'22"
          description=""
        />
      </Box>
    </Box>
  );
};

export default Experience;
