import React from 'react';
import './Service.css';

const Service = (props) => {
    const { img, title, detail, students, lessons, price } = props.service; // destructuring in service components

    return (
        <div className="service">
            <img src={img} alt="" />
            <h4> {title}</h4>
            <p>{detail}</p>
            <h5>Students: {students} </h5>
            <h5>Lessons: {lessons} </h5>
            <h5>Price: ${price} </h5>
            <button type="button" className="btn btn-primary">Details...</button>
        </div>
    );
};

export default Service;