
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "../Header/CardSlider.css"; // Import external CSS

// Import images correctly
import testmonials1 from "../Assets/User-images/testmonials1.jpg";
import testmonials2 from "../Assets/User-images/testmonials2.jpg";
import testmonials3 from "../Assets/User-images/testmonials3.jpg";

// Define Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Kshitiz & Meenal",
    image: testmonials1,
    description: "Our journey began on matrimonial. From the first call to endless conversations, we knew we were meant to be! Happily married since 2023.",
  },
  {
    id: 2,
    name: "Abhishek & Amrita",
    image: testmonials2,
    description: "We found love through matrimonial in 2024. Our first chat on August 27th turned into a lifetime of happiness.",
  },
  {
    id: 3,
    name: "Sudipta & Monalisa",
    image: testmonials3,
    description: "A simple match request changed our lives forever. Married in 2021, and every day feels like a dream!",
  },
  {
    id: 4,
    name: "Ashish & Priya",
    image: testmonials1,
    description: "From two strangers to soulmates, our love story is proof that destiny works in wonderful ways. Thank you, matrimonial!",
  },
  {
    id: 5,
    name: "Tikesh & Laxmi",
    image: testmonials2,
    description: "Meeting on matrimonial was pure luck. Our love grew, and we tied the knot with blessings from our families in 2022.",
  },
  {
    id: 6,
    name: "Hem & Falguni",
    image: testmonials3,
    description: "Our first conversation felt special. Within months, we knew we were meant for each other. Now, we celebrate our love every day!",
  },
];

const CardSlider = () => {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      easing: "ease-in-out",
      once: true, // Animations run once when they come into view
    });
  }, []);

  return (
    <div className="testimonials-container" data-aos="fade-up">
      <h2 className="title"> ❤️ Our Success Stories ❤️</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="testimonial-card"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} // Alternate animations for better effect
          >
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-description">{testimonial.description}</p>
            <a href="#" className="read-more">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;

