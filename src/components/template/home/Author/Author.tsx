import React from 'react';
import './Author.css';
import { Link } from 'react-router-dom';

function Author() {
  return (
   <section className="author">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h4 className="title">نویسنده برجسته ماه</h4>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="author_buttons">
                        <button className="author_btn_active">تخیلی</button>
                        <button className="author_btn">علمی</button>
                        <button className="author_btn">مذهبی</button>
                        <button className="author_btn">کتاب های دانشگاهی</button>
                        <button className="author_btn">راهنمای شغلی</button>
                        <button className="author_btn">فلسفه</button>
                        <button className="author_btn">شعر</button>
                        <button className="author_btn">تصوف</button>
                        <button className="author_btn">رمان</button>
                    </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12">
                    <div className="author_info">
                        <img src="/assets/images/author.jpg" alt="" className="author_img" />
                        <div className="author_content">
                            <h5 className="author_name">کیوان رستمی</h5>
                            <p className="author_desc">از آنجا که عادت همه چیز را ضعیف می‌کند، آنچه از همه بهتر ما را به یاد کسی می‌اندازد درست آن چیزهایی است که بی‌اهمیت دانسته فراموش کرده‌ایم</p>
                            <ul className="author_items">
                                <li className="author_item">
                                    <span className="author_item_title">دسته:</span>
                                    <span className="author_item_text">نویسنده کتاب</span>
                                </li>
                                <li className="author_item">
                                    <span className="author_item_title">تعداد کتاب:</span>
                                    <span className="author_item_text">23</span>
                                </li>
                                <li className="author_item">
                                    <span className="author_item_title">تولد: </span>
                                    <span className="author_item_text">1973</span>
                                </li>
                                <li className="author_item">
                                    <span className="author_item_title">دسته:</span>
                                    <span className="author_item_text">بیوگرافیفانتزی علمی تخیلی</span>
                                </li>
                                <li className="author_item">
                                    <span className="author_item_title">زبان:</span>
                                    <span className="author_item_text">انگلیسیالمانی</span>
                                </li>
                            </ul>
                            <Link to='/' className='author_link_more'>جزئیات بیشتر</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Author