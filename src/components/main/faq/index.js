import React from "react";
import "./style.css";
import Faqaccordion from "../Accordion";

const Faq = () => {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-xl-4">
            <div className="faqtext">
              <h2>Frequently Asked Question</h2>
              <p>Lorem ipsum dolor sit amet , consectetur adipiscing elit</p>
            </div>
          </div>
          <div className="col-lg-8 col-xl-8">
            <div className="accordioncomponent">
              <Faqaccordion />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
