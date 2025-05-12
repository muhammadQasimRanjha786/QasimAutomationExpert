/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Qasim",
  title: "Hi all, I'm Muhammad Qasim",
  subTitle: emoji(
   

"I am a GHL Expert ⚡️ specialized in building funnels, websites, surveys, and forms powered by smart automation using n8n, Zapier, and AI agents to streamline CRM and lead generation workflows."

  ),
  resumeLink:
    "https://drive.google.com/file/d/1Kd8kneZ4nb-B7UZanysAhrjqddQ7bQyl/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/muhammadQasimRanjha786",
  linkedin: "https://www.linkedin.com/in/muhammad-qasim-ghl/",
  gmail: "m.qasim.ranjha786@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/qasim.ranjha.9674",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "INSANE GHL EXPERT WHO AUTOMATES EVERYTHING WITH N8N, ZAPIER, AND AI AGENTS TO SUPERCHARGE YOUR BUSINESS!",
  skills: [
    emoji(
      "⚡ Build high-converting funnels and interactive websites for your business using GoHighLevel, n8n, and AI-driven automation"
    ),
    emoji("⚡ Develop powerful Progressive Web Applications (PWA) with seamless CRM integrations for lead generation and customer engagement"),
    emoji(
      "⚡ Integrate third-party services like Zapier, n8n, and AI agents to automate workflows, enhance CRM, and boost business efficiency"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "GHL Funnels",
      fontAwesomeClassname: "fas fa-funnel-dollar"
    
    },
    {
      skillName: "n8n Automation",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Zapier Integrations",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "AI Automation",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "CRM Automation",
      fontAwesomeClassname: "fas fa-tasks"
    },
    {
      skillName: "Lead Gen",
      fontAwesomeClassname: "fas fa-user-plus"
    },
    {
      skillName: "API Integrations",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "Email/SMS Campaigns",
      fontAwesomeClassname: "fas fa-envelope"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "Javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "n8n Ai Agents",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
 
  schools: [
  {
    schoolName: "NUML Islamabad",
    logo: require("./assets/images/numl-seeklogo.png"),
    subHeader: "Bachelor in Software Engineering",
    duration: "2021 - 2025",
    desc: "Grade: 3.5/4",
    descBullets: [
      "Focused on Software Engineering principles and practices",
      "won undergraduate scholarship and Recieved laptop from PM Laptop scheme grandnted to brilliant students"
    ]
  },
  {
    schoolName: "Govt. Degree College Malakwal",
    logo: require("./assets/images/Degree College Malakwal Emblem.png"),
    subHeader: "FSc Pre-Engineering",
    duration: "2018 - 2020",
    desc: "Graduated with a strong foundation in Engineering and Mathematics",
    descBullets: [
      "Studied principles of all engineering Fields",
      "Ranked among the top students in the class"
    ]
  }
]

};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "GoHighLevel(GHL)", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Zapier",
      progressPercentage: "70%"
    },
    {
      Stack: "n8n Automations",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "GHL Expert",
      company: "Naxon Solutions",
      companylogo: require("./assets/images/naxonlogo.png"),
      date: "June 2024 – Jan 2025",
      desc: "Set up the Agency and client sub-accounts, lead generation funnels, integrated forms, surveys, calendars, A2P verification, Zapier for external tools, and n8n for AI agents.",
      descBullets: [
        "Setup Agency account and client sub-accounts",
  "Setup Lead generation funnels",
  "Form, survey, and calendar integration",
  "A2P Verification",
  "Zapier integration for external tools with GHL",
  "n8n integration for AI agents"
      ]
    },
    {
      role: "GHL Intern",
      company: "XortLogix",
      companylogo: require("./assets/images/xortlogix.jpeg"),
      date: "Aug 2023 – Dec 2023",
      desc: "Assisted in building and managing automation systems, creating and testing funnels for better conversions, and providing technical support for GHL integrations during my internship."
    },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Certifications",
      subtitle:
        "I have done certain certification to boost my career from coursera.",
      image: require("./assets/images/courseraimg.jpeg"),
      imageAlt: "Wait for loading",
      footerLink: [
        {
          name: "GHL Certification",
          url: "https://drive.google.com/file/d/144wcC7JTpmPgX5sB_DIgH0XNkQ6pZFEV/view?usp=sharing"
        },
        {
          name: "Developing as a Leader",
          url: "https://drive.google.com/file/d/1DXuhtAhcwGW3myuqz0b2HC5uN9fYn2xz/view?usp=sharing"
        },
        {
          name: "GitHub Certification",
          url: "https://drive.google.com/file/d/1TZdM_ZCPWpuuTgyK-Se-7NmV_MM7RLD6/view?usp=sharing"
        }
      ]
    },
    {
      title: "Win a Laptop from PM Laptop Scheme",
      subtitle:
        "Pm Laptop Scheme is to award Laptop to brilliant students in univerities of Pakistan",
      image: require("./assets/images/pmlaptop.jpeg"),
      imageAlt: "Wait for loading",
      footerLink: [
        {
          name: "View Picture",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-03470862304",
  email_address: "m.qasim.ranjha786@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
