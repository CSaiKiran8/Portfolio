﻿import emoji from "react-easy-emoji";

const greeting = {
  username: "Saikiran Chatlapalli",
  title: "Hi all, I'm Saikiran",
  subTitle: emoji(
    "A passionate Software Developer 🚀 looking for oppurtunities to build Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://kiran-resume.netlify.app/",
};

const socialMediaLinks = {
  github: "https://github.com/CSaiKiran8",
  linkedin: "https://www.linkedin.com/in/sai-kiran-chatlapalli-6154b9201/",
  gmail: "saikiranchatlapalli84@gmail.com",
};

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [

    emoji(
      "⚡ Excited to be at the deployment phase of my new career as a full stack web developer. Certified in both F/E and B/E technologies."
    ),
    emoji(
      "⚡ Want to develop highly interactive Front end / Back end for your applications"
    ),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "Bootsrap",
      fontAwesomeClassname: "fab fa-bootstrap",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database",
    },

  ],
};

const projects = {
  myproject: [
    {
      id: "1",
      projectName: "Todo Application",
      githubUrl: "https://github.com/srikanth-11/questionsoverflow-frontend",
      demoUrl: "https://sri-questionsoverflow.netlify.app",
      primaryLang: "javascript",
      primaryLangColor: "yellow",
      description: "It allows you to ask any questions and get clarified by the fellow developers",
      tech: [
        {
          skillName: "html-5",
          fontAwesomeClassname: "fab fa-html5",
        },
        {
          skillName: "css3",
          fontAwesomeClassname: "fab fa-css3-alt",
        },
        {
          skillName: "Bootsrap",
          fontAwesomeClassname: "fab fa-bootstrap",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "fab fa-js",
        },
        {
          skillName: "reactjs",
          fontAwesomeClassname: "fab fa-react",
        },
        {
          skillName: "nodejs",
          fontAwesomeClassname: "fab fa-node",
        },
        {
          skillName: "npm",
          fontAwesomeClassname: "fab fa-npm",
        },
        {
          skillName: "mongodb",
          fontAwesomeClassname: "fas fa-database",
        },

      ]

    },
    {
      id: "2",
      projectName: "QuestionsOverflow Application",
      githubUrl: "https://github.com/srikanth-11/uploader-frontend",
      demoUrl: "https://sri-uploader.netlify.app",
      primaryLang: "javascript",
      primaryLangColor: "yellow",
      description: "It allows you to save your files and download them at any time",
      tech: [
        {
          skillName: "html-5",
          fontAwesomeClassname: "fab fa-html5",
        },
        {
          skillName: "css3",
          fontAwesomeClassname: "fab fa-css3-alt",
        },
        {
          skillName: "Bootsrap",
          fontAwesomeClassname: "fab fa-bootstrap",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "fab fa-js",
        },
        {
          skillName: "reactjs",
          fontAwesomeClassname: "fab fa-react",
        },
        {
          skillName: "nodejs",
          fontAwesomeClassname: "fab fa-node",
        },
        {
          skillName: "npm",
          fontAwesomeClassname: "fab fa-npm",
        },
        {
          skillName: "mongodb",
          fontAwesomeClassname: "fas fa-database",
        },

      ]

    },
    {
      id: "3",
      projectName: "Blog Application",
      githubUrl: "https://github.com/srikanth-11/socialize-frontend",
      demoUrl: "https://sri-socialize.netlify.app",
      primaryLang: "javascript",
      primaryLangColor: "yellow",
      description: "you can share your thoughts using this web app",
      tech: [
        {
          skillName: "html-5",
          fontAwesomeClassname: "fab fa-html5",
        },
        {
          skillName: "css3",
          fontAwesomeClassname: "fab fa-css3-alt",
        },
        {
          skillName: "Bootsrap",
          fontAwesomeClassname: "fab fa-bootstrap",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "fab fa-js",
        },
        {
          skillName: "reactjs",
          fontAwesomeClassname: "fab fa-react",
        },
        {
          skillName: "nodejs",
          fontAwesomeClassname: "fab fa-node",
        },
        {
          skillName: "npm",
          fontAwesomeClassname: "fab fa-npm",
        },
        {
          skillName: "mongodb",
          fontAwesomeClassname: "fas fa-database",
        },


      ]

    },

    {
      id: "4",
      projectName: "Chat Application",
      githubUrl: "https://github.com/srikanth-11/tasksubmission-frontend",
      demoUrl: "https://sri-tasksubmission.netlify.app",
      primaryLang: "javascript",
      primaryLangColor: "yellow",
      description: "It allows you to submit the tasks",
      tech: [
        {
          skillName: "html-5",
          fontAwesomeClassname: "fab fa-html5",
        },
        {
          skillName: "css3",
          fontAwesomeClassname: "fab fa-css3-alt",
        },
        {
          skillName: "Bootsrap",
          fontAwesomeClassname: "fab fa-bootstrap",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "fab fa-js",
        },
        {
          skillName: "reactjs",
          fontAwesomeClassname: "fab fa-react",
        },
        {
          skillName: "nodejs",
          fontAwesomeClassname: "fab fa-node",
        },
        {
          skillName: "npm",
          fontAwesomeClassname: "fab fa-npm",
        },
        {
          skillName: "mongodb",
          fontAwesomeClassname: "fas fa-database",
        },

      ]

    }

  ]
}


const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend",
      progressPercentage: "75%",
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "75%",
    },
  ],
};

const workExperiences = {
  viewExperiences: true,
  experience: [
    {
      role: "Senior Software Developer",
      company: "Wipro Technologies",

      date: "June 2017 – Present",
      desc:
        "The MasterCard Debit Switch (MDS) is Mastercards Tandem based Electronic Funds Transfer (EFT) network processing system. It provides processing support to several MasterCard programs including MasterCard /Maestro / Cirrus ATM Network, MasterCard Debit Card, Maestro point-of-sale-debit programs, web based payment and CHIP based products. This project is an application development project starting with analysis of release requirements, design, development, unit testing and implementation.",
      descBullets: [
        "An ongoing project, working on function requirement, design and development of the core process.",
        "Analyzed code to identify bottlenecks & contingencies and streamlined code to reducing issues and support costs",
        "Analyzed on functional requirement. Preparing High level and Low level design document",
        "Worked closely with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability and performance.",
      ],
    },
  ],
};

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "kar12thik",
  showGithubProfile: "true",
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Got a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8374242180",
  email_address: "saikiranchatlapalli84@gmail.com",
};



export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  contactInfo,
  projects,
};
