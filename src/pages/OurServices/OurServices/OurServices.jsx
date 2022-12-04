import React from 'react'
//Importing progress bar function component & CSS Stylesheet
import ProgressBar from './Components/ProgressBar';
import Heading from '../../components/heading/Heading'
import ServicesCard from './Components/ServicesCard'
import './Components/ProgressBar.css'
import { useViewport } from '../../hooks/useViewport';
import MobileHeading from "../../components/mobile/MobileHeading"



function OurServices() {
  const { width } = useViewport();
  const breakpoint = 992
  return (
    <div>
      <MobileHeading name="Our Services" />
      {/* {
        width < breakpoint ?  :  <Heading name= "Our Services"/>
      } */}

      <ServicesCard />

      {/* applying page alignment css to all progress bars within the div */}
      <div className='progressBar_pageAlignment'>

        {/* calling progressBar function & updating values percent and title values */}
        <ProgressBar progressPercent={84} progressTitle="Deadlines Met" />
        <ProgressBar progressPercent={90} progressTitle="Within Budget" />
        <ProgressBar progressPercent={96} progressTitle="Client Satisfaction" />
        <ProgressBar progressPercent={100} progressTitle="Carbon Neutral" />
      </div>

    </div>
  )
}


export default OurServices