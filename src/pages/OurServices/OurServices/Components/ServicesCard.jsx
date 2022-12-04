import React from 'react'
import Card from '../../../components/card/Card'
import MobileCard from "../../../components/mobile/MobileCard"
import services from '../../../data/servicesData.js'
import { useViewport } from '../../../hooks/useViewport';
import './ProgressBar.css'

function createCard(service) {
  return (<Card
    key={service.id}
    link={service.imgURL}
    name={service.name}
  />
  );
}

function CreateMobileCard(service) {
  return (<MobileCard
    key={service.id}
    link={service.imgURL}
    name={service.name}
  />
  );
}


function ServicesCard() {

  return (
    <div className="mservicesCard">
      {services.map(CreateMobileCard)}
    </div>

  )
}

export default ServicesCard
