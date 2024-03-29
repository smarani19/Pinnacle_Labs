import React from 'react'
import SchoolIcon from '@mui/icons-material/School';

export const AboutMe = () => {
  return (
    <div className="about">
      <div className="resume-timeline">

<div className="resume-header">

    <h1>Education</h1>

</div> 
{/* <!-- /resume-header --> */}

    <div className="timeline-wrap">

        <div className="timeline-block">

            <div className="timeline-header">
                <SchoolIcon fontSize="large" className="degree"/>
                <h3>Bachelor's Degree</h3>
               
            </div>
            <p> 2020 - Present(2023)</p>

            <div className="timeline-content">
                <h5>VIT Bhopal University</h5>
                <p>Currently pursuing B.Tech. Degree in Computer Science (CSE) with specialization in Cyber Security and Digital Forensics at VIT Bhopal University</p>
                <p>CGPA - 9.07</p>
            </div>

        </div> 
        {/* <!-- /timeline-block --> */}
     
     
        <div className="timeline-block">
            <div className="timeline-header">
                <SchoolIcon fontSize="large" className="degree"/>
                <h2>Higher Secondary</h2>
               
            </div>
            <p>2018 - 2020</p>

            <div className="timeline-content">
                <h5>Vikas Vidyaniketan, Visakhapatnam</h5>
                <p>Pursued Physics, Chemistry and Mathematics(PCM) </p>
                <p>+2 board - 93% </p>
            </div>

        </div> 

    <div className="timeline-block">

            <div className="timeline-header">
            <SchoolIcon fontSize="large" className="degree"/>
            <h2>Secondary</h2>
           
            </div>
            <p>2007-2018</p>

          <div className="timeline-content">
          <h5>DAV Public School, SECL Korba</h5>
           <p>Board - 95.6% </p>
        </div>

</div> 
        {/* <!-- /timeline-block --> */}

    </div>
     {/* <!-- /timeline-wrap -->   			 */}

</div>

{/* <!-- /resume-timeline --> */}
    </div>
  )
}

export default AboutMe
