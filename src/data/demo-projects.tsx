import { SiReact, SiNodedotjs, SiPython, SiRust } from 'react-icons/si';

export const demoProjects = [
  {
    technologyName: 'reactjs',
    technologyIcon: <SiReact />,
    totalFork: 42,
    runPlace: 'browser',
  },
  {
    technologyName: 'nodejs',
    technologyIcon: <SiNodedotjs />,
    totalFork: 35,
    runPlace: 'server',
  },
  {
    technologyName: 'python',
    technologyIcon: <SiPython />,
    totalFork: 20,
    runPlace: 'server',
  },
  {
    technologyName: 'rust',
    technologyIcon: <SiRust />,
    totalFork: 15,
    runPlace: 'browser',
  },
];

export default demoProjects;
