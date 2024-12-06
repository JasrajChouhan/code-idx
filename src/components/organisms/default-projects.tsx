import { BsGithub } from 'react-icons/bs';
import { IoBrowsers } from 'react-icons/io5';
import { RiServerLine } from 'react-icons/ri';

export interface DefaultProjectProps {
  technologyName: string;
  technologyIcon: React.ReactNode;
  totalFork?: number | string;
  runPlace?: 'server' | 'browser';
}

export const DefaultProject = ({
  technologyIcon,
  technologyName,
  totalFork = 0,
  runPlace = 'browser',
}: DefaultProjectProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border hover:shadow-xl transition-shadow duration-300 ease-in-out w-full max-w-xs cursor-pointer hover:scale-110 hover:transition hover:ease-in-out hover:duration-300">
      <div className="flex justify-between items-center mb-4">
        <div className="text-primary-500 text-2xl">{technologyIcon}</div>
        <div className="text-gray-600 text-xl">
          {runPlace === 'browser' ? <IoBrowsers /> : <RiServerLine />}
        </div>
      </div>

      {/* Technology Name */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
        {technologyName}
      </h3>

      {/* Footer Section */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <span className="font-semibold">coIdx</span>
        <div className="flex items-center gap-2">
          <BsGithub className="text-lg" />
          <span>{totalFork}</span>
        </div>
      </div>
    </div>
  );
};
