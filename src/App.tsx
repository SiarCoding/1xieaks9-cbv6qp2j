import './framer/styles.css'

import HeroFramerComponent from './framer/hero'
import HeaderFramerComponent from './framer/header'
import PartnersFramerComponent from './framer/partners'
import FeaturesFramerComponent from './framer/features'
import StatsFramerComponent from './framer/stats'

export default function App() {
  return (
    <div className='flex flex-col items-center gap-3 '>
      <HeroFramerComponent.Responsive/>
      <HeaderFramerComponent.Responsive/>
      <PartnersFramerComponent.Responsive/>
      <FeaturesFramerComponent.Responsive/>
      <StatsFramerComponent.Responsive/>
    </div>
  );
};