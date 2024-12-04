import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';

// Footer Component for Back Button
export const BackButton = ({
  backButtonOnSwitch,
  backButtonLabel,
}: {
  backButtonOnSwitch: () => void;
  backButtonLabel: string;
}) => {
  return (
    <Button
      type="link"
      onClick={backButtonOnSwitch}
      icon={<ArrowLeftOutlined />}
      className="text-blue-500"
    >
      {backButtonLabel}
    </Button>
  );
};
