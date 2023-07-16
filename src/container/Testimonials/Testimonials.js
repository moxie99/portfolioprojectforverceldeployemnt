import * as React from "react";
import "./Testimonials.scss";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const Testimonials = () => {
  const [brands, setBrands] = React.useState([]);
  const [testimonials, setTestimonials] = React.useState([]);
  const [presentIndex, setPresentIndex] = React.useState(0);

  const handleClick = (index) => {
    setPresentIndex(index);
  };

  React.useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const testimonialDRY = testimonials[presentIndex];
  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(testimonialDRY.imgurl)} alt="testimonial" />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonialDRY.feedback}</p>
              <div>
                <h4 className="bold-text">{testimonialDRY.name}</h4>
                <h5 className="p-text">{testimonialDRY.company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-buttons app__flex">
            <div
              className="app__flex"
              onClick={() => {
                handleClick(
                  presentIndex === 0
                    ? testimonials.length - 1
                    : presentIndex - 1
                );
              }}
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() => {
                handleClick(
                  presentIndex === testimonials.length - 1
                    ? 0
                    : presentIndex + 1
                );
              }}
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className="app__testimonials-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, "app__testimonials"),
  "Testimonials",
  "app__primarybg"
);
