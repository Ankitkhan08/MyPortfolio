import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaLinkedin,
  FaLinkedinIn,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1-min.jpg';
import Work2 from './assets/project-2-min.jpg';
import Work3 from './assets/project-3-min.jpg';
import Work4 from './assets/project-4-min.jpg';
import Work5 from './assets/project-5-min.jpg';
import Work6 from './assets/project-6-min.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Ankit',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Khan',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Chandigarh',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91 98175 44104',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'officialankitkhan@gmail.com',
  },

  {
    id: 9,
    title: 'LinkedIn : ',
    description: <a href='https://www.linkedin.com/in/ankit-khan-3689b5247' target='_blank'> Ankit Khan</a>,
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'English, Hindi',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  // {
  //   id: 3,
  //   no: '8+',
  //   title: 'Happy <br /> Customers',
  // },

  // {
  //   id: 4,
  //   no: '3+',
  //   title: ' Awards <br /> Won',
  // },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - 2025',
    title: 'Bachelors Degree <span> Chandigarh Engineering College </span>',
    desc: '"Currently pursuing a B.Tech in Computer Science and Engineering at Chandigarh Engineering College, focusing on building technical expertise and problem-solving skills."',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021',
    title: 'High School <span> Northern International School </span>',
    desc: 'Graduated from Northern International School with a non-medical curriculum. Strong academic record and dedication to science and mathematics.',
  },

];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '80',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '85',
  },

  {
    id: 4,
    title: 'React JS',
    percentage: '75',
  },

  {
    id: 5,
    title: 'Express JS',
    percentage: '40',
  },

  {
    id: 6,
    title: 'C++',
    percentage: '65',
  },

  {
    id: 7,
    title: 'Java',
    percentage: '45',
  },

  {
    id: 8,
    title: 'DSA',
    percentage: '55',
  },
];

export const portfolio = [
  {
    id: 5,
    img: Work5,
    title: 'Chrome Extension',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'ChatBot',
      },
      // {
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'MERN',
      },
      {
        icon: <FiExternalLink />,
        // title: 'Preview : ',
        desc: <a href="https://github.com/Ankitkhan08/chrome-Extension" target="_blank">Visit the  Repo</a>,
      },
    ],
  },
  {
    id: 1,
    img: Work1,
    title: 'Real Estate',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Real Estate Project',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: '',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React js',
      },
      {
        icon: <FiExternalLink />,
        // title: 'Preview : ',
        desc: <a href='https://github.com/Ankitkhan08/real-estate' target="_blank">Visit the  Repo</a>,
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Text Manager',
    details: [
      {
        icon: <FiFileText />,
        // title: 'Project : ',
        desc: 'Text Manager',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        // title: 'Preview : ',
        desc: <a href='https://github.com/Ankitkhan08/text-manager' target="_blank" > Visit the  Repo</a>,
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'NewsHub',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'NewsHub',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        // title: 'Preview : '
        desc: <a href='https://github.com/Ankitkhan08/newshub' target="_blank"> Visit the  Repo</a>,
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'CryptoVerse',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'CrytoVerse',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        // title: 'Preview : ',
        desc: <a href='https://github.com/Ankitkhan08/cryptoverse'  target="_blank" > Visit the  Repo</a>,
      },
    ],
  },

  

  {
    id: 6,
    img: Work6,
    title: 'Weather Site',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Weather website',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Node JS, React JS',
      },
      {
        icon: <FiExternalLink />,
        // title: 'Preview : ',
        desc: <a href='https://github.com/Ankitkhan08/weather-app-nodejs'target="_blank">Visit the  Repo</a>,
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
