import React, { useState } from 'react';

import 'antd/dist/antd.min.css'
// import 'antd/dist/antd.css' does`t work 
import { Menu } from 'antd';
import { MailOutlined, HomeOutlined, SettingOutlined, FieldTimeOutlined } from '@ant-design/icons';

const items = [
  {
    label: 'Home page',
    key: 'home-page',
    icon: <HomeOutlined />,
  },
  {
    label: 'About us',
    key: 'setings',
    icon: <SettingOutlined />,
  },
  {
    label: 'Contact us',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Book Appointment',
    key: 'appointment',
    icon: <FieldTimeOutlined />,
  },



];

const App = () => {
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default App;