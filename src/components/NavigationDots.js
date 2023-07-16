import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["Home", "About", "Projects", "Skills", "Testimonials", "Footer"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#011936" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
