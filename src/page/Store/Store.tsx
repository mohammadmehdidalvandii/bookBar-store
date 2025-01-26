import React from 'react'
import PageHeader from '../../components/modules/PageHeader/PageHeader'
import Shop from '../../components/template/store/Shop/Shop'

function Store():React.ReactElement {
  return (
    <>
    <PageHeader 
      title='فروشگاه'
    />
    <Shop/>
    </>
  )
}

export default Store