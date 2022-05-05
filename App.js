import React from 'react'
import './InfoCard.css';
import './App.css';
import './About.css';
import './Projects.css';
import './NavBar.css';
import './ContactMe.css';
import ProfilePic from './ProfilePicture.JPG';

class NavBar extends React.Component {
  render() {
    let modeStyle = {
      backgroundColor: '#d9e7ff',
      color: '#0c182b',
      transition: 'color 0.5s'
    }
    const lightMode = {
      backgroundColor: '#d9e7ff',
      color: '#0c182b'
    }
    const darkMode = {
      backgroundColor: '#0c182b',
      color: '#d9e7ff'
    }
    if(this.props.mode==='dark') {
      modeStyle.backgroundColor=lightMode.backgroundColor
      modeStyle.color=lightMode.color
    } else if(this.props.mode==='light') {
      modeStyle.backgroundColor=darkMode.backgroundColor
      modeStyle.color=darkMode.color
    }
    return(
      <div className="navBar" style={modeStyle}>
        <div>
          <h2 class="material-symbols-outlined">verified</h2>
        </div>
        <div className="links">
          <a href="#profile">Profile</a>
          <a href="#about-title">About</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
    )
  }
}

class InfoCard extends React.Component {
 render() {
   let modeStyle = {
      backgroundColor: '#d9e7ff',
      color: '#0c182b',
      transition: 'color 0.5s'
    }
    const lightMode = {
      backgroundColor: '#d9e7ff',
      color: '#0c182b'
    }
    const darkMode = {
      backgroundColor: '#0c182b',
      color: '#d9e7ff'
    }
    if(this.props.mode==='dark') {
      modeStyle.backgroundColor=lightMode.backgroundColor
      modeStyle.color=lightMode.color
    } else if(this.props.mode==='light') {
      modeStyle.backgroundColor=darkMode.backgroundColor
      modeStyle.color=darkMode.color
    }
  return(
      <div>
         <div className="infoCard" style={modeStyle}>
            <div className="infoCardTitle">
               <img src={ProfilePic} alt="profile" className="profileImg"></img>
               <div className="infoCardTitleText">   
                  <h2 id="titleName">Alastair Tam</h2>
                  <h3 id="subtitle">Developer-In-Training</h3>
               </div>
            </div>
            <div id="infoWriteup">
              <p>I am currently working on attaining certifications from the freeCodeCamp syllabus, including those on Responsive Web Design, JavaScript Algorithm and Data Structures and Front End Development Libraries. My ambition is to become a full-stack developer and pursue higher education in computer sciences. This page is a showcase of my past and current works.</p>
            </div>
         </div>
      </div>
  )
 }
}

class About extends React.Component {
  render() {
    return(
      <div className="further-info-container">
        <div>
          <span className={this.props.iconClass}>{this.props.iconName}</span>
        </div>
        <div className="about-text">
          <p id={this.props.aboutTextId}>{this.props.aboutText}</p>
        </div>
      </div>
    )
  }
}

class Cards extends React.Component {
  render() {
    return(
      <div className="project-card-container">
        <a href={this.props.projectUrl} target="_blank" rel="noreferrer">
          <span className={this.props.iconClass} id="projectIcons">{this.props.iconName}</span>
        </a>
        <h3 className="project-title">{this.props.projectTitle}</h3>
        <p className="project-writeup">{this.props.projectWriteup}</p>
      </div>
    )
  }
}

