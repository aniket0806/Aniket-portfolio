import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h1>Web Development</h1>
          <h2>💻 Custom Web Solutions</h2>
          <p>
            I build modern, high-performance, and scalable web applications
            using the MERN stack (MongoDB, Express.js, React.js, Node.js).
            Whether you need a business website, portfolio, or a SaaS platform,
            I ensure top-notch development and optimization. 
            🔹 Tech Stack:
            React.js, Next.js, Tailwind CSS, Express.js, MongoDB 
            🔹 Features:
            Fast, SEO-friendly, fully responsive
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h1>UI/UX Design</h1>
          <h2>🎨 Engaging & Interactive UI/UX</h2>
          <p>
            

A stunning design is key to user engagement! I craft visually appealing and intuitive user interfaces that enhance user experience and boost conversions.
🔹 Tools: Figma, Adobe XD, Tailwind CSS
🔹 Services: Wireframing, Prototyping, UI Redesign
🔸 [ See My Work ]
          </p>
          <button>Go</button>
        </motion.div>
       
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h1>E-Commerce Solutions</h1>
          <h2>🛒 Sell Online Seamlessly</h2>
          <p>
          Want to build an E-Commerce platform? I integrate secure payment gateways (Stripe, Razorpay), build custom product pages, and optimize performance for better conversions.
🔹 Tech Stack: MERN, Shopify, Firebase, Stripe
🔹 Features: Secure payments, cart functionality, admin dashboard
🔸 [ Launch Your Store ]
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h1>Performance Optimization</h1>
          <h2>⚡ Fast & Secure Websites</h2>
          <p>


Slow websites lose customers! I help optimize your site's speed, security, and SEO, ensuring it ranks higher and provides a smooth experience.
🔹 Services: Code optimization, lazy loading, caching, API efficiency
🔹 Results: Improved speed, lower bounce rate, better conversions
🔸 [ Improve Now ]
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
      
    </motion.div>
  );
};

export default Services;
