import { SiReact, SiNodedotjs, SiPython, SiRust } from 'react-icons/si';

export const demoProjects = [
  {
    technologyName: 'React',
    technologyIcon: <SiReact />,
    totalFork: 42,
    runPlace: 'browser',
  },
  {
    technologyName: 'Node.js',
    technologyIcon: <SiNodedotjs />,
    totalFork: 35,
    runPlace: 'server',
  },
  {
    technologyName: 'Python',
    technologyIcon: <SiPython />,
    totalFork: 20,
    runPlace: 'server',
  },
  {
    technologyName: 'Rust',
    technologyIcon: <SiRust />,
    totalFork: 15,
    runPlace: 'browser',
  },
];

export default demoProjects;
