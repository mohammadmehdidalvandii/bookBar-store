import React from 'react'
import './Suggest.css'
import Title from '../../../modules/Title/Title'
import ProductCart from '../../../modules/ProductCart/ProductCart'

const Suggest:React.FC =() =>{
  return (
    <section className="suggest">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Title
                        title='پیشنهاد محدود'
                        text='لیغات ویژه دریافت کنید همه کتاب ها اکنون !50٪ تخفیف دارند'
                    />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div className="suggest_wrapper">
                        <ProductCart/>
                        <ProductCart/>
                        <ProductCart/>
                        <ProductCart/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Suggest