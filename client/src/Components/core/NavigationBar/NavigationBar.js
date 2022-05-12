import React, { useState } from "react"
import { useNavigate } from "react-router-dom";


import 'antd/dist/antd.min.css'
import './NavigationBar.css'
// import 'antd/dist/antd.css' does`t work 



import { Menu, Image } from 'antd';
import { MailOutlined, HomeOutlined,  SettingOutlined, FieldTimeOutlined, LoginOutlined, LogoutOutlined, ApiOutlined } from '@ant-design/icons';


const items = [
    {
        label: 'Home page',
        key: 'home-page',
        icon: <HomeOutlined />,
    },
    {
        label: 'Book Appointment',
        key: 'book-appointment',
        icon: <FieldTimeOutlined />,
    },
    {
        label: 'About us',
        key: 'about-us',
        icon: <SettingOutlined />,

    },
    {
        label: 'Contact us',
        key: 'contact-us',
        icon: <MailOutlined />,
    },
    {
        key: 'home-page-banner',
        icon: <Image preview={false} width={550} height={50} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEA0aEytwAg9gw1KMhY-Yb6TtAFQJNNZi_g&usqp=CAU'} />
    },
    
    // image site banner 
    // { disabled: true, }, { disabled: true, }, { disabled: true, }, { disabled: true, }, { disabled: true, }, { disabled: true, }, { disabled: true, }, { disabled: true, icon: < />, },
    // { disabled: true, }, { disabled: true, }, { disabled: true, }, { disabled: true, }, { disabled: true, }, { disabled: true, },
    {
        label: 'Sign up ',
        key: 'sign-up ',
        icon: <ApiOutlined />,
    },
    {
        label: 'Login',
        key: 'login',
        icon: <LoginOutlined />,
    },
    {
        label: 'Logout',
        key: 'logout',
        icon: <LogoutOutlined />,
    },


];



const NavigationBar = () => {

    const [current, setCurrent] = useState();
    let navigate = useNavigate();

    const onClick = (e) => {
        console.log('clicked ', e);
        setCurrent(e.key);
        navigate(`/${e.key}`);

    };

    return (

        <div className="navigation-bar">
            <div className="menuOne">
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
            </div>
        </div>
    )


}


export default NavigationBar