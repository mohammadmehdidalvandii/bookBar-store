import React from 'react';
import './Showcase.css'
import { FaHeart } from 'react-icons/fa';
import ProductCart from '../../../modules/ProductCart/ProductCart';

const Showcase:React.FC = ()=>{
  return (
    <section className="showcase">
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <h1 className="title">مرور بر اساس ژانرها</h1>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="showcase_buttons">
                        <button className="showcase_btn">ماجراجویی
                            <span>(250 کتاب)</span>
                        </button>
                        <button className="showcase_btn">ماجراجویی
                            <span>(250 کتاب)</span>
                        </button>
                        <button className="showcase_btn">ماجراجویی
                            <span>(250 کتاب)</span>
                        </button>
                        <button className="showcase_btn">ماجراجویی
                            <span>(250 کتاب)</span>
                        </button>
                        <button className="showcase_btn">ماجراجویی
                            <span>(250 کتاب)</span>
                        </button>
                        <button className="showcase_btn">ماجراجویی
                            <span>(250 کتاب)</span>
                        </button>
                        <button className="showcase_btn">ماجراجویی
                            <span>(250 کتاب)</span>
                        </button>
                        <button className="showcase_btn">ماجراجویی
                            <span>(250 کتاب)</span>
                        </button>
                        <button className="showcase_btn">ماجراجویی
                            <span>(250 کتاب)</span>
                        </button>
                        <button className="showcase_btn">ماجراجویی
                            <span>(250 کتاب)</span>
                        </button>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12">
                    <div className="showcase_wrapper">
                        <ProductCart/>
                        <ProductCart/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Showcase