import React, { useEffect,useState } from 'react'
import AnimationStyle from './AnimationStyle';
import Frontend from '../data/frontend';
import Others from '../data/others';
import Projects from '../data/project';
import { FaInstagram ,FaLinkedin} from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Body :React.FC= () => {
  const [selectedFilter,setselectedFilters]=useState<string>("all")
  const [Filteritems,setFiltersitems]=useState(Projects)
  const [projects,setProjects]=useState(Filteritems)

  const handleClick=(category:string)=>{
    setselectedFilters(category)
   setProjects(Projects)
  }
  
  useEffect(() => {
    const handleFilter = () => {
      switch (selectedFilter) {
        case "beginner":
          return setFiltersitems(projects.filter((proj) => !proj.category.includes("advanced")
          )) 
          
          break;
          

        case "advanced":
          return setFiltersitems(projects.filter((proj) => !proj.category.includes("beginner")));

        default:
          return setFiltersitems(projects);
      }
    };
 

    handleFilter();
  }, [projects, selectedFilter]);

  const year=new Date()
 const mainyear= year.getFullYear()


  return (
    <div className='body-wrapper'>
        <div className="about">
            <div className="heading1">
              <p className='starters'>Start /&gt;</p>
              <div className="headings-anim">
                <h1>Hi, my name is <u>Sukhman</u></h1>
                <h1>i <i className='italics'>design</i> and develop Websites</h1>
                </div>
                <p className='show-you'>Let me show You...</p>
                <button className='resume-btn'>Resume</button>
            </div>
            <div className="animation">
              <AnimationStyle/>
              <img className='img-port' src="portfolio-img.jpeg" alt="" width={320} height={320} />
            </div>
        </div>

        <section className="skills" >
          <div className="skills-heading">
            <h1>Skills</h1>
            <p>Welcome to my skills page, where I showcase my proficiency in various domains of technology. My skill set revolves around programming,web development, and more. Here's a snapshot of what I bring to the table:</p>
          </div>
          <div className="skills-sec">  
            <div className="frontend-section">
              <h1>Frontend</h1>
              <div className="frontend-skills">
                {
                  Frontend.map((skill)=>(
                    <div className='skills-fr'>
                      <img src={skill.img} width={30} height={30} style={{borderRadius:"2px"}}/>
                      <p>{skill.skills_name}</p>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className="frontend-section">
              <h1>Others</h1>
              <div className="frontend-skills">
                {
                 Others.map((skill)=>(
                    <div className='skills-fr' key={skill.id}>
                      <img src={skill.img} width={30} height={30} style={{borderRadius:"2px"}}/>
                      <p>{skill.skills_name}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section">
          <div className="skills-heading">
            <h1>Projects</h1>
            <p className='projects-desc'>Welcome to the heart of my portfolio, where I showcase a curated selection of projects that reflect my passion for innovation and problem-solving. Each project is a testament to my skills, creativity, and dedication to delivering exceptional results Dive into the diverse array of projects below to get a glimpse of my capabilities and the impact I strive to make in the world of Web Development.</p>
          </div>
          <div className="project-table">
            <p className={selectedFilter==="all" ? "active-status":""} onClick={()=>handleClick("all")}>All</p>
            <p className={selectedFilter==="beginner" ? "active-status":""} onClick={()=>handleClick("beginner")}>Beginner Level</p>
            <p className={selectedFilter==="advanced" ? "active-status":""} onClick={()=>handleClick("advanced")}>Advance Level</p>
          </div>

          <div className="projects">
            <div className="project-1">
              {
                Filteritems.map((proj)=>(
                <div className='proj-card'>
                  <img src={proj.img} width={300} height={150}/>
                  <div className='proj-skill-parent'>
                  {proj.skill[0] && <p className='proj-skill'>{proj.skill[0]}</p>}
                  {proj.skill[1] && <p className='proj-skill'>{proj.skill[1]}</p>}
                  {proj.skill[2] && <p className='proj-skill'>{proj.skill[2]}</p>}
                 </div>
                 <h1 className='proj-name'>{proj.name}</h1>
                 <div className="view-btn">
                 <a href={proj.url} target='_blank'><button>View App</button></a> 
                 </div>
               </div>
                ))
              }
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="contact-form">
           <h1>Contact </h1>
           <p>Feel free to reach out to me for any questions or opportunities!</p>
          </div>
            <form>
              <h1>Email me 🚀</h1>
              <div className="inputs">
                <input type="email" placeholder='Your Email' />
                <input type="text" placeholder='Your Name' />
                <textarea className='description' placeholder='Enter your message.'/>
              </div>
              <button type='submit'>Send</button>
            </form>
        </section>
        <footer>
          <div>
            <h1>Sukhman</h1>
          </div>
          <div className="nav-elements-footer">
            <span>About <span className='arrow'>/&gt;</span></span>
            <span>Skills <span className='arrow'>/&gt;</span></span>
            <span>Projects<span className='arrow'>/&gt;</span></span>
            <span>Contact<span className='arrow'>/&gt;</span></span>
        </div>
          <div className="social-icons">
              <FaInstagram size={25}/>
              <FaLinkedin size={25}/>
              <IoLogoGithub size={25}/>
          </div>
          <div>
            <p className='copy-right'>&copy;{" "+mainyear+" "}Sukhmanpreet Singh. All rights reserved.</p>
          </div>
        </footer>
    </div>
  )
}

export default Body