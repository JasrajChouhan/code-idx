import { Button } from 'antd';
import { usePing } from './hooks/api/queries/usePing';

export const App: React.FC = () => {
  const { isError, isLoading, data, error } = usePing();
  if (isError) {
    return <p>{error?.message}</p>;
  }

  if (isLoading) {
    return <p>loading....</p>;
  }

  return (
    <div>
      App
      <Button variant="dashed" onClick={() => alert('Hello World')}>
        Hello
      </Button>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};
