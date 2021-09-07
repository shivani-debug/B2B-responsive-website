import React from "react";
import {Link} from 'react-router-dom';
class Cosmetic3 extends React.Component
{
    render(){
        return(
            <div>
<div>
  <div className="slider-area">
    <div className="slider-active-3 owl-carousel slider-hm8 owl-dot-style">
      {/* Slider Single Item Start */}
      <div className="slider-height-6 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url(assets/images/slider-image/sample-12.jpg)'}}>
        <div className="container">
          <div className="slider-content-5 slider-animated-1 text-left">
            <span className="animated">FRESH FRUIT-NATURAL</span>
            <h1 className="animated">
              Pro Skin Whitening <br />
              Face Creams
            </h1>
            <a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a>
          </div>
        </div>
      </div>
      {/* Slider Single Item End */}
      {/* Slider Single Item Start */}
      <div className="slider-height-6 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url(assets/images/slider-image/sample-15.jpg)'}}>
        <div className="container">
          <div className="slider-content-5 slider-animated-1 text-left">
            <span className="animated">MOROCCAN ARGAN OIL</span>
            <h1 className="animated">
              Argan Oil A Beauty<br />
              Secret Dating Back Over
            </h1>
            <a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a>
          </div>
        </div>
      </div>
      {/* Slider Single Item End */}
    </div>
  </div>
  {/* Slider Arae End */}
  {/* Banner Area Start */}
  <div className="banner-3-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-res-xs-30">
          <div className="banner-wrapper mb-30px">
            <a href="shop-4-column.html"><img src="assets/images/banner-image/18.jpg" alt="" /></a>
          </div>
          <div className="banner-wrapper">
            <a href="shop-4-column.html"><img src="assets/images/banner-image/19.jpg" alt="" /></a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="banner-wrapper mb-30px">
                <a href="shop-4-column.html"><img src="assets/images/banner-image/20.jpg" alt="" /></a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="banner-wrapper mb-30px">
                <a href="shop-4-column.html"><img src="assets/images/banner-image/21.jpg" alt="" /></a>
              </div>
            </div>
          </div>
          <div className="banner-wrapper">
            <a href="shop-4-column.html"><img src="assets/images/banner-image/22.jpg" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Banner Area End */}
  {/* Best Sells Area Start */}
  <section className="best-sells-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {/* Section Title */}
          <div className="section-title">
            <h2>Best Sellers</h2>
            <p>Add bestselling products to weekly line up</p>
          </div>
          {/* Section Title */}
        </div>
      </div>
      {/* Best Sell Slider Carousel Start */}
      <div className="best-sell-slider owl-carousel owl-nav-style">
        {/* Single Item */}
        <div className="list-product-2">
          <article className="list-product mb-30px">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/cosmatic/bi.jfif" alt="" />
                <img className="second-img" src="assets/images/cosmatic/bi.jfif" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><span className="product-link"><Link to='/biotique'>Biotique Bio Fruit whitening cream</Link></span></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">€18.90</li>
                  <li className="current-price">€34.21</li>
                  <li className="discount-price">-5%</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/2.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/15.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><a href="single-product.html" className="product-link">L'Oreal paris anti age cream</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">€18.90</li>
                  <li className="current-price">€15.12</li>
                  <li className="discount-price">-20%</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
        </div>
        {/* Single Item */}
        <div className="list-product-2">
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/cosmatic/lot.jfif" alt="" />
                <img className="second-img" src="assets/images/cosmatic/lot.jfif" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
              <h2><span className="product-link"><Link to='/lotusherbal'>Lotus herbal whiteglow serum</Link></span></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price not-cut">€18.90</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/5.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/5.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
              <h2><a href="single-product.html" className="product-link">Biotique BXL Cellular whitening cream</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price not-cut">€18.90</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
        </div>
        {/* Single Item */}
        <div className="list-product-2">
          <article className="list-product mb-30px">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/cosmatic/o3.jfif" alt="" />
                <img className="second-img" src="assets/images/cosmatic/o3.jfif" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><span className="product-link"><Link to='/o3'>O3+ Mela derm whitening cream</Link></span></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price not-cut">€18.90</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/cosmatic/o3.jfif" alt="" />
                <img className="second-img" src="assets/images/cosmatic/o3.jfif" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNAR</span></a>
              <h2><a href="single-product.html" className="product-link">O3+ Brighntening and fairness cream</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price not-cut">€18.90</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
        </div>
        {/* Single Item */}
        <div className="list-product-2">
          <article className="list-product mb-30px">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/cosmatic/puri.jfif" alt="" />
                <img className="second-img" src="assets/images/cosmatic/puri.jfif" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><span className="product-link"><Link to='/puriflame'>PuriFlame 100% Pure Argan oil</Link></span></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price not-cut">€18.90</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/10.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/10.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><span className="product-link"><Link to='/lakme'>Lakme absolute argan oil</Link></span></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price not-cut">€29.90</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
        </div>
        {/* Single Item */}
        <div className="list-product-2">
          <article className="list-product mb-30px">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/cosmatic/ogx.jfif" alt="" />
                <img className="second-img" src="assets/images/cosmatic/ogx.jfif" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><span className="product-link"><Link to='/ogx'>OGX Renewing Argan oil</Link></span></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">€23.90</li>
                  <li className="current-price">€21.51</li>
                  <li className="discount-price">-10%</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/13.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/3.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><span className="product-link"><Link to='/jojoba'>Jojoba oil</Link></span></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price not-cut">€18.90</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
        </div>
        {/* Single Item */}
        <div className="list-product-2">
          <article className="list-product mb-30px">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/14.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/14.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><span className="product-link"><Link to='/facialoil'>Good vibes facial oil 24k gold</Link></span></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">€11.90</li>
                  <li className="current-price">€10.12</li>
                  <li className="discount-price">-15%</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/15.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/2.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><a href="single-product.html" className="product-link">Morroccan Argan oil</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">€35.90</li>
                  <li className="current-price">€34.11</li>
                  <li className="discount-price">-5%</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
        </div>
        {/* Single Item */}
      </div>
      {/* Best Sell Slider Carousel End */}
    </div>
  </section>
  {/* Best Sell Area End */}
  {/* Banner Area Start */}
  <div className="banner-area">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-xs-12">
          <div className="banner-wrapper">
            <a href="shop-4-column.html"><img src="assets/images/banner-image/14.jpg" alt="" /></a>
          </div>
        </div>
        <div className="col-md-6 col-xs-12 mt-res-sx-30px">
          <div className="banner-wrapper">
            <a href="shop-4-column.html"><img src="assets/images/banner-image/15.jpg" alt="" /></a>
          </div>
        </div>
        <div className="col-md-3 col-xs-12 mt-res-sx-30px">
          <div className="banner-wrapper">
            <a href="shop-4-column.html"><img src="assets/images/banner-image/16.jpg" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Banner Area End */}
  {/* Hot deal area Start */}
  <section className="hot-deal-area">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
          <div className="row">
            <div className="col-md-12">
              {/* Section Title */}
              <div className="section-title">
                <h2>Hot Deals</h2>
                <p>Add hot products to weekly line up</p>
              </div>
              {/* Section Title End*/}
            </div>
          </div>
          {/* Hot Deal Slider Start */}
          <div className="hot-deal owl-carousel owl-nav-style">
            {/*  Single item */}
            <article className="list-product">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/cosmatic/16.jpg" alt="" />
                  <img className="second-img" src="assets/images/product-image/cosmatic/16.jpg" alt="" />
                </a>
                <div className="quick-view">
                  <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                    <i className="ion-ios-search-strong" />
                  </a>
                </div>
              </div>
              <ul className="product-flag">
                <li className="new">New</li>
              </ul>
              <div className="product-decs">
                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                <h2><a href="single-product.html" className="product-link">Originals Kaval Windbreaker Winter Jacket 2</a></h2>
                <div className="rating-product">
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                </div>
                <div className="pricing-meta">
                  <ul>
                    <li className="old-price">€18.90</li>
                    <li className="current-price">€34.21</li>
                    <li className="discount-price">-5%</li>
                  </ul>
                </div>
                <div className="add-to-link">
                  <ul>
                    <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                    <li>
                      <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                    </li>
                    <li>
                      <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="in-stock">Availability: <span>300 In Stock</span></div>
              <div className="clockdiv">
                <div className="title_countdown">Hurry Up! Offers ends in:</div>
                <div data-countdown="2021/03/01" />
              </div>
            </article>
            {/*  Single item */}
            <article className="list-product">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/cosmatic/11.jpg" alt="" />
                  <img className="second-img" src="assets/images/product-image/cosmatic/12.jpg" alt="" />
                </a>
                <div className="quick-view">
                  <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                    <i className="ion-ios-search-strong" />
                  </a>
                </div>
              </div>
              <ul className="product-flag">
                <li className="new">New</li>
              </ul>
              <div className="product-decs">
                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                <h2><a href="single-product.html" className="product-link">Originals Kaval Windbreaker Winter Jacket</a></h2>
                <div className="rating-product">
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                </div>
                <div className="pricing-meta">
                  <ul>
                    <li className="old-price">€18.90</li>
                    <li className="current-price">€34.21</li>
                    <li className="discount-price">-5%</li>
                  </ul>
                </div>
                <div className="add-to-link">
                  <ul>
                    <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                    <li>
                      <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                    </li>
                    <li>
                      <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="in-stock">Availability: <span>300 In Stock</span></div>
              <div className="clockdiv">
                <div className="title_countdown">Hurry Up! Offers ends in:</div>
                <div data-countdown="2021/03/01" />
              </div>
            </article>
            {/*  Single item */}
            <article className="list-product">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/cosmatic/15.jpg" alt="" />
                  <img className="second-img" src="assets/images/product-image/cosmatic/2.jpg" alt="" />
                </a>
                <div className="quick-view">
                  <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                    <i className="ion-ios-search-strong" />
                  </a>
                </div>
              </div>
              <ul className="product-flag">
                <li className="new">New</li>
              </ul>
              <div className="product-decs">
                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                <h2><a href="single-product.html" className="product-link">New Balance Fresh Foam Kaymin</a></h2>
                <div className="rating-product">
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                </div>
                <div className="pricing-meta">
                  <ul>
                    <li className="old-price">€18.90</li>
                    <li className="current-price">€34.21</li>
                    <li className="discount-price">-5%</li>
                  </ul>
                </div>
                <div className="add-to-link">
                  <ul>
                    <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                    <li>
                      <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                    </li>
                    <li>
                      <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="in-stock">Availability: <span>299 In Stock</span></div>
              <div className="clockdiv">
                <div className="title_countdown">Hurry Up! Offers ends in:</div>
                <div data-countdown="2021/03/01" />
              </div>
            </article>
            {/*  Single item */}
            <article className="list-product">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/cosmatic/14.jpg" alt="" />
                  <img className="second-img" src="assets/images/product-image/cosmatic/14.jpg" alt="" />
                </a>
                <div className="quick-view">
                  <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                    <i className="ion-ios-search-strong" />
                  </a>
                </div>
              </div>
              <ul className="product-flag">
                <li className="new">New</li>
              </ul>
              <div className="product-decs">
                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                <h2><a href="single-product.html" className="product-link">Madden by Steve Madden Cale 6</a></h2>
                <div className="rating-product">
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                </div>
                <div className="pricing-meta">
                  <ul>
                    <li className="old-price">€18.90</li>
                    <li className="current-price">€34.21</li>
                    <li className="discount-price">-5%</li>
                  </ul>
                </div>
                <div className="add-to-link">
                  <ul>
                    <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                    <li>
                      <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                    </li>
                    <li>
                      <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="in-stock">Availability: <span>299 In Stock</span></div>
              <div className="clockdiv">
                <div className="title_countdown">Hurry Up! Offers ends in:</div>
                <div data-countdown="2021/03/01" />
              </div>
            </article>
            {/*  Single item */}
          </div>
          {/* Hot Deal Slider End */}
        </div>
        {/* New Arrivals Area Start */}
        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8">
          <div className="row">
            <div className="col-md-12">
              {/* Section Title */}
              <div className="section-title ml-0px mt-res-sx-30px">
                <h2>New Arrivals</h2>
                <p>Add new products to weekly line up</p>
              </div>
              {/* Section Title */}
            </div>
          </div>
          {/* New Product Slider Start */}
          <div className="new-product-slider owl-carousel owl-nav-style">
            {/* Product Single Item */}
            <div className="product-inner-item">
              <article className="list-product mb-30px">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/cosmatic/1.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/cosmatic/1.jpg" alt="" />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <ul className="product-flag">
                  <li className="new">New</li>
                </ul>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                  <h2><a href="single-product.html" className="product-link">Originals Kaval Windbr...</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price">€23.90</li>
                      <li className="current-price">€21.51</li>
                      <li className="discount-price">-10%</li>
                    </ul>
                  </div>
                </div>
                <div className="add-to-link">
                  <ul>
                    <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                    <li>
                      <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                    </li>
                    <li>
                      <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                    </li>
                  </ul>
                </div>
              </article>
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/cosmatic/6.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/cosmatic/6.jpg" alt="" />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <ul className="product-flag">
                  <li className="new">New</li>
                </ul>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                  <h2><a href="single-product.html" className="product-link">Juicy Couture Juicy Quil...</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price">€35.90</li>
                      <li className="current-price">€34.11</li>
                      <li className="discount-price">-5%</li>
                    </ul>
                  </div>
                </div>
                <div className="add-to-link">
                  <ul>
                    <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                    <li>
                      <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                    </li>
                    <li>
                      <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            {/* Product Single Item */}
            <div className="product-inner-item">
              <article className="list-product mb-30px">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/cosmatic/8.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/cosmatic/8.jpg" alt="" />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <ul className="product-flag">
                  <li className="new">New</li>
                </ul>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                  <h2><a href="single-product.html" className="product-link">Brixton Patrol All Terr...</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price not-cut">€29.90</li>
                    </ul>
                  </div>
                </div>
                <div className="add-to-link">
                  <ul>
                    <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                    <li>
                      <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                    </li>
                    <li>
                      <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                    </li>
                  </ul>
                </div>
              </article>
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/cosmatic/9.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/cosmatic/9.jpg" alt="" />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <ul className="product-flag">
                  <li className="new">New</li>
                </ul>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                  <h2><a href="single-product.html" className="product-link">New Luxury Men's Slim...</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price not-cut">€29.90</li>
                    </ul>
                  </div>
                </div>
                <div className="add-to-link">
                  <ul>
                    <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                    <li>
                      <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                    </li>
                    <li>
                      <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            {/* Product Single Item */}
            <div className="product-inner-item">
              <article className="list-product mb-30px">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/cosmatic/3.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/cosmatic/2.jpg" alt="" />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <ul className="product-flag">
                  <li className="new">New</li>
                </ul>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                  <h2><a href="single-product.html" className="product-link">Originals Kaval Windbr...</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price">€35.90</li>
                      <li className="current-price">€34.11</li>
                      <li className="discount-price">-5%</li>
                    </ul>
                  </div>
                </div>
                <div className="add-to-link">
                  <ul>
                    <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                    <li>
                      <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                    </li>
                    <li>
                      <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                    </li>
                  </ul>
                </div>
              </article>
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/cosmatic/7.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/cosmatic/7.jpg" alt="" />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <ul className="product-flag">
                  <li className="new">New</li>
                </ul>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                  <h2><a href="single-product.html" className="product-link">Juicy Couture Juicy Quil...</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price">€35.90</li>
                      <li className="current-price">€34.11</li>
                      <li className="discount-price">-5%</li>
                    </ul>
                  </div>
                </div>
                <div className="add-to-link">
                  <ul>
                    <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                    <li>
                      <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                    </li>
                    <li>
                      <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            {/* Product Single Item */}
            <div className="product-inner-item">
              <article className="list-product mb-30px">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/cosmatic/5.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/cosmatic/5.jpg" alt="" />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <ul className="product-flag">
                  <li className="new">New</li>
                </ul>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                  <h2><a href="single-product.html" className="product-link">Madden by Steve Madd...</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price">€11.90</li>
                      <li className="current-price">€10.12</li>
                      <li className="discount-price">-15%</li>
                    </ul>
                  </div>
                </div>
                <div className="add-to-link">
                  <ul>
                    <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                    <li>
                      <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                    </li>
                    <li>
                      <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                    </li>
                  </ul>
                </div>
              </article>
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/cosmatic/10.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/cosmatic/11.jpg" alt="" />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <ul className="product-flag">
                  <li className="new">New</li>
                </ul>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                  <h2><a href="single-product.html" className="product-link">Trans-Weight Hooded...</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price not-cut">€19.90</li>
                    </ul>
                  </div>
                </div>
                <div className="add-to-link">
                  <ul>
                    <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                    <li>
                      <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                    </li>
                    <li>
                      <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            {/* Product Single Item */}
            <div className="product-inner-item">
              <article className="list-product mb-30px">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/cosmatic/12.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/cosmatic/12.jpg" alt="" />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <ul className="product-flag">
                  <li className="new">New</li>
                </ul>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                  <h2><a href="single-product.html" className="product-link">Water and Wind Resist...</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price not-cut">€11.90</li>
                    </ul>
                  </div>
                </div>
                <div className="add-to-link">
                  <ul>
                    <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                    <li>
                      <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                    </li>
                    <li>
                      <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                    </li>
                  </ul>
                </div>
              </article>
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/cosmatic/4.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/cosmatic/3.jpg" alt="" />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <ul className="product-flag">
                  <li className="new">New</li>
                </ul>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                  <h2><a href="single-product.html" className="product-link">New Balance Fresh Foa...</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price">€18.90</li>
                      <li className="current-price">€15.11</li>
                      <li className="discount-price">-20%</li>
                    </ul>
                  </div>
                </div>
                <div className="add-to-link">
                  <ul>
                    <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                    <li>
                      <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                    </li>
                    <li>
                      <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            {/* Product Single Item */}
            <div className="product-inner-item">
              <article className="list-product mb-30px">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/cosmatic/13.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/cosmatic/13.jpg" alt="" />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <ul className="product-flag">
                  <li className="new">New</li>
                </ul>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                  <h2><a href="single-product.html" className="product-link">Juicy Couture Solid Slee...</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price not-cut">€18.90</li>
                    </ul>
                  </div>
                </div>
                <div className="add-to-link">
                  <ul>
                    <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                    <li>
                      <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                    </li>
                    <li>
                      <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                    </li>
                  </ul>
                </div>
              </article>
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/cosmatic/14.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/cosmatic/7.jpg" alt="" />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <ul className="product-flag">
                  <li className="new">New</li>
                </ul>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                  <h2><a href="single-product.html" className="product-link">New Balance Fresh Foa...</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price not-cut">€18.90</li>
                    </ul>
                  </div>
                </div>
                <div className="add-to-link">
                  <ul>
                    <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                    <li>
                      <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                    </li>
                    <li>
                      <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            {/* Product Single Item */}
          </div>
          {/* Product Slider End */}
        </div>
      </div>
    </div>
  </section>
  {/* Hot Deal Area End */}
  {/* Static Area Start */}
  <section className="static-area">
    <div className="container">
      <div className="static-area-wrap">
        <div className="row">
          {/* Static Single Item Start */}
          <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
            <div className="single-static pb-res-md-0 pb-res-sm-0 pb-res-xs-0">
              <img src="assets/images/icons/static-icons-1.png" alt="" className="img-responsive" />
              <div className="single-static-meta">
                <h4>Free Shipping</h4>
                <p>On all orders over $75.00</p>
              </div>
            </div>
          </div>
          {/* Static Single Item End */}
          {/* Static Single Item Start */}
          <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
            <div className="single-static pb-res-md-0 pb-res-sm-0 pb-res-xs-0 pt-res-xs-20">
              <img src="assets/images/icons/static-icons-2.png" alt="" className="img-responsive" />
              <div className="single-static-meta">
                <h4>Free Returns</h4>
                <p>Returns are free within 9 days</p>
              </div>
            </div>
          </div>
          {/* Static Single Item End */}
          {/* Static Single Item Start */}
          <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
            <div className="single-static pt-res-md-30 pb-res-sm-30 pb-res-xs-0 pt-res-xs-20">
              <img src="assets/images/icons/static-icons-3.png" alt="" className="img-responsive" />
              <div className="single-static-meta">
                <h4>100% Payment Secure</h4>
                <p>Your payment are safe with us.</p>
              </div>
            </div>
          </div>
          {/* Static Single Item End */}
          {/* Static Single Item Start */}
          <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
            <div className="single-static pt-res-md-30 pb-res-sm-30 pt-res-xs-20">
              <img src="assets/images/icons/static-icons-4.png" alt="" className="img-responsive" />
              <div className="single-static-meta">
                <h4>Support 24/7</h4>
                <p>Contact us 24 hours a day</p>
              </div>
            </div>
          </div>
          {/* Static Single Item End */}
        </div>
      </div>
    </div>
  </section>
  {/* Static Area End */}
  {/* Feature Area Start */}
  <section className="feature-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {/* Section Title */}
          <div className="section-title">
            <h2>Featured Products</h2>
            <p>Add products to weekly line up</p>
          </div>
          {/* Section Title */}
        </div>
      </div>
      {/* Feature Slider Start */}
      <div className="feature-slider owl-carousel owl-nav-style">
        {/* Single Item */}
        <div className="feature-slider-item">
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/18.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/18.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><a href="single-product.html" className="product-link">Juicy Couture Solid...</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price not-cut">€29.90</li>
                </ul>
              </div>
            </div>
          </article>
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/19.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/18.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><a href="single-product.html" className="product-link">New Balance Fresh...</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price not-cut">€29.90</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
        {/* Single Item */}
        <div className="feature-slider-item">
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/16.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/17.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><a href="single-product.html" className="product-link">Originals Kaval Win...</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">€23.90</li>
                  <li className="current-price">€21.51</li>
                </ul>
              </div>
            </div>
          </article>
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/11.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/12.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><a href="single-product.html" className="product-link">Originals Kaval Win...</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">€23.90</li>
                  <li className="current-price">€21.51</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
        {/* Single Item */}
        <div className="feature-slider-item">
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/2.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/15.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><a href="single-product.html" className="product-link">Juicy Couture Juicy...</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">€35.90</li>
                  <li className="current-price">€34.11</li>
                </ul>
              </div>
            </div>
          </article>
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/1.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/1.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><a href="single-product.html" className="product-link">Juicy Couture Juicy...</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">€35.90</li>
                  <li className="current-price">€34.11</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
        {/* Single Item */}
        <div className="feature-slider-item">
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/2.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/17.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><a href="single-product.html" className="product-link">New Balance Fresh...</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">€18.90</li>
                  <li className="current-price">€15.12</li>
                </ul>
              </div>
            </div>
          </article>
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/18.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/18.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><a href="single-product.html" className="product-link">New Balance Fresh...</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price not-cut">€29.90</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
        {/* Single Item */}
        <div className="feature-slider-item">
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/5.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/5.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
              <h2><a href="single-product.html" className="product-link">Juicy Couture Trico...</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price not-cut">€9.90</li>
                </ul>
              </div>
            </div>
          </article>
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/7.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/8.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
              <h2><a href="single-product.html" className="product-link">Fila Locker Room V...</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price not-cut">€9.90</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
        {/* Single Item */}
        <div className="feature-slider-item">
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/17.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/16.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><a href="single-product.html" className="product-link">Trans-Weight Hood...</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">€18.90</li>
                </ul>
              </div>
            </div>
          </article>
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/10.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/1.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><a href="single-product.html" className="product-link">New Luxury Men's...</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">€11.90</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
        {/* Single Item */}
        <div className="feature-slider-item">
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/14.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/15.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
              <h2><a href="single-product.html" className="product-link">Calvin Klein Jeans...</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price not-cut">€29.90</li>
                </ul>
              </div>
            </div>
          </article>
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/9.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/9.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><a href="single-product.html" className="product-link">Water and Wind R...</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price not-cut">€11.90</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
        {/* Single Item */}
        <div className="feature-slider-item">
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/14.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/14.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>GRAPIC CORNER</span></a>
              <h2><a href="single-product.html" className="product-link">Madden by Steve...</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">€11.90</li>
                  <li className="current-price">€10.12</li>
                </ul>
              </div>
            </div>
          </article>
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/3.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/4.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><a href="single-product.html" className="product-link">Brixton Patrol All T...</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price not-cut">€18.90</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
        {/* Single Item */}
        <div className="feature-slider-item">
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/1.jpg" alt="" />
                <img className="second-img" src="assets/images/product-image/cosmatic/1.jpg" alt="" />
              </a>
              <div className="quick-view">
                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><a href="single-product.html" className="product-link">Juicy Couture Juicy...</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">€18.90</li>
                  <li className="current-price">€34.21</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
        {/* Single Item */}
      </div>
      {/* Feature Slider End */}
    </div>
  </section>
  {/* Feature Area End */}
  {/* Blog area Start */}
  <section className="blog-area mb-30px mt-30">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {/* Section title */}
          <div className="section-title">
            <h2>Latest Blogs</h2>
            <p>Present posts in a best way to highlight interesting moments of your blog.</p>
          </div>
          {/* Section title */}
        </div>
      </div>
      {/* Blog Slider Start */}
      <div className="blog-slider-active owl-carousel owl-nav-style">
        {/* single item */}
        <article className="blog-post">
          <div className="blog-post-top">
            <div className="blog-img">
              <img src="assets/images/blog-image/blog-5.jpg" alt="" />
            </div>
          </div>
          <div className="blog-post-content d-flex">
            <div className="blog-post-content-cell">
              <a href="blog-grid-left-sidebar.html" className="blog-meta">Cosmetic</a>
              <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">This is First Post For XipBlog</a></h4>
              <p className="blog-text">
                Lorem Ipsum is simply dummy text of the printing and typeSettings industry. Lorem Ipsum has been the industrys ...
              </p>
              <a className="read-more-btn" href="blog-single-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
            </div>
          </div>
        </article>
        {/* single item */}
        <article className="blog-post">
          <div className="blog-post-top">
            <div className="blog-img">
              <img src="assets/images/blog-image/blog-6.jpg" alt="" />
            </div>
          </div>
          <div className="blog-post-content d-flex">
            <div className="blog-post-content-cell">
              <a href="blog-grid-left-sidebar.html" className="blog-meta">Cosmetic</a>
              <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">This is Secound Post For XipBlog</a></h4>
              <p className="blog-text">
                Lorem Ipsum is simply dummy text of the printing and typeSettings industry. Lorem Ipsum has been the industrys ...
              </p>
              <a className="read-more-btn" href="blog-single-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
            </div>
          </div>
        </article>
        {/* single item */}
        <article className="blog-post">
          <div className="blog-post-top">
            <div className="blog-img">
              <img src="assets/images/blog-image/blog-7.jpg" alt="" />
            </div>
          </div>
          <div className="blog-post-content d-flex">
            <div className="blog-post-content-cell">
              <a href="blog-grid-left-sidebar.html" className="blog-meta">Cosmetic</a>
              <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">This is Thrid Post For XipBlog</a></h4>
              <p className="blog-text">
                Lorem Ipsum is simply dummy text of the printing and typeSettings industry. Lorem Ipsum has been the industrys ...
              </p>
              <a className="read-more-btn" href="blog-single-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
            </div>
          </div>
        </article>
        {/* single item */}
        <article className="blog-post">
          <div className="blog-post-top">
            <div className="blog-img">
              <img src="assets/images/blog-image/blog-8.jpg" alt="" />
            </div>
          </div>
          <div className="blog-post-content">
            <a href="blog-grid-left-sidebar.html" className="blog-meta">Fashion</a>
            <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">This is Foruth Post For XipBlog</a></h4>
            <p className="blog-text">
              Lorem Ipsum is simply dummy text of the printing and typeSettings industry. Lorem Ipsum has been the industrys ...
            </p>
            <a className="read-more-btn" href="blog-single-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
          </div>
        </article>
        {/* single item */}
      </div>
      {/* Blog Slider Start */}
    </div>
  </section>
  {/* Blog Area End */}
  {/* Brand area start */}
  <div className="brand-area">
    <div className="container">
      <div className="brand-slider owl-carousel owl-nav-style owl-nav-style-2">
        <div className="brand-slider-item">
          <a href=" "><img src="assets/images/brand-logo/1.jpg" alt="" /></a>
        </div>
        <div className="brand-slider-item">
          <a href=" "><img src="assets/images/brand-logo/2.jpg" alt="" /></a>
        </div>
        <div className="brand-slider-item">
          <a href=" "><img src="assets/images/brand-logo/3.jpg" alt="" /></a>
        </div>
        <div className="brand-slider-item">
          <a href=" "><img src="assets/images/brand-logo/4.jpg" alt="" /></a>
        </div>
        <div className="brand-slider-item">
          <a href=" "><img src="assets/images/brand-logo/5.jpg" alt="" /></a>
        </div>
        <div className="brand-slider-item">
          <a href=" "><img src="assets/images/brand-logo/1.jpg" alt="" /></a>
        </div>
        <div className="brand-slider-item">
          <a href=" "><img src="assets/images/brand-logo/2.jpg" alt="" /></a>
        </div>
      </div>
    </div>
  </div>
</div>


            </div>
        )
    }
}
export default Cosmetic3;