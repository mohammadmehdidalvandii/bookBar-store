import React from "react"
import Banner from "../../components/template/home/Banner/Banner"
import Showcase from "../../components/template/home/Showcase/Showcase"
import Selling from "../../components/template/home/Selling/Selling"
import People from "../../components/template/home/People/People"

function Home(): React.ReactElement{
  return (
    <>
    <Banner/>
    <Showcase/>
    <Selling/>
    <People/>
    <br /><br /><br /><br /><br />
    </>
  )
}

export default Home