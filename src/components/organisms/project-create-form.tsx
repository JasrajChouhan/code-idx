import { Button, Form, Input } from 'antd';

export const ProjectCreateForm = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Create a New Project</h2>
      <Form layout="vertical" onFinish={() => alert('Form filled.')}>
        <Form.Item
          label="Project name"
          name="project-name"
          rules={[{ required: true, message: 'Please put your project name!' }]}
        >
          <Input type="text" placeholder="co idx" />
        </Form.Item>
        <Button
          type="dashed"
          htmlType="submit"
          block
          className=" bg-blue-500 text-white"
        >
          Create Project
        </Button>
      </Form>
    </>
  );
};
