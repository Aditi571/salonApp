import React, { useRef } from 'react';
import '../css/ServiceList.css';
import { FaArrowRight } from 'react-icons/fa';

const services = [
  {
    title: "Styling",
    duration: "1 hr, 30 mins - 2 hrs",
    description: "We do not have pricing for trims. All haircuts are full services that include a wash...",
    price: "from $90"
  },
  {
    title: "Deep Condition (Standard)",
    duration: "15 mins",
    description: "This is an add on deep conditioning treatment service for clients who need to rest...",
    price: "$25"
  },
  {
    title: "Blow Dry/Silk Press",
    duration: "1 hr - 2 hrs",
    description: "Please do NOT apply castor oil or coconut oil to hair before service. If you have N...",
    price: "$85"
  },
  {
    title: "Root Touch-Up (Single Process)",
    duration: "1 hr",
    description: "For RETURNING client, and anyone needing a root touch up. With less that 2 inch...",
    price: "$125"
  },
  {
    title: "Root Touch-Up (Single Process)",
    duration: "1 hr",
    description: "For RETURNING client, and anyone needing a root touch up. With less that 2 inch...",
    price: "$125"
  }
];

const Styling = () => {
  const containerRef = useRef(null);

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="service-list-wrapper ">
      <div className="service-list-container" ref={containerRef}>
        <div className="service-list">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.duration}</p>
                <p>{service.description}</p>
              </div>
              <div className="service-price">
                <span>{service.price}</span>
                <button className="add-btn">+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="arrow-right" onClick={handleScrollRight}> <FaArrowRight /></div>
    </div>
  );
};

export default Styling;
