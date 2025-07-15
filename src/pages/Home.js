import React, { useEffect, useRef, useState } from 'react';

import $ from 'jquery';
import '../bootstrapC.scss'
import './Home.css'
import hero1 from '../img/hero-img-1.png'
import hero2 from '../img/hero-img-2.jpg'
import hero from '../img/hero-img.jpg'
import item1 from '../img/fruite-item-1.jpg'
import best1 from '../img/best-product-1.jpg'
import best2 from '../img/best-product-2.jpg'
import best3 from '../img/best-product-3.jpg'
import best4 from '../img/best-product-4.jpg'

import banner1 from '../img/baner-1.png'
import item2 from '../img/fruite-item-2.jpg'
import item3 from '../img/fruite-item-3.jpg'
import item4 from '../img/fruite-item-4.jpg'
import item5 from '../img/fruite-item-5.jpg'
import item6 from '../img/fruite-item-6.jpg'
import item7 from '../img/featur-1.jpg'
import item8 from '../img/featur-2.jpg'
import item9 from '../img/featur-3.jpg'
import VegCard from './VegCard';
import TestimonialSwipper from './TestimonialSwipper';
import SwipperFrits from './SwipperFrits';
import Product from './Product';
import Breads from './Breads';
import BestProductCard from './BestProductCard';
import AnotherCardLast from './AnotherCardLast';




