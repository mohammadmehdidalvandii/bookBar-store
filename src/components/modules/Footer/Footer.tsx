import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";


const Footer:React.FC = ()=>{
  return (
  <section className="footers">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <ul className="footer_items">
                        <li className="footer_item">
                            <h5 className="footer_item_title">کمپانی</h5>
                        </li>
                        <li className="footer_item">
                            <Link to='' className='footer_item_link'>درباره ما</Link>
                        </li>
                        <li className="footer_item">
                            <Link to='' className='footer_item_link'>تماس با ما</Link>
                        </li>
                        <li className="footer_item">
                            <Link to='' className='footer_item_link'>وبلاگ</Link>
                        </li>
                        <li className="footer_item">
                            <Link to='' className='footer_item_link'>نویسنده</Link>
                        </li>
                        <li className="footer_item">
                            <Link to='' className='footer_item_link'>کتاب ها</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <ul className="footer_items">
                        <li className="footer_item">
                            <h5 className="footer_item_title">سرویس ها</h5>
                        </li>
                        <li className="footer_item">
                            <Link to='' className='footer_item_link'>فروشگاه</Link>
                        </li>
                        <li className="footer_item">
                            <Link to='' className='footer_item_link'>سفارش</Link>
                        </li>
                        <li className="footer_item">
                            <Link to='' className='footer_item_link'>سبد خرید</Link>
                        </li>
                        <li className="footer_item">
                            <Link to='' className='footer_item_link'>تسویه حساب</Link>
                        </li>
                        <li className="footer_item">
                            <Link to='' className='footer_item_link'>علاقه مندی ها</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <ul className="footer_items">
                        <li className="footer_item">
                            <h5 className="footer_item_title">صفحات</h5>
                        </li>
                        <li className="footer_item">
                            <Link to='' className='footer_item_link'>ورود</Link>
                        </li>
                        <li className="footer_item">
                            <Link to='' className='footer_item_link'>ثبت نام</Link>
                        </li>
                        <li className="footer_item">
                            <Link to='' className='footer_item_link'>تایپوگرافی</Link>
                        </li>
                        <li className="footer_item">
                            <Link to='' className='footer_item_link'>404 صفحات</Link>
                        </li>
                        <li className="footer_item">
                            <Link to='' className='footer_item_link'>کتاب الکترونیکی</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className="footer_wrapper">
                        <h5 className="footer_item_title">خبرنامه</h5>
                        <p className="footer_paraph">آئنیاس قرار است یکی از نخبگان فوتبال باشد و او با تیر به دنیا آمده است.</p>
                        <div className="footer_addEmail">
                            <input type="text" className="footer_addEmail_input" />
                            <button className="footer_addEmail_btn">
                                <FaArrowLeft/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </section>
  )
}

export default Footer