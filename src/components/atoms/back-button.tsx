import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';

// Footer Component for Back Button
export const BackButton = ({
  backButtonHref,
  backButtonLabel,
}: {
  backButtonHref: string;
  backButtonLabel: string;
}) => {
  return (
    <Button
      type="link"
      href={backButtonHref}
      icon={<ArrowLeftOutlined />}
      className="text-blue-500"
    >
      {backButtonLabel}
    </Button>
  );
};
