import React, { useState } from 'react';
import { FeatureContainer, FeatureButton, FeatureContent } from './FeatureElements';
import Navbar from '../Navbar/index';
import Sidebar from '../Sidebar'

const Feature = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <FeatureContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <FeatureContent>
      <h1>Explore More!</h1>
      <p>Kuzhimanthi, Kabsa, Al fahm, Fresh juices and many more.</p>
      <FeatureButton>Order Now</FeatureButton>
      </FeatureContent>
    </FeatureContainer>
  );
};

export default Feature;