import React, { useState } from "react";
import { Container } from "./accordion.styles";
import { data } from "./data";

const Accordion = () => {
  const [faqs, setFaqs] = useState(data);

  return (
    <>
      <Container>
        {faqs.map((val) => (
          <AccordionItem key={val.id} faq={val} />
        ))}
      </Container>
    </>
  );
};

const AccordionItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="wrap">
      <div className="content" onClick={toggleAccordion}>
        <h4>{faq.q}</h4>
        <div className="icon">{isOpen ? "-" : "+"}</div>
      </div>
      {isOpen && <p>{faq.a}</p>}
    </div>
  );
};

export default Accordion;
