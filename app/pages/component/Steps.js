import React from 'react';

const stepsData = [
  { icon: '/Ellipse.png', alt: 'Fill up Application Form', text: 'Fill up Application Form' },
  { icon: '/Ellipse (1).png', alt: 'Make Online Payment', text: 'Make Online Payment' },
  { icon: '/Ellipse (2).png', alt: 'Executive will Process Application', text: 'Executive will Process Application' },
  { icon: '/Groupmail.png', alt: 'Get Confirm Mail', text: 'Get Confirm Mail' },
];

const Steps = () => {
  return (
    <div className="steps-container">
      {stepsData.map((step, index) => (
        <div className="step" key={index} tabIndex={0} aria-label={step.text}>
          <div className="iconstep">
            <img src={step.icon} alt={step.alt} />
          </div>
          <p>{step.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Steps;
