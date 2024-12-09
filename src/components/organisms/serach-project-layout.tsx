import demoProjects from '../../data/demo-projects';
import { DefaultProject } from './default-projects';

export interface SearchProjectLayoutProps {
  onProjectClick: () => void;
  setTechnologyName: (name: string) => void;
}

export const SearchProjectLayout = ({
  onProjectClick,
  setTechnologyName,
}: SearchProjectLayoutProps) => {
  return (
    <>
      <div>
        {/* filter tag or button */}
        {/* serach workspace */}
      </div>

      {/* AllDefaultProject */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-100 ">
        {demoProjects.map((project) => (
          <DefaultProject
            key={project.technologyName}
            technologyIcon={project.technologyIcon}
            technologyName={project.technologyName}
            runPlace={project.runPlace as 'browser' | 'server'}
            onClick={() => {
              setTechnologyName(project.technologyName);
              onProjectClick();
            }}
          />
        ))}
      </div>
    </>
  );
};
