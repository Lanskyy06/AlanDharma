import React from "react";
import "./Testimonials.css";
import user_icon from "/src/assets/user_icon.svg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Alan delivered exceptional work on our project. His attention to detail and creativity exceeded our expectations. Highly recommend!",
      name: "John Doe",
      role: "Project Manager, TechCorp"
    },
    {
      id: 2,
      text: "Working with Alan was a pleasure. He brought fresh ideas and delivered on time. Our website looks amazing thanks to him.",
      name: "Jane Smith",
      role: "CEO, StartupXYZ"
    },
    {
      id: 3,
      text: "Alan's skills in web development are top-notch. He solved complex issues effortlessly and provided great communication throughout.",
      name: "Mike Johnson",
      role: "CTO, Innovate Ltd"
    }
  ];

  return (
    <div className="testimonials">
      <h2>What Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={user_icon} alt="User Icon" className="testimonial-icon" />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-author">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
