import { Button, Col, Layout, Row } from 'antd';
import { useState } from 'react';
import { ChangePassword } from '../molecules/change-password';
import { ModelDialog } from '../molecules/model-dialog';

export const ChangePasswordLayout = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <>
      <Layout className="bg-white py-4 px-6 shadow-sm rounded-lg">
        <Row
          justify="space-between"
          align="middle"
          className="w-full"
          gutter={[16, 16]}
        >
          <Col xs={24} sm={18} md={18} lg={20}>
            <p className="text-lg font-medium m-0">
              Change or update your password
            </p>
          </Col>
          <Col xs={24} sm={6} md={6} lg={4} className="text-right">
            <Button
              type="primary"
              onClick={() => setIsModalVisible(true)}
              className="w-full sm:w-auto"
            >
              Update Password
            </Button>
          </Col>
        </Row>
      </Layout>

      {isModalVisible && (
        <ModelDialog
          onClose={() => setIsModalVisible(false)}
          isCrossIcon={true}
        >
          <ChangePassword />
        </ModelDialog>
      )}
    </>
  );
};
