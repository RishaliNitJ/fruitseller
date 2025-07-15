import React from 'react'
import { Link } from 'react-router-dom';
import item7 from '../img/featur-1.jpg'
import item8 from '../img/featur-2.jpg'
import item9 from '../img/featur-3.jpg'
import bannerfruit from '../img/banner-fruits.jpg'
import item1 from '../img/fruite-item-1.jpg'
import item2 from '../img/fruite-item-2.jpg'
import item3 from '../img/fruite-item-3.jpg'
import item4 from '../img/fruite-item-4.jpg'
import item5 from '../img/fruite-item-5.jpg'
import item6 from '../img/fruite-item-6.jpg'
import Product from './Product';
import Breads from './Breads';
import BestProductCard from './BestProductCard';
import AnotherCardLast from './AnotherCardLast';
import ShopCard from './ShopCard';
function Shop3() {
  return (
    <div>
      <>
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Shop</h1>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/">Pages</Link>
            </li>
            <li className="breadcrumb-item active text-white">Shop</li>
          </ol>
        </div>
        {/* Fruits Shop Start*/}
        <div className="container-fluid fruite py-5">
          <div className="container py-5">
            <h1 className="mb-4">Fresh fruits shop</h1>
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-4">
                  <div className="col-xl-3">
                    <div className="input-group w-100 mx-auto d-flex">
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
                  </div>
                  <div className="col-6" />
                  <div className="col-xl-3">
                    <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                      <label htmlFor="fruits">Default Sorting:</label>
                      <select
                        id="fruits"
                        name="fruitlist"
                        className="border-0 form-select-sm bg-light me-3"
                        form="fruitform"
                      >
                        <option value="volvo">Nothing</option>
                        <option value="saab">Popularity</option>
                        <option value="opel">Organic</option>
                        <option value="audi">Fantastic</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row g-4">
                  <div className="col-lg-3">
                    <div className="row g-4">
                      <div className="col-lg-12">
                        <div className="mb-3">
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
                        <div className="mb-3">
                          <h4 className="mb-2">Price</h4>
                          <input
                            type="range"
                            className="form-range w-100"
                            id="rangeInput"
                            name="rangeInput"
                            min={0}
                            max={500}
                            defaultValue={0}
                            oninput="amount.value=rangeInput.value"
                          />
                          <output
                            id="amount"
                            name="amount"
                            min-velue={0}
                            max-value={500}
                            htmlFor="rangeInput"
                          >
                            0
                          </output>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <h4>Additional</h4>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-1"
                              name="Categories-1"
                              defaultValue="Beverages"
                            />
                            <label htmlFor="Categories-1"> Organic</label>
                          </div>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-2"
                              name="Categories-1"
                              defaultValue="Beverages"
                            />
                            <label htmlFor="Categories-2"> Fresh</label>
                          </div>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-3"
                              name="Categories-1"
                              defaultValue="Beverages"
                            />
                            <label htmlFor="Categories-3"> Sales</label>
                          </div>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-4"
                              name="Categories-1"
                              defaultValue="Beverages"
                            />
                            <label htmlFor="Categories-4"> Discount</label>
                          </div>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-5"
                              name="Categories-1"
                              defaultValue="Beverages"
                            />
                            <label htmlFor="Categories-5"> Expired</label>
                          </div>
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
                  <div className="col-lg-9">
                    <div className="row g-4 justify-content-center">
                      
                      <ShopCard
                        id={"132"}
                        image={`https://img.freepik.com/free-photo/raw-foodstuff-with-water-drops-studio_23-2151364841.jpg?t=st=1718003866~exp=1718007466~hmac=9831c356108b3b64ac19ec5cb46e41e9173808973c14b0d8425fa4d5fbe6e5b3&w=1060`}
                        category={'Vegetables'}
                        title={'Fresho Carrot'}
                        description={"Fresho Organic products are organically grown and handpicked by expert.Product image shown is for representation purpose only, the actually product may vary based on season, produce & availability."}
                        price={"106"}
                      />
                      <ShopCard
                        id={"133"}
                        image={`https://img.freepik.com/premium-photo/full-frame-shot-tomatoes_1048944-18291200.jpg?w=740`}
                        category={'Vegetables'}
                        title={'Fresho Tomato'}
                        description={"Having the size, colour and juiciness of cherries, cherry tomatoes are sweeter to taste than regular varieties. We pick these tomatoes from reputed farmers and store in hygienic conditions to maintain their freshness."}
                        price={"306"}
                      />
                      <ShopCard
                                                id={"124"}
                                                image={`https://img.freepik.com/free-photo/closeup-fresh-avocados-filling-frame_125540-4396.jpg?t=st=1717998541~exp=1718002141~hmac=972101fb68de626f126ff084ddcde70f6e8ae36021ca16a0b64e4cb7cb7f8c14&w=900`}
                                                category={'Fruits'}
                                                title={'Avacados'}
                                                description={" Avocado slices or chunks can add creaminess and nutrition to salads. "}
                                                price={"247"}
                                            />
                                            <ShopCard
                                                id={"125"}
                                                image={`https://img.freepik.com/free-photo/top-view-smallsour-fruit-with-dark-skin-sloes-bucket-blue-checked-tablecloth-blue-background_141793-25257.jpg?t=st=1717998855~exp=1718002455~hmac=e2fe55a56063986b3c1d86cbdc1ab6a57f0029964754a6eb94046c20eff286ee&w=740`}
                                                category={'Fruits'}
                                                title={'Fresho Blueberry'}
                                                description={"Blueberries, tiny yet potent, are a nutritional powerhouse. Loaded with antioxidants, they help neutralise harmful free radicals, safeguarding our body's cells from damage."}
                                                price={"426"}
                                            />
                                            <ShopCard
                                                id={"126"}
                                                image={`https://img.freepik.com/premium-photo/pieces-dragon-fruit-isolated_974629-19287.jpg?w=900`}
                                                category={'Fruits'}
                                                title={'Fresh Dragon Fruit'}
                                                description={"Dragon fruits are oval to oblong in shape and size, with pink peel and green scale-like leaves. It is named after its resemblance to dragon scales."}
                                                price={"636"}
                                            />
                                             <ShopCard
                                                id={"136"}
                                                image={`https://img.freepik.com/premium-photo/jackfruit-white_253984-1800.jpg?w=900`}
                                                category={'Vegetables'}
                                                title={'Fresho Jackfruit '}
                                                description={"We have reduced your difficulty of cutting a large spiny skinned fruit by providig Fresho's cut-raw jackfruit that can be cooked or consumed easily."}
                                                price={"449"}
                                            />
                                            <ShopCard
                                                id={"137"}
                                                image={`https://img.freepik.com/premium-photo/fresh-corn-black-table_220925-49609.jpg?w=1060`}
                                                category={'Vegetables'}
                                                title={'Fresho Sweet Corn '}
                                                description={"Wrapped in lime coloured husks with silk, sweet corn contains numerous yellow succulent kernels that have a starchy and doughy consistency."}
                                                price={"306"}
                                            />
                      
                      <ShopCard
                                                id={"134"}
                                                image={`https://img.freepik.com/premium-photo/shimeji-mushrooms-wicker-basket-wooden-table_29409-667.jpg?w=826`}
                                                category={'Vegetables'}
                                                title={'Fresho Mushrooms '}
                                                description={"Oyster mushrooms are pale to dark gray in colour and have a shape like that of an oyster with a soft and slightly chewy texture."}
                                                price={"202"}
                                            />
                                            <ShopCard
                                                id={"135"}
                                                image={`https://img.freepik.com/premium-photo/hand-holding-fresh-lettuce-leaves-with-blurred-background-lettuce-selection-text-space_174533-60350.jpg?w=900`}
                                                category={'Vegetables'}
                                                title={'Fresho Lettuce '}
                                                description={"With fragile reddish or purplish leaves, Red lettuce has a mild flavour and is less crunchy compared to the green lettuce."}
                                                price={"408"}
                                            />
                                           
                      <div className="col-12">
                        <div className="pagination d-flex justify-content-center mt-5">
                        <Link to="/shop-4" className="rounded">
                            «
                          </Link>
                          <Link to="/shop" className=" rounded">
                            1
                          </Link>
                          <Link to="/shop-2" className="rounded">
                            2
                          </Link>
                          <Link to="/shop-3" className="active rounded">
                            3
                          </Link>
                          <Link to="/shop-4" className="rounded">
                            4
                          </Link>
                          {/* <a href="#" className="rounded">
                            5
                          </a>
                          <a href="#" className="rounded">
                            6
                          </a> */}
                          <Link to="/shop-4" className="rounded">
                            »
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fruits Shop End*/}
      </>

    </div>
  )
}

export default Shop3
