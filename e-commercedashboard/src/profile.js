import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import './Profile.css';

const Profile = () => {
    const [data, setdata] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let auth = JSON.parse(localStorage.getItem("user"));
        setdata(auth);
    }, []);

    const goadd = () => {
        navigate("/add");
    }

    const goupdate = () => {
        navigate("/update/:_id");
    }

    const goproduct = () => {
        navigate("/");
    }

    const logout = () => {
        localStorage.clear();
        navigate('/regist');
    }

    return (
        <div className='profile-container'>
            <h1 className='profile-heading'>Hey, {data.firstname} {data.lastname}</h1>
            <Accordion defaultActiveKey="0" className='accordion'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>About the E-Commerce Project</Accordion.Header>
                    <Accordion.Body>
                        This e-commerce platform is designed to simplify online shopping by providing users with a seamless and intuitive experience. It offers features like product browsing, user authentication, and a secure payment gateway to enhance usability and trust.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Features & Applications</Accordion.Header>
                    <Accordion.Body>
                        Key features include a product catalog, advanced search functionality, user profiles, and a shopping cart system. It's built with scalability in mind, making it suitable for both small retailers and large enterprises. The platform supports integration with popular payment systems and delivery services.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Project Uses & Benefits</Accordion.Header>
                    <Accordion.Body>
                        This project can be used by businesses of all sizes to set up an online presence quickly. With a focus on performance and security, it's an excellent solution for retailers looking to expand their reach. The e-commerce platform ensures that businesses can manage inventory, process orders, and provide a smooth shopping experience to their customers.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className='profile-buttons'>
                <Button className='profile-btn' variant="dark" onClick={goadd}>Add page</Button>
                <Button className='profile-btn' variant="dark" onClick={goupdate}>Update page</Button>
                <Button className='profile-btn' variant="dark" onClick={goproduct}>Products</Button>
                <Button className='profile-btn' variant="dark" onClick={logout}>Logout!!</Button>
            </div>
        </div>
    );
}

export default Profile;
