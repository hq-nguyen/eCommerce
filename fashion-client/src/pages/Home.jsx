import React from 'react'
import Hero from '../components/Hero'
import LatestConllection from '../components/LatestConllection'
import BestSeller from '../components/BestSeller'
import Policy from '../components/Policy'
import NewletterBox from '../components/NewletterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestConllection/>
      <BestSeller/>
      <Policy/>
      <NewletterBox/>
    </div>
  )
}

export default Home