class ContactMe extends React.Component {
  render() {
    let modeStyle = {
      backgroundColor: '#d9e7ff',
      color: '#0c182b',
      transition: 'color 0.5s'
    }
    const lightMode = {
      backgroundColor: '#d9e7ff',
      color: '#0c182b'
    }
    const darkMode = {
      backgroundColor: '#0c182b',
      color: '#d9e7ff'
    }
    if(this.props.mode==='dark') {
      modeStyle.backgroundColor=lightMode.backgroundColor
      modeStyle.color=lightMode.color
    } else if(this.props.mode==='light') {
      modeStyle.backgroundColor=darkMode.backgroundColor
      modeStyle.color=darkMode.color
    }
    return(
      <div className="contactMe" style={modeStyle}>
        <h2>Get In Touch</h2>
        <div className="socialMedia">
          <a href="https://twitter.com/DickCheezel" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://www.instagram.com/alastairtkj/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    )
  }
}
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'light',
      buttonText: 'Dark'
    }
    this.handleMode=this.handleMode.bind(this)
  }
  handleMode() {
    if(this.state.mode==='light') {
      this.setState({
        mode: 'dark',
        buttonText: 'Light'
      })
    } else if(this.state.mode==='dark') {
      this.setState({
        mode: 'light',
        buttonText: 'Dark'
      })
    }
  }
  render() {
    let modeStyle = {
      backgroundColor: '#d9e7ff',
      color: '#0c182b',
      transition: 'color 0.5s'
    }
    const lightMode = {
      backgroundColor: '#d9e7ff',
      color: '#0c182b'
    }
    const darkMode = {
      backgroundColor: '#0c182b',
      color: '#d9e7ff'
    }
    if(this.state.mode==='light') {
      modeStyle.backgroundColor=lightMode.backgroundColor
      modeStyle.color=lightMode.color
    } else if(this.state.mode==='dark') {
      modeStyle.backgroundColor=darkMode.backgroundColor
      modeStyle.color=darkMode.color
    }
    return(
      <div>
        <NavBar 
        mode={this.state.mode}
        />
        <div className="App-heading" style={modeStyle}>
          <button id="light-or-dark-mode" onClick={this.handleMode} style={modeStyle}>{this.state.buttonText}</button>
          <h1 className="Heading-text">Welcome.</h1>
        </div>
        <div className="profile" id="profile" style={modeStyle}>
          <InfoCard 
          mode={this.state.mode}/>
          <h2 id="about-title">About</h2>
          <div className="about-further-info">
            
            <About 
            iconClass="material-symbols-outlined"
            iconName="account_circle"
            aboutTextId="aboutMyself"
            aboutText="I am a 20 year old student from Singapore, with an urge to learn and create. My educational background is in Math and Science. In the future, my goals include obtaining a software engineering job after obtaining a masters' degree in university."
            />

            <About 
            iconClass="material-symbols-outlined"
            iconName="school"
            aboutTextId="aboutEducation"
            aboutText="I strongly believe in continuous learning and self-improvement, which was what lead me to begin my self-taught coding journey in the first place. It allows me to better understand the technologies that i use and rely on on a daily basis."
            />

            <About 
            iconClass="material-symbols-outlined"
            iconName="interests"
            aboutTextId="aboutInterestsGoals"
            aboutText="I have several interests including astronomy and physics. My other hobbies include physical activities like resistance training and fencing. I believe that trying new things and getting out of my comfort zone regularly is essential to personal growth."
            />

          </div>
        </div>
        <div className="projects" id="projects" style={modeStyle}>
          <h2 id="projects-title">Projects</h2>
          <div className="projects-grid">
            <Cards 
            iconClass="material-symbols-outlined"
            iconName="timer"
            projectUrl="https://codepen.io/DickCheezel/pen/ZEvPvaO"
            projectTitle="5+25 Clock"
            projectWriteup="A freeCodeCamp project, 'Build a 5+25 Clock' featured at the end of the 'Front End Development Libraries' chapter, React was used to build this project. The app keeps track of how much time the user wishes to carry on with an activity, and subsequently a rest, before starting again. The app was optimized to run on mobile devices as well."
            />

            <Cards 
            iconClass="material-symbols-outlined"
            iconName="calculate"
            projectUrl="https://codepen.io/DickCheezel/pen/jOYKaEm"
            projectTitle="Javascript Calculator"
            projectWriteup="A freeCodeCamp project, 'Build a JavaScript Calculator' featured at the end of the 'Front End Development Libraries' chapter, React was used to build this project. The app was designed with the basic capabilities of a calculator, along with the ability to conduct operations on decimals."
            />
          
            <Cards 
            iconClass="material-symbols-outlined"
            iconName="format_quote"
            projectUrl="https://codepen.io/DickCheezel/pen/BaJWYvK"
            projectTitle="Random Quote Machine"
            projectWriteup="A freeCodeCamp project, 'Build a Random Quote Machine' featured at the end of the 'Front End Development Libraries' chapter, React was used to build this project. The app has the additional features of changing background colors whenever a new quote was loaded."
            />

            <Cards 
            iconClass="material-symbols-outlined"
            iconName="preview"
            projectUrl="https://codepen.io/DickCheezel/pen/JjMOwdv"
            projectTitle="Markdown Previewer"
            projectWriteup="A freeCodeCamp project, 'Build a Markdown Previewer' featured at the end of the 'Front End Development Libraries' chapter, React was used to build this project. The app uses Github's marked markdown software to translate user-typed text into HTMl elements and transposes them on the same window."
            />

            <Cards 
            iconClass="material-symbols-outlined"
            iconName="menu_book"
            projectUrl="https://codepen.io/DickCheezel/pen/oNojWbg"
            projectTitle="Project Website"
            projectWriteup="A personal project, 'Bungei Website' was a practice project made during the early stages of development of an idea for a Web 3.0 service. Done earlier in my coding journey, this page only features HTML and CSS code and no JavaScript. This page features the use of ::before and ::after pseudoelements."
            />

            <Cards 
            iconClass="material-symbols-outlined"
            iconName="assignment_ind"
            projectUrl="https://codepen.io/DickCheezel/pen/ExwQgPR"
            projectTitle="HTML Personal Portfolio"
            projectWriteup="A personal project, 'Personal Portfolio' was an early attempt at making an online personal portfolio website for myself with the use of HTML and CSS only. Done earlier in my coding journey, this page features experimentation with making common design elements like info cards and static backgrounds."
            />

            <Cards 
            iconClass="material-symbols-outlined"
            iconName="article"
            projectUrl="https://codepen.io/DickCheezel/pen/QWqgEvr"
            projectTitle="Technical Documentation Page"
            projectWriteup="A freeCodeCamp project, 'Build a Technical Documentation Page' featured at the end of the 'Responsive Web Design' chapter of the syllabus. This page makes use of HTML and CSS and is made for a fictional Web 3.0 project. This page experiments with media queries and same-page-links."
            />

            <Cards 
            iconClass="material-symbols-outlined"
            iconName="edit_note"
            projectUrl="https://codepen.io/DickCheezel/pen/bGoqZXZ"
            projectTitle="Survey Form"
            projectWriteup="A freeCodeCamp project, 'Build a Survey Form' featured at the end of the 'Responsive Web Design' chapter of the syllabus. This page, made at the end of 2021, makes use of HTML and CSS to form a Christmas-themed survey form. It experiments with user-written fields for inputs, as well as radio buttons and checkboxes."
            />

            <Cards 
            iconClass="material-symbols-outlined"
            iconName="contact_page"
            projectUrl="https://codepen.io/DickCheezel/pen/poWNXXE"
            projectTitle="Tribute Page"
            projectWriteup="A freeCodeCamp project, 'Build a Tribute Page' featured at the end of the 'Responsive Web Design' chapter of the syllabus. This page makes use of HTML and CSS to create a tribute page of Elon Musk which contains some basic information about him as well as a link to his Wikipedia page."
            />
          </div>
        </div>
        <ContactMe 
        mode={this.state.mode}
        />
      </div>
    )
  }
}


export default Welcome;