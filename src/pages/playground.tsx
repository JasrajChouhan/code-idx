import { Button, Grid, Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { io } from 'socket.io-client';
import { EditorComponent } from '../components/molecules/editor/editor';
import { TerminalComponent } from '../components/molecules/terminal';
import { getEnv } from '../config/getEnv';
import { useEditorSocket } from '../store/editor-socket.store';

// Styles for layout sections
const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: '300px',
  padding: '16px',
  color: '#000',
  backgroundColor: '#f5f5f5',
  border: '1px solid #d9d9d9',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#1677ff',
  padding: '16px',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: '16px',
  backgroundColor: '#1e1e1e',
  color: '#fff',
  height: '30vh',
  overflow: 'auto',
};

const layoutStyle: React.CSSProperties = {
  height: '100vh',
};

const Playground = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const [view, setView] = useState<'sidebar' | 'code' | 'browser'>('code');

  const { setEditorSocket, editorSocket } = useEditorSocket.getState();

  useEffect(() => {
    const editorSocketConnection = io(`${getEnv('VITE_BACKEND_URL')}/editor`, {
      query: {
        hello: 'ok',
      },
    });

    setEditorSocket(editorSocketConnection);
  });

  const renderInlineButtons = () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        padding: '8px',
      }}
    >
      <Button type="primary" onClick={() => setView('sidebar')}>
        Sidebar
      </Button>
      <Button type="primary" onClick={() => setView('code')}>
        Code Editor
      </Button>
      <Button type="primary" onClick={() => setView('browser')}>
        Browser
      </Button>
    </div>
  );

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Link to={'/dashboard'}> go to dashboard </Link>
        Coding Playground
      </Header>
      {!screens.md && renderInlineButtons()}
      <Layout>
        {screens.md ? (
          <Sider width="20%" style={siderStyle}>
            Sidebar
          </Sider>
        ) : (
          view === 'sidebar' && (
            <Sider width="100%" style={siderStyle}>
              Sidebar
            </Sider>
          )
        )}
        <Content style={contentStyle}>
          {screens.md || view === 'code' ? (
            <div>
              <EditorComponent />
            </div>
          ) : (
            <div>browser </div>
          )}
        </Content>
      </Layout>
      <Footer style={footerStyle}>
        <TerminalComponent />
      </Footer>
    </Layout>
  );
};

export default Playground;
