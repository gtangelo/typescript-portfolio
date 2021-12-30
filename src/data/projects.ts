import traceback from 'assets/images/projects/traceback.png';
import flockr from 'assets/images/projects/flockr.png';
import portfolio from 'assets/images/projects/portfolio.png';
import secsoc from 'assets/images/projects/secsoc.png';
import enactus from 'assets/images/projects/enactus.png';
import Category from 'types/Category';
import Project from 'types/Project';

const REACTJS: Category = {
  title: 'ReactJS',
  colour: '#5ED3F3',
};

const FRONTEND: Category = {
  title: 'Frontend',
  colour: '#E96228',
};

const BACKEND: Category = {
  title: 'Backend',
  colour: '#4285F4',
};

const UX_UI_DESIGN: Category = {
  title: 'UX/UI',
  colour: '#8A8AF6',
};

const PYTHON: Category = {
  title: 'Python',
  colour: '#FFCE3B',
};

const TESTING: Category = {
  title: 'Testing',
  colour: '#2EA44F',
};

const DOCKER: Category = {
  title: 'Docker',
  colour: '#4285F4',
};

const CTF: Category = {
  title: 'CTF',
  colour: '#EA4335',
};

const PROJECTS: Project[] = [
  {
    title: 'Traceback - Chrome Extension',
    description:
      'Traceback is a Google Chrome extension which records the time user spends on different tasks. The purpose of this extension is to track and analyse hours spent on web browser tasks to improve overall productivity. This chrome extension was build using ReactJS alongside using various Amazon Web Services such as AWS Lambda, Amazon API Gateway and Amazon DynamoDB.',
    img: traceback,
    categories: [REACTJS, FRONTEND, BACKEND],
    link: '',
    github: 'https://github.com/gtangelo/traceback',
    deploy: '',
  },
  {
    title: 'UNSW Security Society Website',
    description: 'One of my visions as the 2021 Projects Director for the UNSW Security Society was to overhaul the society\'s website to adopt a modern UI/UX design and refactor the codebase to use an updated technology stack (ReactJS/Typescript). Alongside with my projects subcommittee, we spearheaded the development of a new website with a focus on modern UI/UX design principles and improving the user experience. The website also utilise Google Cloud Platform services to provide a serverless backend.',
    img: secsoc,
    categories: [REACTJS, UX_UI_DESIGN, FRONTEND],
    deploy: 'https://unswsecurity.com/',
    github: 'https://github.com/gtangelo/unswsecurity-website-2021',
  },
  {
    title: 'Enactus UNSW Website',
    description: "My contributions as part of the IT subcommittee for the Enactus UNSW Society in 2020-2021 transformed the website to better reflect the society's values and mission on social impact and entrepreneurship. My contributions involved developing and maintaining the codebase using ReactJS and Typescript whilst also collaborating closely with different project teams and internal portfolios to best determine how to reflect the society's brand image and vision.",
    img: enactus,
    categories: [REACTJS, UX_UI_DESIGN, FRONTEND],
    deploy: 'https://enactusunsw.org/',
  },
  {
    title: 'Messaging App RESTful API',
    description:
      'As part of a software engineering fundamentals group-based university course, my team were tasked to build a backend API that is used to serve a communication tool application similar to Slack called Flockr, operating in an agile environment. With a focus on test driven development, we also created an exhaustive test suite that ensures the implementation meets the requirements specified throughout the project\'s lifecycle.',
    img: flockr,
    categories: [PYTHON, TESTING, BACKEND],
    link: '/flockr',
    github: 'https://github.com/gtangelo/flockr-backend',
    deploy: 'https://flockr-web.herokuapp.com/',
  },
  {
    title: 'My Portfolio Website',
    description: 'Created my portfolio website using ReactJS and my own custom CSS styling.',
    img: portfolio,
    categories: [REACTJS, UX_UI_DESIGN, FRONTEND],
    link: '',
    github: 'https://github.com/gtangelo/typescript-portfolio',
    deploy: 'https://gtangelo.com',
  },
];

export default PROJECTS;
