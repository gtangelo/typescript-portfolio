import traceback from 'assets/images/projects/traceback.png';
import flockr from 'assets/images/projects/flockr.png';
import portfolio from 'assets/images/projects/portfolio.png';
import secsoc from 'assets/images/projects/secsoc.png';
import enactus from 'assets/images/projects/enactus.png';

const REACTJS = {
  title: 'ReactJS',
  colour: '#5ED3F3',
};

const HTML_CSS = {
  title: 'HTML/CSS',
  colour: '#E96228',
};

const UX_UI_DESIGN = {
  title: 'UX/UI',
  colour: '#8A8AF6',
};

const PYTHON = {
  title: 'Python',
  colour: '#FFCE3B',
};

const FLASK = {
  title: 'Flask',
  colour: '#387AB1',
};

const TESTING = {
  title: 'Testing',
  colour: '#2EA44F',
};

const DOCKER = {
  title: 'Docker',
  colour: '#4285F4',
};

const CTF = {
  title: 'CTF',
  colour: '#EA4335',
};

const PROJECTS = [
  {
    title: 'Traceback',
    description:
      'Traceback is a Google Chrome extension which records the time user spends on different tasks.',
    img: traceback,
    categories: [REACTJS],
    // link: '/traceback',
    github: 'https://github.com/gtangelo/traceback',
    deploy: '',
  },
  {
    title: 'Flockr RESTFUL API',
    description:
      'Backend API project that is used to serve a communication tool application similar to Slack called Flockr.',
    img: flockr,
    categories: [PYTHON, FLASK, TESTING],
    // link: '/flockr',
    github: 'https://github.com/gtangelo/flockr-backend',
    deploy: 'https://flockr-web.herokuapp.com/',
  },
  {
    title: 'Enactus UNSW Website',
    description: "Help redesign and update UNSW Enactus Society's website",
    img: enactus,
    categories: [REACTJS, HTML_CSS, UX_UI_DESIGN],
    deploy: 'https://enactusunsw.org/',
  },
  {
    title: 'My Portfolio Website',
    description: 'Created my portfolio website using ReactJS and my own custom CSS styling.',
    img: portfolio,
    categories: [REACTJS, HTML_CSS, UX_UI_DESIGN],
    link: '/website',
    github: 'https://github.com/gtangelo/typescript-portfolio',
    // deploy: 'https://gtangelo.com',
  },

  {
    title: 'Security Society Website',
    description: 'Redesign landing page and improve existing features',
    img: secsoc,
    categories: [HTML_CSS, UX_UI_DESIGN],
    deploy: 'https://unswsecurity.com/',
  },
];

export default PROJECTS;
