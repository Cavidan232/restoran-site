import React from 'react'
import Card from "../components/Card"
import Banner from "../components/Banner"
import Top from "../components/crud/Top"
import Chef from "../components/crud/Chef"
import Services from '../components/Services'
function Home() {
  return (
    <div>
      <Banner/>
      <Card/>
      <Services/>
      <Top/>
      <Chef/>
    </div>
  )
}

export default Home
