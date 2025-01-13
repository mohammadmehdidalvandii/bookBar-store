import React from 'react';
import './People.css';
import Title from '../../../modules/Title/Title';
import ProductCart from '../../../modules/ProductCart/ProductCart';

function People() {
  return (
    <section className="people">
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <Title
                        title='انتخاب مردم'
                        text='خواندن کتاب به شما کمک می کند تا مهارت های ارتباطی خود را توسعه دهید'
                    />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <div className="people_wrapper">
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

export default People