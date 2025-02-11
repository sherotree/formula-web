import React from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import { BookOutlined, StarOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';

const { Header, Content } = AntLayout;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      key: '/',
      icon: <BookOutlined />,
      label: '公式列表',
    },
    {
      key: '/favorites',
      icon: <StarOutlined />,
      label: '我的收藏',
    },
  ];

  return (
    <AntLayout>
      <Header style={{ background: '#fff', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ margin: '0 24px 0 0' }}>公式大全</h1>
          <Menu
            mode='horizontal'
            selectedKeys={[location.pathname]}
            items={menuItems}
            onClick={({ key }) => navigate(key)}
          />
        </div>
      </Header>
      <Content style={{ padding: '24px', minHeight: 'calc(100vh - 64px)' }}>
        {children}
      </Content>
    </AntLayout>
  );
};

export default Layout;