function Home() {



    useEffect(() => {
        const spinner = function () {
            setTimeout(function () {
                if ($('#spinner').length > 0) {
                    $('#spinner').removeClass('show');
                }
            }, 1);
        };
        spinner();
    }, []);



    return (
        <div>
            <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-grow text-primary" role="status"></div>
            </div>

            {/* search */}
            <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex align-items-center">
                            <div className="input-group w-75 mx-auto d-flex">
                                <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                <span id="search-icon-1" className="input-group-text p-3">
                                    <i className="fa fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-12 col-lg-7">
                            <h4 className="mb-3 text-secondary">100% Organic Foods</h4>
                            <h1 className="mb-5 display-3 text-primary">Organic Veggies & Fruits Foods</h1>
                            <div className="position-relative mx-auto">
                                <input
                                    className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
                                    type="number"
                                    placeholder="Search"
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
                                    style={{ top: 0, right: '25%' }}
                                >
                                    Submit Now
                                </button>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active rounded">
                                        <img
                                            src={hero1}
                                            className="img-fluid w-100 h-100 bg-secondary rounded"
                                            alt="First slide"
                                        />
                                        <a href="#!" className="btn px-4 py-2 text-white rounded">
                                            Fruits
                                        </a>
                                    </div>
                                    <div className="carousel-item rounded">
                                        <img
                                            src={hero2}
                                            className="img-fluid w-100 h-100 rounded"
                                            alt="Second slide"
                                        />
                                        <a href="#!" className="btn px-4 py-2 text-white rounded">
                                            Vegetables
                                        </a>
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselId"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselId"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid featurs py-5">
                <div className="container py-5">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <i className="fas fa-car-side fa-3x text-white"></i>
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>Free Shipping</h5>
                                    <p className="mb-0">Free on order over $300</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <i className="fas fa-user-shield fa-3x text-white"></i>
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>Security Payment</h5>
                                    <p className="mb-0">100% security payment</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <i className="fas fa-exchange-alt fa-3x text-white"></i>
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>30 Day Return</h5>
                                    <p className="mb-0">30 day money guarantee</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <i className="fa fa-phone-alt fa-3x text-white"></i>
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>24/7 Support</h5>
                                    <p className="mb-0">Support every time fast</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <div className="tab-class text-center">
                        <div className="row g-4">
                            <div className="col-lg-4 text-start">
                                <h1>Our Organic Products</h1>
                            </div>
                            <div className="col-lg-8 text-end">
                                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                                    <li className="nav-item">
                                        <a className="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                            <span className="text-dark" style={{ width: '130px' }}>All Products</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="d-flex py-2 m-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                            <span className="text-dark" style={{ width: '130px' }}>Vegetables</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                                            <span className="text-dark" style={{ width: '130px' }}>Fruits</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                                            <span className="text-dark" style={{ width: '130px' }}>Bread</span>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">

                                            <Breads
                                                id={"141"}
                                                image={`https://img.freepik.com/free-photo/close-up-view-seed-bread-concept_23-2148648798.jpg?t=st=1718010532~exp=1718014132~hmac=db73006b3c3abdd00730f0da752fee18bd0f8824bb0808a08009739be3ff3961&w=740`}
                                                category={'Breads'}
                                                title={'Multigrain Bread'}
                                                description={"Modern Multigrain Super seed Bread is made with more than one type of grain. It is made using wheat, barley, and millets."}
                                                price={"130 ₹"}
                                            />
                                            <Product
                                                id={"132"}
                                                image={`https://img.freepik.com/free-photo/raw-foodstuff-with-water-drops-studio_23-2151364841.jpg?t=st=1718003866~exp=1718007466~hmac=9831c356108b3b64ac19ec5cb46e41e9173808973c14b0d8425fa4d5fbe6e5b3&w=1060`}
                                                category={'Vegetables'}
                                                title={'Fresho Carrot'}
                                                description={"Fresho Organic products are organically grown and handpicked by expert.Product image shown is for representation purpose only, the actually product may vary based on season, produce & availability."}
                                                price={"106 ₹"}
                                            />
                                            <Product
                                                id={"133"}
                                                image={`https://img.freepik.com/premium-photo/full-frame-shot-tomatoes_1048944-18291200.jpg?w=740`}
                                                category={'Vegetables'}
                                                title={'Fresho Tomato'}
                                                description={"Having the size, colour and juiciness of cherries, cherry tomatoes are sweeter to taste than regular varieties. We pick these tomatoes from reputed farmers and store in hygienic conditions to maintain their freshness."}
                                                price={"306 ₹"}
                                            />
                                            <Product
                                                id={"124"}
                                                image={`https://img.freepik.com/free-photo/closeup-fresh-avocados-filling-frame_125540-4396.jpg?t=st=1717998541~exp=1718002141~hmac=972101fb68de626f126ff084ddcde70f6e8ae36021ca16a0b64e4cb7cb7f8c14&w=900`}
                                                category={'Fruits'}
                                                title={'Avacados'}
                                                description={" Avocado slices or chunks can add creaminess and nutrition to salads. "}
                                                price={"247 ₹"}
                                            />
                                            <Product
                                                id={"125"}
                                                image={`https://img.freepik.com/free-photo/top-view-smallsour-fruit-with-dark-skin-sloes-bucket-blue-checked-tablecloth-blue-background_141793-25257.jpg?t=st=1717998855~exp=1718002455~hmac=e2fe55a56063986b3c1d86cbdc1ab6a57f0029964754a6eb94046c20eff286ee&w=740`}
                                                category={'Fruits'}
                                                title={'Fresho Blueberry'}
                                                description={"Blueberries, tiny yet potent, are a nutritional powerhouse. Loaded with antioxidants, they help neutralise harmful free radicals, safeguarding our body's cells from damage."}
                                                price={"426 ₹"}
                                            />
                                            <Product
                                                id={"126"}
                                                image={`https://img.freepik.com/premium-photo/pieces-dragon-fruit-isolated_974629-19287.jpg?w=900`}
                                                category={'Fruits'}
                                                title={'Fresh Dragon Fruit'}
                                                description={"Dragon fruits are oval to oblong in shape and size, with pink peel and green scale-like leaves. It is named after its resemblance to dragon scales."}
                                                price={"636 ₹"}
                                            />
                                            <Product
                                                id={"127"}
                                                image={`https://img.freepik.com/premium-photo/bowl-with-fresh-red-cherries_77249-311.jpg?w=900`}
                                                category={'Fruits'}
                                                title={'Fresh Cherry'}
                                                description={"Fresho brings top quality imported red coloured cherries are which round with slight heart shapes and dimples at the stem end. "}
                                                price={"826 ₹"}
                                            />
                                            <Product
                                                id={"128"}
                                                image={`https://img.freepik.com/premium-photo/pears-black-background_762785-125842.jpg?w=900`}
                                                category={'Fruits'}
                                                title={'Fresh Pear'}
                                                description={"Pears are grown throughout the world, but none matches the ideal growing conditions and climate of the Pacific Northwest states of South Africa â€œ Washington & Oregon. USA Pears are recognized worldwide for their unsurpassed quality."}
                                                price={"326 ₹"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-2" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            <Product
                                                id={"130"}
                                                image={`https://img.freepik.com/premium-photo/full-frame-shot-red-bell-peppers-market-stall_1048944-9265708.jpg?w=740`}
                                                category={'Vegetables'}
                                                title={'Fresh Capsicum - Red'}
                                                description={"Blueberries, tiny yet potent, are a nutritional powerhouse. Loaded with antioxidants, they help neutralise harmful free radicals, safeguarding our body's cells from damage."}
                                                price={"226"}
                                            />
                                            <Product
                                                id={"131"}
                                                image={`https://img.freepik.com/premium-photo/green-fresh-broccoli-background-close-up-colored-table-vegetables-diet-healthy-eating-organic-food_79075-19147.jpg?w=900`}
                                                category={'Vegetables'}
                                                title={'Fresho Broccoli'}
                                                description={"With a shape resembling that of a cauliflower, Brocollis have clusters of small, tight flower heads. These heads turn bright green on cooking and tastes slightly bitter."}
                                                price={"206"}
                                            />
                                            <Product
                                                id={"132"}
                                                image={`https://img.freepik.com/free-photo/raw-foodstuff-with-water-drops-studio_23-2151364841.jpg?t=st=1718003866~exp=1718007466~hmac=9831c356108b3b64ac19ec5cb46e41e9173808973c14b0d8425fa4d5fbe6e5b3&w=1060`}
                                                category={'Vegetables'}
                                                title={'Fresho Carrot'}
                                                description={"Fresho Organic products are organically grown and handpicked by expert.Product image shown is for representation purpose only, the actually product may vary based on season, produce & availability."}
                                                price={"106"}
                                            />
                                            <Product
                                                id={"133"}
                                                image={`https://img.freepik.com/premium-photo/full-frame-shot-tomatoes_1048944-18291200.jpg?w=740`}
                                                category={'Vegetables'}
                                                title={'Fresho Tomato'}
                                                description={"Having the size, colour and juiciness of cherries, cherry tomatoes are sweeter to taste than regular varieties. We pick these tomatoes from reputed farmers and store in hygienic conditions to maintain their freshness."}
                                                price={"306"}
                                            />
                                            <Product
                                                id={"134"}
                                                image={`https://img.freepik.com/premium-photo/shimeji-mushrooms-wicker-basket-wooden-table_29409-667.jpg?w=826`}
                                                category={'Vegetables'}
                                                title={'Fresho Mushrooms '}
                                                description={"Oyster mushrooms are pale to dark gray in colour and have a shape like that of an oyster with a soft and slightly chewy texture."}
                                                price={"202"}
                                            />
                                            <Product
                                                id={"135"}
                                                image={`https://img.freepik.com/premium-photo/hand-holding-fresh-lettuce-leaves-with-blurred-background-lettuce-selection-text-space_174533-60350.jpg?w=900`}
                                                category={'Vegetables'}
                                                title={'Fresho Lettuce '}
                                                description={"With fragile reddish or purplish leaves, Red lettuce has a mild flavour and is less crunchy compared to the green lettuce."}
                                                price={"408"}
                                            />
                                            <Product
                                                id={"136"}
                                                image={`https://img.freepik.com/premium-photo/jackfruit-white_253984-1800.jpg?w=900`}
                                                category={'Vegetables'}
                                                title={'Fresho Jackfruit '}
                                                description={"We have reduced your difficulty of cutting a large spiny skinned fruit by providig Fresho's cut-raw jackfruit that can be cooked or consumed easily."}
                                                price={"449"}
                                            />
                                            <Product
                                                id={"137"}
                                                image={`https://img.freepik.com/premium-photo/fresh-corn-black-table_220925-49609.jpg?w=1060`}
                                                category={'Vegetables'}
                                                title={'Fresho Sweet Corn '}
                                                description={"Wrapped in lime coloured husks with silk, sweet corn contains numerous yellow succulent kernels that have a starchy and doughy consistency."}
                                                price={"306"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-3" className="tab-pane fade show p-0">
                                <div className="row g-4">

                                    <Product
                                        id={"121"}
                                        image={item5}
                                        category={'Fruits'}
                                        title={'Grapes'}
                                        description={"Grapes contain a wealth of antioxidants, including resveratrol, which is known for its heart-protective benefits."}
                                        price={"200"}
                                    />

                                    <Product
                                        id={"122"}
                                        image={item4}
                                        category={'Fruits'}
                                        title={'Apricots'}
                                        description={"They're extremely nutritious and have many health benefits, such as improved digestion and eye health."}
                                        price={"1000"}
                                    />
                                    <Product
                                        id={"123"}
                                        image={item2}
                                        category={'Fruits'}
                                        title={'Raspberries'}
                                        description={"Raspberries are perennial with woody stems. With a blend of sweet-tart flavour, these are everyone's favourite berries."}
                                        price={"1300"}
                                    />
                                    <Product
                                        id={"124"}
                                        image={`https://img.freepik.com/free-photo/closeup-fresh-avocados-filling-frame_125540-4396.jpg?t=st=1717998541~exp=1718002141~hmac=972101fb68de626f126ff084ddcde70f6e8ae36021ca16a0b64e4cb7cb7f8c14&w=900`}
                                        category={'Fruits'}
                                        title={'Avacados'}
                                        description={" Avocado slices or chunks can add creaminess and nutrition to salads. "}
                                        price={"247"}
                                    />
                                    <Product
                                        id={"125"}
                                        image={`https://img.freepik.com/free-photo/top-view-smallsour-fruit-with-dark-skin-sloes-bucket-blue-checked-tablecloth-blue-background_141793-25257.jpg?t=st=1717998855~exp=1718002455~hmac=e2fe55a56063986b3c1d86cbdc1ab6a57f0029964754a6eb94046c20eff286ee&w=740`}
                                        category={'Fruits'}
                                        title={'Fresho Blueberry'}
                                        description={"Blueberries, tiny yet potent, are a nutritional powerhouse. Loaded with antioxidants, they help neutralise harmful free radicals, safeguarding our body's cells from damage."}
                                        price={"426"}
                                    />
                                    <Product
                                        id={"126"}
                                        image={`https://img.freepik.com/premium-photo/pieces-dragon-fruit-isolated_974629-19287.jpg?w=900`}
                                        category={'Fruits'}
                                        title={'Fresh Dragon Fruit'}
                                        description={"Dragon fruits are oval to oblong in shape and size, with pink peel and green scale-like leaves. It is named after its resemblance to dragon scales."}
                                        price={"636"}
                                    />
                                    <Product
                                        id={"127"}
                                        image={`https://img.freepik.com/premium-photo/bowl-with-fresh-red-cherries_77249-311.jpg?w=900`}
                                        category={'Fruits'}
                                        title={'Fresh Cherry'}
                                        description={"Fresho brings top quality imported red coloured cherries are which round with slight heart shapes and dimples at the stem end. "}
                                        price={"826"}
                                    />
                                    <Product
                                        id={"128"}
                                        image={`https://img.freepik.com/premium-photo/pears-black-background_762785-125842.jpg?w=900`}
                                        category={'Fruits'}
                                        title={'Fresh Pear'}
                                        description={"Pears are grown throughout the world, but none matches the ideal growing conditions and climate of the Pacific Northwest states of South Africa â€œ Washington & Oregon. USA Pears are recognized worldwide for their unsurpassed quality."}
                                        price={"326"}
                                    />
                                </div>
                            </div>
                            <div id="tab-4" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            <Breads
                                                id={"140"}
                                                image={`https://img.freepik.com/free-photo/vertical-view-black-bread-slices-knife-dark-color-board-mixed-colors-distressed-background_179666-47252.jpg?t=st=1718004721~exp=1718008321~hmac=7cd8a6fba09ce5bfeef04ff1275c3cdecefd439132027d40cf0080afdf30b86f&w=740`}
                                                category={'Breads'}
                                                title={'Fresho Brown Bread - Preservative Free'}
                                                description={"Fresho Brown Bread is the perfect breakfast option for those looking for a filling diet. With no added preservatives or chemicals, this bread is premium quality and super soft."}
                                                price={"110"}
                                            />

                                            <Breads
                                                id={"141"}
                                                image={`https://img.freepik.com/free-photo/close-up-view-seed-bread-concept_23-2148648798.jpg?t=st=1718010532~exp=1718014132~hmac=db73006b3c3abdd00730f0da752fee18bd0f8824bb0808a08009739be3ff3961&w=740`}
                                                category={'Breads'}
                                                title={'MODERN Multigrain Bread'}
                                                description={"Modern Multigrain Super seed Bread is made with more than one type of grain. It is made using wheat, barley, and millets."}
                                                price={"130"}
                                            />
                                            <Breads
                                                id={"142"}
                                                image={`https://www.bigbasket.com/media/uploads/p/l/70001169_13-english-oven-bread-brown.jpg`}
                                                category={'Breads'}
                                                title={'English Oven Bread - Brown'}
                                                description={"Modern Multigrain Super seed Bread is made with more than one type of grain. It is made using wheat, barley, and millets."}
                                                price={"130"}
                                            />
                                            <Breads
                                                id={"143"}
                                                image={`https://www.bigbasket.com/media/uploads/p/l/70001171_8-english-oven-bread-milk.jpg`}
                                                category={'Breads'}
                                                title={'English Oven Bread- MILK'}
                                                description={"Modern Multigrain Super seed Bread is made with more than one type of grain. It is made using wheat, barley, and millets."}
                                                price={"130"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-5" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="rounded position-relative fruite-item">
                                                    <div className="fruite-img">
                                                        <img
                                                            src="img/fruite-item-3.jpg"
                                                            className="img-fluid w-100 rounded-top"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div
                                                        className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                                        style={{ top: 10, left: 10 }}
                                                    >
                                                        Fruits
                                                    </div>
                                                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                        <h4>Banana</h4>
                                                        <p>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                                                            eiusmod te incididunt
                                                        </p>
                                                        <div className="d-flex justify-content-between flex-lg-wrap">
                                                            <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                            <a
                                                                href="#"
                                                                className="btn border border-secondary rounded-pill px-3 text-primary"
                                                            >
                                                                <i className="fa fa-shopping-bag me-2 text-primary" /> Add
                                                                to cart
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="rounded position-relative fruite-item">
                                                    <div className="fruite-img">
                                                        <img
                                                            src="img/fruite-item-2.jpg"
                                                            className="img-fluid w-100 rounded-top"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div
                                                        className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                                        style={{ top: 10, left: 10 }}
                                                    >
                                                        Fruits
                                                    </div>
                                                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                        <h4>Raspberries</h4>
                                                        <p>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                                                            eiusmod te incididunt
                                                        </p>
                                                        <div className="d-flex justify-content-between flex-lg-wrap">
                                                            <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                            <a
                                                                href="#"
                                                                className="btn border border-secondary rounded-pill px-3 text-primary"
                                                            >
                                                                <i className="fa fa-shopping-bag me-2 text-primary" /> Add
                                                                to cart
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="rounded position-relative fruite-item">
                                                    <div className="fruite-img">
                                                        <img
                                                            src="img/fruite-item-1.jpg"
                                                            className="img-fluid w-100 rounded-top"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div
                                                        className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                                        style={{ top: 10, left: 10 }}
                                                    >
                                                        Fruits
                                                    </div>
                                                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                        <h4>Oranges</h4>
                                                        <p>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                                                            eiusmod te incididunt
                                                        </p>
                                                        <div className="d-flex justify-content-between flex-lg-wrap">
                                                            <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                            <a
                                                                href="#"
                                                                className="btn border border-secondary rounded-pill px-3 text-primary"
                                                            >
                                                                <i className="fa fa-shopping-bag me-2 text-primary" /> Add
                                                                to cart
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="container-fluid service py-5">
                <div className="container py-5">
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <a href="#">
                                <div className="service-item bg-secondary rounded border border-secondary">
                                    <img
                                        src={item7}
                                        className="img-fluid rounded-top w-100"
                                        alt=""
                                    />
                                    <div className="px-4 rounded-bottom">
                                        <div className="service-content bg-primary text-center p-4 rounded">
                                            <h5 className="text-white">Fresh Apples</h5>
                                            <h3 className="mb-0">20% OFF</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <a href="#">
                                <div className="service-item bg-dark rounded border border-dark">
                                    <img
                                        src={item8}
                                        className="img-fluid rounded-top w-100"
                                        alt=""
                                    />
                                    <div className="px-4 rounded-bottom">
                                        <div className="service-content bg-light text-center p-4 rounded">
                                            <h5 className="text-primary">Tasty Fruits</h5>
                                            <h3 className="mb-0">Free delivery</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <a href="#">
                                <div className="service-item bg-primary rounded border border-primary">
                                    <img
                                        src={item9}
                                        className="img-fluid rounded-top w-100"
                                        alt=""
                                    />
                                    <div className="px-4 rounded-bottom">
                                        <div className="service-content bg-secondary text-center p-4 rounded">
                                            <h5 className="text-white">Exotic Vegitable</h5>
                                            <h3 className="mb-0">Discount ₹ 90</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <>

                {/* Vesitable Shop Start*/}
                <div className="container-fluid vesitable py-5">
                    <div className="container py-5">
                        <h1 className="mb-0">Fresh Organic Vegetables</h1>

                        <SwipperFrits />

                    </div>
                </div>
                {/* Vesitable Shop End */}
                {/* Banner Section Start*/}
                <div className="container-fluid banner bg-secondary my-5">
                    <div className="container py-5">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-6">
                                <div className="py-4">
                                    <h1 className="display-3 text-white">Fresh Exotic Fruits</h1>
                                    <p className="fw-normal display-3 text-dark mb-4">in Our Store</p>
                                    <p className="mb-4 text-dark">
                                        The generated Lorem Ipsum is therefore always free from repetition
                                        injected humour, or non-characteristic words etc.
                                    </p>
                                    {/* <a
                                        href="#"
                                        className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5"
                                    >
                                        BUY
                                    </a> */}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="position-relative">
                                    <img
                                        src={banner1}
                                        className="img-fluid w-100 rounded"
                                        alt=""
                                    />
                                    <div
                                        className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute"
                                        style={{ width: 140, height: 140, top: 0, left: 0 }}
                                    >
                                        <h1 style={{ fontSize: 100 }}>1</h1>
                                        <div className="d-flex flex-column">
                                            <span className="h2 mb-0">₹ 300</span>
                                            <span className="h4 text-muted mb-0">kg</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Banner Section End */}
                {/* Bestsaler Product Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="text-center mx-auto mb-5" style={{ maxWidth: 700 }}>
                            <h1 className="display-4">Bestseller Products</h1>
                            <p>
                                Exclusive selection of premium products you can't miss.
                            </p>
                        </div>
                        <div className="row g-4">
                            <BestProductCard
                                id={"1"}
                                image={"https://img.freepik.com/premium-photo/just-picked-apples-wicker-basket-old-wooden-boards-with-grass_393202-5225.jpg?w=740"}
                                title={"Fresh Apple5"}
                                rating={5}
                                price={"300"}
                            />
                            <BestProductCard
                                id={"2"}
                                image={"https://img.freepik.com/premium-photo/some-potatoes-wooden-surface-fresh-vegetable_70216-2004.jpg?w=900"}
                                title={"Fresh Potatos"}
                                rating={3}
                                price={"150"}
                            />
                            <BestProductCard
                                id={"3"}
                                image={"https://img.freepik.com/free-photo/view-tasty-tropical-dragon-fruit_23-2151566405.jpg?t=st=1718078579~exp=1718082179~hmac=275285cd4ae0de29a50eba8b5c72c53e36e281807e7906c5884087d05c602e7a&w=740"}
                                title={"Red Dragon Fruit"}
                                rating={4}
                                price={"1899"}
                            />
                            <BestProductCard
                                id={"4"}
                                image={"https://img.freepik.com/premium-photo/directly-shot-mangoes-basket-against-black-table_1048944-15035197.jpg?w=740"}
                                title={"Fresh Mangos"}
                                rating={4}
                                price={"308"}
                            />
                            <BestProductCard
                                id={"5"}
                                image={"https://img.freepik.com/free-photo/side-view-fresh-kiwi-fruit-slices-kiwi-wood-cutting-board-white_141793-7244.jpg?t=st=1718078723~exp=1718082323~hmac=683bb31316d55eca81793224f8bacb3687fcc3b2b988730ace09a8ceb07553f0&w=740"}
                                title={"Fresh Kiwi"}
                                rating={4}
                                price={"602"}
                            />
                            <BestProductCard
                                id={"6"}
                                image={"https://img.freepik.com/premium-photo/bunch-black-green-grapes-wooden-background_95419-3910.jpg?w=740"}
                                title={"Fresh Grapes"}
                                rating={3}
                                price={"406"}
                            />
                            </div>
                            <div className="text-center mx-auto mb-5 mt-5" style={{ maxWidth: 700 }}>
                            <h1 className="display-4">Unique Imported Products</h1>
                            <p>
                                Exclusive selection of Unique Imported products you can't miss.
                            </p>
                        </div>
                        <div className="row g-4 ">
                            <AnotherCardLast
                            id={"11"}
                            image={"https://img.freepik.com/free-photo/mangosteen-thai-popular-fruits-tropical-fruit-with-sweet-juicy-white-segments-flesh-inside-thick-reddish-brown-rind_1150-13554.jpg?t=st=1718079463~exp=1718083063~hmac=9e35e3358a2dd05ac48d5f1a11b23b3abb3eb307f85576d609825effec58a429&w=900"}
                            title={"Fresh Mangosteen"}
                            rating={3}
                            price={"2100"}
                            />
                             <AnotherCardLast
                            id={"12"}
                            image={"https://img.freepik.com/premium-photo/closeup-fresh-rambutans_3249-4149.jpg?w=900"}
                            title={"Fresh Rambutan"}
                            rating={4}
                            price={"2300"}
                            />
                             <AnotherCardLast
                            id={"13"}
                            image={"https://img.freepik.com/premium-photo/jabuticaba-bowl-jute-jaboticaba-jabuticaba-is-native-brazilian-grape-tree-species-plinia-cauliflora-brazilian-berry_133001-216.jpg?w=900"}
                            title={"Fresh Jabuticaba"}
                            rating={3}
                            price={"1106"}
                            />
                             <AnotherCardLast
                            id={"14"}
                            image={"https://www.thespruceeats.com/thmb/1mkKpM65_saEd7CNXqmproQLbk0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/buddhas_hand1-71580e89332c4e778b6e5d9414673d88.jpg"}
                            title={"Buddha's Hand"}
                            rating={5}
                            price={"2106"}
                            />
                            
                        </div>
                    </div>
                </div>
                {/* Bestsaler Product End */}
                {/* Fact Start */}
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="bg-light p-5 rounded">
                            <div className="row g-4 justify-content-center">
                                <div className="col-md-6 col-lg-6 col-xl-3">
                                    <div className="counter bg-white rounded p-5">
                                        <i className="fa fa-users text-secondary" />
                                        <h4>satisfied customers</h4>
                                        <h1>1963</h1>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-3">
                                    <div className="counter bg-white rounded p-5">
                                        <i className="fa fa-users text-secondary" />
                                        <h4>quality of service</h4>
                                        <h1>99%</h1>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-3">
                                    <div className="counter bg-white rounded p-5">
                                        <i className="fa fa-users text-secondary" />
                                        <h4>quality certificates</h4>
                                        <h1>33</h1>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-3">
                                    <div className="counter bg-white rounded p-5">
                                        <i className="fa fa-users text-secondary" />
                                        <h4>Available Products</h4>
                                        <h1>789</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Fact Start */}
                {/* Tastimonial Start */}
                <div className="container-fluid testimonial py-5">
                    <div className="container py-5">
                        <div className="testimonial-header text-center">
                            <h4 className="text-primary">Our Testimonial</h4>
                            <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
                        </div>
                        <TestimonialSwipper />
                    </div>
                </div>
            </>









        </div>
    );
}

export default Home;
