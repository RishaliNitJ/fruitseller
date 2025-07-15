import React from 'react'
import { Link } from 'react-router-dom';
import SwipperFrits from './SwipperFrits';
import bannerfruit from '../img/banner-fruits.jpg'
import singli from "../img/single-item.jpg"
import avatar from "../img/avatar.jpg"
import item7 from '../img/featur-1.jpg'
import item8 from '../img/featur-2.jpg'
import item9 from '../img/featur-3.jpg'
import veg4 from '../img/vegetable-item-4.jpg';
import veg5 from '../img/vegetable-item-5.jpg';
import veg6 from '../img/vegetable-item-6.jpg';

import item2 from '../img/fruite-item-2.jpg'
import item3 from '../img/fruite-item-3.jpg'
import item4 from '../img/fruite-item-4.jpg'
import item5 from '../img/fruite-item-5.jpg'
import item6 from '../img/fruite-item-6.jpg'


function ShopDetails() {
  return (
    <div>
       {/* Single Page Header start */}
  <div className="container-fluid page-header py-5">
    <h1 className="text-center text-white display-6">Shop Detail</h1>
    <ol className="breadcrumb justify-content-center mb-0">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item">
        <Link to="/">Pages</Link>
      </li>
      <li className="breadcrumb-item active text-white">Shop Detail</li>
    </ol>
  </div>
  {/* Single Page Header End */}
  <>
  {/* Single Product Start */}
  <div className="container-fluid py-5 mt-5">
    <div className="container py-5">
      <div className="row g-4 mb-5">
        <div className="col-lg-8 col-xl-9">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="border rounded">
                <a href="#">
                  <img
                    src={`https://img.freepik.com/free-photo/closeup-fresh-avocados-filling-frame_125540-4396.jpg?t=st=1717998541~exp=1718002141~hmac=972101fb68de626f126ff084ddcde70f6e8ae36021ca16a0b64e4cb7cb7f8c14&w=900`}
                    className="img-fluid rounded"
                    alt="Image"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <h4 className="fw-bold mb-3">Avacados</h4>
              <p className="mb-3">Category: Fruits</p>
              <h5 className="fw-bold mb-3">247 ₹</h5>
              <div className="d-flex mb-4">
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star" />
              </div>
              <p className="mb-4">
              Fresh avocados typically have a rough, pebbly skin that can range from dark green to black. The skin is thick and protective, often with a slightly glossy sheen.
              </p>
              <p className="mb-4">
              The mouthfeel is smooth and buttery, often described as luxurious and satisfying.
              </p>
              
            </div>
            <div className="col-lg-12">
              <nav>
                <div className="nav nav-tabs mb-3">
                  <button
                    className="nav-link active border-white border-bottom-0"
                    type="button"
                    role="tab"
                    id="nav-about-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-about"
                    aria-controls="nav-about"
                    aria-selected="true"
                  >
                    Description
                  </button>
                  <button
                    className="nav-link border-white border-bottom-0"
                    type="button"
                    role="tab"
                    id="nav-mission-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-mission"
                    aria-controls="nav-mission"
                    aria-selected="false"
                  >
                    Reviews
                  </button>
                </div>
              </nav>
              <div className="tab-content mb-5">
                <div
                  className="tab-pane active"
                  id="nav-about"
                  role="tabpanel"
                  aria-labelledby="nav-about-tab"
                >
                  <p>
                  Fresh avocados have a mild, nutty flavor with a rich, creamy texture. The taste can be slightly sweet and has a subtle earthy undertone.{" "}
                  </p>
                  <p>
                  Avocados are rich in monounsaturated fats, which are heart-healthy and can help reduce bad cholesterol levels.
                  </p>
                  <div className="px-2">
                    <div className="row g-4">
                      <div className="col-6">
                        <div className="row bg-light align-items-center text-center justify-content-center py-2">
                          <div className="col-6">
                            <p className="mb-0">Weight</p>
                          </div>
                          <div className="col-6">
                            <p className="mb-0">1 kg</p>
                          </div>
                        </div>
                        <div className="row text-center align-items-center justify-content-center py-2">
                          <div className="col-6">
                            <p className="mb-0">Country of Origin</p>
                          </div>
                          <div className="col-6">
                            <p className="mb-0">Agro Farm</p>
                          </div>
                        </div>
                        <div className="row bg-light text-center align-items-center justify-content-center py-2">
                          <div className="col-6">
                            <p className="mb-0">Quality</p>
                          </div>
                          <div className="col-6">
                            <p className="mb-0">Organic</p>
                          </div>
                        </div>
                        <div className="row text-center align-items-center justify-content-center py-2">
                          <div className="col-6">
                            <p className="mb-0">Сheck</p>
                          </div>
                          <div className="col-6">
                            <p className="mb-0">Healthy</p>
                          </div>
                        </div>
                        <div className="row bg-light text-center align-items-center justify-content-center py-2">
                          <div className="col-6">
                            <p className="mb-0">Min Weight</p>
                          </div>
                          <div className="col-6">
                            <p className="mb-0">250 Kg</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane"
                  id="nav-mission"
                  role="tabpanel"
                  aria-labelledby="nav-mission-tab"
                >
                  <div className="d-flex">
                    <img
                      src={`https://img.freepik.com/premium-photo/formal-girl_1003030-19974.jpg?w=740`}
                      className="img-fluid rounded-circle p-3"
                      style={{ width: 100, height: 100 }}
                      alt=""
                    />
                    <div className="">
                      <p className="mb-2" style={{ fontSize: 14 }}>
                        April 12, 2024
                      </p>
                      <div className="d-flex justify-content-between">
                        <h5>Emily Smith</h5>
                        <div className="d-flex mb-3">
                          <i className="fa fa-star text-secondary" />
                          <i className="fa fa-star text-secondary" />
                          <i className="fa fa-star text-secondary" />
                          <i className="fa fa-star text-secondary" />
                          <i className="fa fa-star" />
                        </div>
                      </div>
                      <p>
                      "I love the freshness and quality of the produce. The user-friendly website and prompt delivery have made me a loyal customer. Highly recommend!"{" "}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <img
                      src={`https://img.freepik.com/premium-photo/handsome-corporate-man-closed-hand-smiling-solid-color-background_925414-13457.jpg?w=740`}
                      className="img-fluid rounded-circle p-3"
                      style={{ width: 100, height: 100 }}
                      alt=""
                    />
                    <div className="">
                      <p className="mb-2" style={{ fontSize: 14 }}>
                        April 12, 2024
                      </p>
                      <div className="d-flex justify-content-between">
                        <h5>Sam Peters</h5>
                        <div className="d-flex mb-3">
                          <i className="fa fa-star text-secondary" />
                          <i className="fa fa-star text-secondary" />
                          <i className="fa fa-star text-secondary" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                      </div>
                      <p className="text-dark">
                      "As a fitness coach, I emphasize the importance of fresh and organic produce to my clients. This store has never let me down in terms of quality and service."{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="nav-vision" role="tabpanel">
                  <p className="text-dark">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                    tempor sit. Aliqu diam amet diam et eos labore. 3
                  </p>
                  <p className="mb-0">
                    Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et
                    eos labore. Clita erat ipsum et lorem et sit
                  </p>
                </div>
              </div>
            </div>
            <form action="#">
              <h4 className="mb-5 fw-bold">Leave a Reply</h4>
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="border-bottom rounded">
                    <input
                      type="text"
                      className="form-control border-0 me-4"
                      placeholder="Yur Name *"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="border-bottom rounded">
                    <input
                      type="email"
                      className="form-control border-0"
                      placeholder="Your Email *"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="border-bottom rounded my-4">
                    <textarea
                      name=""
                      id=""
                      className="form-control border-0"
                      cols={30}
                      rows={8}
                      placeholder="Your Review *"
                      spellCheck="false"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="d-flex justify-content-between py-3 mb-5">
                    <div className="d-flex align-items-center">
                      <p className="mb-0 me-3">Please rate:</p>
                      <div
                        className="d-flex align-items-center"
                        style={{ fontSize: 12 }}
                      >
                        <i className="fa fa-star text-muted" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                    <a
                      href="#"
                      className="btn border border-secondary text-primary rounded-pill px-4 py-3"
                    >
                      {" "}
                      Post Comment
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4 col-xl-3">
          <div className="row g-4 fruite">
            <div className="col-lg-12">
              <div className="input-group w-100 mx-auto d-flex mb-4">
                <input
                  type="search"
                  className="form-control p-3"
                  placeholder="keywords"
                  aria-describedby="search-icon-1"
                />
                <span id="search-icon-1" className="input-group-text p-3">
                  <i className="fa fa-search" />
                </span>
              </div>
              <div className="mb-4">
                <h4>Categories</h4>
                <ul className="list-unstyled fruite-categorie">
                  <li>
                    <div className="d-flex justify-content-between fruite-name">
                      <a href="#">
                        <i className="fas fa-apple-alt me-2" />
                        Apples
                      </a>
                      <span>(3)</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between fruite-name">
                      <a href="#">
                        <i className="fas fa-apple-alt me-2" />
                        Oranges
                      </a>
                      <span>(5)</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between fruite-name">
                      <a href="#">
                        <i className="fas fa-apple-alt me-2" />
                        Strawbery
                      </a>
                      <span>(2)</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between fruite-name">
                      <a href="#">
                        <i className="fas fa-apple-alt me-2" />
                        Banana
                      </a>
                      <span>(8)</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between fruite-name">
                      <a href="#">
                        <i className="fas fa-apple-alt me-2" />
                        Pumpkin
                      </a>
                      <span>(5)</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
                        <h4 className="mb-3">Featured products</h4>
                        <div className="d-flex align-items-center justify-content-start">
                          <div
                            className="rounded me-4"
                            style={{ width: 100, height: 100 }}
                          >
                            <img
                              src={item7}
                              className="img-fluid rounded"
                              alt=""
                            />
                          </div>
                          <div>
                            <h6 className="mb-2">Apple</h6>
                            <div className="d-flex mb-2">
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star" />
                            </div>
                            <div className="d-flex mb-2">
                              <h5 className="fw-bold me-2">102 ₹</h5>
                              <h5 className="text-danger text-decoration-line-through">
                                200 ₹
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-start">
                          <div
                            className="rounded me-4"
                            style={{ width: 100, height: 100 }}
                          >
                            <img
                              src={item8}
                              className="img-fluid rounded"
                              alt=""
                            />
                          </div>
                          <div>
                            <h6 className="mb-2">Strawbery</h6>
                            <div className="d-flex mb-2">
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star" />
                            </div>
                            <div className="d-flex mb-2">
                              <h5 className="fw-bold me-2">300 ₹</h5>
                              <h5 className="text-danger text-decoration-line-through">
                                600₹
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-start">
                          <div
                            className="rounded me-4"
                            style={{ width: 100, height: 100 }}
                          >
                            <img
                              src={item9}
                              className="img-fluid rounded"
                              alt=""
                            />
                          </div>
                          <div>
                            <h6 className="mb-2">Broccoli</h6>
                            <div className="d-flex mb-2">
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star" />
                            </div>
                            <div className="d-flex mb-2">
                              <h5 className="fw-bold me-2">200 ₹</h5>
                              <h5 className="text-danger text-decoration-line-through">
                                400 ₹
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-start">
                          <div
                            className="rounded me-4"
                            style={{ width: 100, height: 100 }}
                          >
                            <img
                              src={item4}
                              className="img-fluid rounded"
                              alt=""
                            />
                          </div>
                          <div>
                            <h6 className="mb-2">Apricots</h6>
                            <div className="d-flex mb-2">
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star" />
                            </div>
                            <div className="d-flex mb-2">
                              <h5 className="fw-bold me-2">288 ₹</h5>
                              <h5 className="text-danger text-decoration-line-through">
                                500 ₹
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-start">
                          <div
                            className="rounded me-4"
                            style={{ width: 100, height: 100 }}
                          >
                            <img
                              src={item3}
                              className="img-fluid rounded"
                              alt=""
                            />
                          </div>
                          <div>
                            <h6 className="mb-2">Banana</h6>
                            <div className="d-flex mb-2">
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star" />
                            </div>
                            <div className="d-flex mb-2">
                              <h5 className="fw-bold me-2">102 ₹</h5>
                              <h5 className="text-danger text-decoration-line-through">
                                200 ₹
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-start">
                          <div
                            className="rounded me-4"
                            style={{ width: 100, height: 100 }}
                          >
                            <img
                              src={item5}
                              className="img-fluid rounded"
                              alt=""
                            />
                          </div>
                          <div>
                            <h6 className="mb-2">Grapes</h6>
                            <div className="d-flex mb-2">
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star" />
                            </div>
                            <div className="d-flex mb-2">
                              <h5 className="fw-bold me-2">202 ₹</h5>
                              <h5 className="text-danger text-decoration-line-through">
                                300 ₹
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center my-4">
                          <a
                            href="#"
                            className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"
                          >
                            Vew More
                          </a>
                        </div>
                      </div>
            <div className="col-lg-12">
              <div className="position-relative">
                <img
                  src={bannerfruit}
                  className="img-fluid w-100 rounded"
                  alt=""
                />
                <div
                  className="position-absolute"
                  style={{
                    top: "50%",
                    right: 10,
                    transform: "translateY(-50%)"
                  }}
                >
                  <h3 className="text-secondary fw-bold">
                    Fresh <br /> Fruits <br /> Banner
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="fw-bold mb-0">Related products</h1>
      <div className="vesitable">
       <SwipperFrits/>
      </div>
    </div>
  </div>
  {/* Single Product End */}
</>

    </div>
  )
}

export default ShopDetails
