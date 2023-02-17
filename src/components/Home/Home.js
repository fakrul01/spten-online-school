import React from 'react';
import './Home.css';
import { } from 'react-bootstrap';
import { useHistory } from 'react-router';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import banner from './img.png';

const Home = (props) => {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/services`);
    }
    return (
        <>
            <div className="container mx-5">
                <div className="text-start pe-5">
                    <h1>THE ADVANTAGES OF ONLINE LEARNING AT HOME</h1>
                    <br /><br />
                    <p>Are there advantages of online learning? We think so! At Oxford Learning we've adjusted our daily routines just like you have, and we've transitioned to an entirely online platform that allows children to continue learning with our tutors during this difficult time.</p>
                    <br /><br />
                    <button onClick={handleClick} type="button" className="btn btn-primary">Course Details...</button>
                </div>
                <div>
                    <img src={banner} alt="Img" />
                </div>
            </div>

            <Services />
            <About />
            <Contact />
        </>
    );
};

export default Home;