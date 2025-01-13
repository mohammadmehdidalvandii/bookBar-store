import React from 'react';
import './Selling.css';
import Title from '../../../modules/Title/Title';
import { Link } from 'react-router-dom';

const Selling:React.FC = ()=>{
  return (
    <section className="selling">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Title
                        title='ورودی های جدید'
                        text='خواندن کتاب به شما کمک می کند تا مهارت های ارتباطی خود را توسعه دهید'
                    />
                </div>
            </div>
            <div className="row mt-5 row-gap-4">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Link to='/' className="selling_item">
                        <img src="/assets/images/nbook.jpg" alt="book" className="selling_item_img" />
                        <div className="selling_item_wrapper">
                            <span className="selling_item_subTitle">زندگی</span>
                            <h5 className="selling_item_title">نوری که نمی توانیم ببینیم</h5>
                            <span className="selling_item_author">اثری از ارمان </span>
                            <span className="selling_item_price">250,000 تومان</span>
                            <button className="selling_item_addBasket btn_blue">اکنون بخر</button>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Link to='/' className="selling_item">
                        <img src="/assets/images/nbook.jpg" alt="book" className="selling_item_img" />
                        <div className="selling_item_wrapper">
                            <span className="selling_item_subTitle">زندگی</span>
                            <h5 className="selling_item_title">نوری که نمی توانیم ببینیم</h5>
                            <span className="selling_item_author">اثری از ارمان </span>
                            <span className="selling_item_price">250,000 تومان</span>
                            <button className="selling_item_addBasket btn_blue">اکنون بخر</button>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Link to='/' className="selling_item">
                        <img src="/assets/images/nbook.jpg" alt="book" className="selling_item_img" />
                        <div className="selling_item_wrapper">
                            <span className="selling_item_subTitle">زندگی</span>
                            <h5 className="selling_item_title">نوری که نمی توانیم ببینیم</h5>
                            <span className="selling_item_author">اثری از ارمان </span>
                            <span className="selling_item_price">250,000 تومان</span>
                            <button className="selling_item_addBasket btn_blue">اکنون بخر</button>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Link to='/' className="selling_item">
                        <img src="/assets/images/nbook.jpg" alt="book" className="selling_item_img" />
                        <div className="selling_item_wrapper">
                            <span className="selling_item_subTitle">زندگی</span>
                            <h5 className="selling_item_title">نوری که نمی توانیم ببینیم</h5>
                            <span className="selling_item_author">اثری از ارمان </span>
                            <span className="selling_item_price">250,000 تومان</span>
                            <button className="selling_item_addBasket btn_blue">اکنون بخر</button>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Link to='/' className="selling_item">
                        <img src="/assets/images/nbook.jpg" alt="book" className="selling_item_img" />
                        <div className="selling_item_wrapper">
                            <span className="selling_item_subTitle">زندگی</span>
                            <h5 className="selling_item_title">نوری که نمی توانیم ببینیم</h5>
                            <span className="selling_item_author">اثری از ارمان </span>
                            <span className="selling_item_price">250,000 تومان</span>
                            <button className="selling_item_addBasket btn_blue">اکنون بخر</button>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Link to='/' className="selling_item">
                        <img src="/assets/images/nbook.jpg" alt="book" className="selling_item_img" />
                        <div className="selling_item_wrapper">
                            <span className="selling_item_subTitle">زندگی</span>
                            <h5 className="selling_item_title">نوری که نمی توانیم ببینیم</h5>
                            <span className="selling_item_author">اثری از ارمان </span>
                            <span className="selling_item_price">250,000 تومان</span>
                            <button className="selling_item_addBasket btn_blue">اکنون بخر</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Selling