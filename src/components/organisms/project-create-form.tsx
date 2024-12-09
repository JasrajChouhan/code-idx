import React from 'react';
import { Button, Form, Input, notification } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useNavigate } from 'react-router';

import { useCreateProject } from '../../hooks/api/mutaion/useCreateProject';

export const ProjectCreateForm = ({
  projectTechStack,
}: {
  projectTechStack: string;
}) => {
  const navigate = useNavigate();
  const { data, mutateAsync: startCreatingProject } = useCreateProject();
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleProjectCreateForm = async (projectData) => {
    setLoading(true);
    try {
      await startCreatingProject({ projectTechStack, ...projectData });
      notification.success({
        message: 'Project Created Successful',
        description: 'You have successfully crating project!',
      });
      console.log(data);
      navigate('/playground');
    } catch (error: any) {
      const errorData = error?.props?.response?.data;
      notification.error({
        message: 'Project creation operation failed',
        description:
          errorData?.message || 'Something went wrong. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Create a New Project</h2>
      <Form layout="vertical" onFinish={handleProjectCreateForm}>
        <Form.Item
          label="Project name"
          name="projectName"
          rules={[{ required: true, message: 'Please put your project name!' }]}
        >
          <Input type="text" placeholder="co idx" />
        </Form.Item>
        <Form.Item
          label="Project Description (Optional)"
          name="project-description"
        >
          <TextArea
            maxLength={300}
            placeholder="Always try new things."
            showCount={true}
          />
        </Form.Item>
        <Button
          type="dashed"
          htmlType="submit"
          block
          className=" bg-blue-500 text-white"
          loading={loading}
        >
          Create Project
        </Button>
      </Form>
    </>
  );
};
