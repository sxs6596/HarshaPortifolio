// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Siva Sri Harsha",
  tagline: "Software Engineer",
  img: profile,
  about: `Passionate software engineer with a demonstrated history of working in IT industry. Specializes in HTML5, CSS3, Bootstrap, JavaScript, ES6+, React.js, Node.js ,NPM, REST API, Machine Learning, Deep learning.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/harsha5656/",
  github: "https://github.com/sxs6596",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Intern",
    Company: `Magna International Inc`,
    Location: "Detroit, MI",
    Type: "Internship",
    Duration: "Jun 2023 - Aug 2023",
  },
  {
    Position: "Software Developer",
    Company: `Tata Consultancy Services`,
    Location: "Hyderabad, India",
    Type: "Full Time",
    Duration: "Jan 2020 - Jul 2022",
  }
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Master of Science in Computer Science",
    Company: "University of Texas at Arlington",
    Location: "Arlington, TX",
    Type: "Full Time",
    Duration: "Aug 2022 - May 2024",
  },
  {
    Position: "Bachelor in Computer Science & Engineering",
    Company: `Andhra University`,
    Location: "Visakhapatnam, India",
    Type: "Full Time",
    Duration: "Jun 2015 - Apr 2019",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Amazon Reviews Sentiment Analysis",
    image: projectImage1,
    description:`Developed an Amazon reviews sentiment analysis application using state-of-the-art machine learning algorithms, including CNN, RNN, BERT, LSTM, and Hybrid models.`,
    techstack: "TensorFlow, Pytorch, Python, NLP, NLTK",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Online T-shirt Store",
    image: projectImage2,
    description: `This is the e-commerce website for the online T-shirt store. This website is developed using React.js, Redux, Node.js, Express.js, MongoDB, and Stripe.`,
    techstack: "React.js, Redux, Node.js, Express.js, MongoDB, Stripe",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Predicting NBA Game Outcomes using K-Nearest Neighbors",
    image: projectImage3,
    description: `Utilizes K-Nearest Neighbors (KNN) machine learning algorithm and predictive analytics techniques to predict the outcome of NBA games in the 2021 season`,
    techstack: " Python, scikit-learn, Pandas, NumPy, Matplotlib, Seaborn",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Flower Checker Android Application",
    image: projectImage4,
    description: `This android application recognizes seven different kinds of flowers.`,
    techstack: "Android Studio, Java, TensorFlow Lite, ML-Kit API",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Smile and Face Detection Android Application",
    image: projectImage5,
    description: `This android application detects the face and smile of the person using the camera in real-time.`,
    techstack: "Android Studio, Java, TensorFlow Lite, ML-Kit API",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Bounce Ball",
    image: projectImage6,
    description: `A fun project which is basically a game using python and Tkinter module where user has to catch a ball and when ball strikes the wall and come back.`,
    techstack: "Python, Tkinter",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "sxs6596@mavs.uta.edu",
  phone: "+1 6823745477",
};
