import React from 'react'

import TopDeals from './topDeals/TopDeals'
import CategoryHolder from './category/CategoryHolder'
import Banner from './banner/Banner'

function Home() {
  return (
    <>
      <Banner />
      <CategoryHolder />
      <TopDeals />
    </>
  )
}

export default Home