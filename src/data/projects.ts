import traceback from 'assets/images/projects/traceback.png';
import circles from 'assets/images/projects/circles.png';
import jobsboard from 'assets/images/projects/jobsboard.png';
import secsoc from 'assets/images/projects/secsoc.png';
import Category from 'types/Category';
import Project from 'types/Project';

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

const REACTJS: Category = {
  title: 'ReactJS',
  colour: '#5ED3F3',
};

const TESTING: Category = {
  title: 'Testing',
  colour: '#2EA44F',
};

const PROJECTS: Project[] = [
  {
    title: 'Circles',
    description:
      'A degree planner for UNSW students. Features an interactive drag-and-drop interface for easy term planning and automatic progression checking to help you stay on track for graduation.',
    img: circles,
    categories: [FRONTEND, TESTING, UX_UI_DESIGN, REACTJS],
    link: '',
    github: 'https://github.com/csesoc/circles',
    deploy: 'https://circles.csesoc.app/',
  },
  {
    title: 'Jobsboard',
    description:
      'A jobs board application to help CSE students find jobs and connecting them with top employers.',
    img: jobsboard,
    categories: [FRONTEND, REACTJS],
    link: '',
    deploy: 'https://jobsboard.csesoc.unsw.edu.au/',
  },
  {
    title: 'UNSW Security Society Website',
    description: 'One of my visions as the 2021 Projects Director for the UNSW Security Society was to overhaul the society\'s website to adopt a modern UI/UX design and refactor the codebase to use an updated technology stack (ReactJS/Typescript). Alongside with my Projects subcommittee, we spearheaded the development of a new website with a focus on modern UI/UX design principles and improving the user experience. The website also utilise Google Cloud Platform services to provide a serverless backend.',
    img: secsoc,
    categories: [FRONTEND, UX_UI_DESIGN, REACTJS],
    deploy: 'https://unswsecurity.com/',
    github: 'https://github.com/gtangelo/unswsecurity-website-2021',
  },
  {
    title: 'Traceback - Chrome Extension',
    description:
      'Traceback is a Google Chrome extension which records the time user spends on different tasks. The purpose of this extension is to track and analyse hours spent on web browser tasks to improve overall productivity. This chrome extension was build using ReactJS alongside various Amazon Web Services such as AWS Lambda, Amazon API Gateway and Amazon DynamoDB.',
    img: traceback,
    categories: [FRONTEND, BACKEND, REACTJS],
    link: '',
    github: 'https://github.com/gtangelo/traceback',
    deploy: '',
  },
];

export default PROJECTS;
