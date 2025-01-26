import React from 'react';
import './Shop.css'
import { FaSearch } from 'react-icons/fa';
import ProductCart from '../../../modules/ProductCart/ProductCart';

const Shop:React.FC = ()=> {
  return (
    <section className="shop">
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <div className="shop_search">
                        <input type="text" placeholder='جستوچو ...'
                        className='shop_search_input'
                        />
                        <button className="shop_search_btn">
                            <FaSearch/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row mt4">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <ProductCart/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <ProductCart/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <ProductCart/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <ProductCart/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <ProductCart/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <ProductCart/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <ProductCart/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <ProductCart/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Shop