import { Typography } from 'antd';

const { Title } = Typography;

export const CardHeader = ({ headerLabel }: { headerLabel: string }) => {
  return (
    <div className="mb-4">
      <Title level={3} className="text-center">
        {headerLabel}
      </Title>
    </div>
  );
};
