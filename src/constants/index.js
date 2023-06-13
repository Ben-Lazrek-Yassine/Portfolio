import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  postgresql,
  komikult,
  leaderboard,
  nyeusi,
  coverhunt,
  pentest,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Pentesting',
    icon: pentest,
  },

];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name:'pentesting',
    icon: pentest,
  }
  
];

const experiences = [
  {
    title: 'CTF player',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2020 - Present',
    company_name:"first ctf i played and i have been playing ever since."
  },
  {
    title: 'Front end Developer',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2021 - May 2022',
    company_name:"When i first got into react and front end development"
  },
  {
    title: 'Backend Developer',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2021 - Oct 2022',
    company_name:"when i first got into backend development"
  },
  {
    title: 'Full Stack Developer',
    company_name: 'When i first made my fully functional website',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Bots and automation',
    description: 'Made many bots and automated many things',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    demo: 'https://github.com/Ben-Lazrek-Yassine/',
  },
  {
    id: 'project-2',
    name: 'React post sharing app',
    description:
      'A simple react app that allows users to share posts and like them.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    demo: 'https://github.com/Ben-Lazrek-Yassine/React-post-sharing-app',
  },
  {
    id: 'project-3',
    name: 'StudyShare',
    description: 'This is a single-page studying platform app built with React and firebase',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    demo: 'https://github.com/Ben-Lazrek-Yassine/StudyShare',

  },
  {
    id: 'project-5',
    name: '"hacker" on hackthebox',
    description:
      '13% towards pro hacker',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    demo : 'https://app.hackthebox.com/users/656047',
  },
];

export { services, technologies, experiences, projects };
