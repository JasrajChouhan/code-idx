import { Layout } from 'antd';
import React, { forwardRef } from 'react';
import { DashboardHeader } from '../molecules/dashboard-header';
import { Sidebar } from '../molecules/sidebar';

const { Header, Sider, Content } = Layout;

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export const DashboardLayout = forwardRef<
  HTMLInputElement,
  DashboardLayoutProps
>(({ children }, ref) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        width={300}
        className="sidebar"
        breakpoint={'md'}
        collapsedWidth={0}
        trigger={null}
      >
        <Sidebar />
      </Sider>
      <Layout>
        <Header className="bg-white px-2 items-center">
          <DashboardHeader ref={ref} />
        </Header>
        <Content
          style={{ margin: '16px', padding: '16px', border: 'solid 1px' }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
});
