import { Button } from 'antd';

export const App: React.FC = () => {
  return (
    <div>
      App
      <Button variant="dashed" onClick={() => alert('Hello World')}>
        Hello
      </Button>
    </div>
  );
};
