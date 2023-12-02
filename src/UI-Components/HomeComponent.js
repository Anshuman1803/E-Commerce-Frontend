import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../UI-Components/CompoLoader'
import FeaturedSlider from './FeaturedSlider';

let firstSlider = [
  { slidingImg: 'https://images.samsung.com/latin_en/smartphones/galaxy-s23/images/galaxy-s23-highlights-design-kv-end-s.jpg' },

  { slidingImg: 'https://steady-jelly-24109c.netlify.app/assets/images/home/img3.png' },

  { slidingImg: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/work-desk-linkedin-background-template-design-21cc5216b90d42f5944b9018285e66f0_screen.jpg?ts=1597993323' },

  { slidingImg: 'https://i0.wp.com/linkedinheaders.com/wp-content/uploads/2018/02/camera-header.jpg?fit=1584%2C396&ssl=1' },

  { slidingImg: 'https://steady-jelly-24109c.netlify.app/assets/images/home/img1.png' },

  { slidingImg: 'https://steady-jelly-24109c.netlify.app/assets/images/home/img2.png' }
];


function HomeComponent() {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [current, setCurrent] = useState(0);
  const navigateTo = useNavigate();

  const length = firstSlider.length;

  useEffect(() => {
    setIsLoading(true)
    axios.get("https://ecom-backend-t7c9.onrender.com/").then((response) => {
      setProductData(response.data);
      setIsLoading(false)
    });
  }, []);

  let prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  let nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  useEffect(() => {
    const slideInterval = setInterval(() => {
      current === length - 1 ? setCurrent(0) : setCurrent(current + 1);
    }, 3000)
    return () => clearInterval(slideInterval)
  }, [current, length])


  return (
    <section>

      <div className="SliderContainer">
        <i className="fa-solid fa-arrow-left arrow LeftArrow" onClick={prevSlide}></i>
        <i className="fa-solid fa-arrow-right arrow RightArrow" onClick={nextSlide}></i>
        {
          firstSlider.map((data, index) => {
            return <div className={index === current ? "SliderImg-Box active" : "SliderImg-Box"} key={index}>
              <img src={data.slidingImg} alt="SliderPostereImg" className='SliderPoster' />
            </div>
          })
        }

      </div>

      <div className="bestSellerContainer">
        <h1 className='containerHeading'>Best Seller</h1>

        {
          isLoading ? <Loader /> : <div className="productContainer">

            <div className='productBox'>
              <img src={productData[0]?.images[0]} alt="" className={`${productData[0]?.category}Image CommonImage`} />
              <span className='productRatingLabel'>{productData[0]?.rating}<i className="fa-solid fa-star"></i></span>
              <div className="productDetailsContainer">
                <p className="productTitle">{productData[0]?.title.slice(0, 20)}...</p>

                <div className="productPriceBox">
                  <span className="Dprice">₹{productData[0]?.Dprice}</span>
                  <span className="Aprice">₹{productData[0]?.Aprice}</span>
                  <span className="DiscountPercentage">{productData[0]?.discountPercentage}%off</span>
                </div>
                <Link to={`/product/${productData[0]?.title.slice(0, 18)}-${productData[0]?.id}`} className='viewProductDetailsLink'>View </Link>
              </div>
            </div>

            <div className='productBox'>
              <img src={productData[5]?.images[0]} alt="" className={`${productData[0]?.category}Image CommonImage`} />
              <span className='productRatingLabel'>{productData[5]?.rating}<i className="fa-solid fa-star"></i></span>
              <div className="productDetailsContainer">
                <p className="productTitle">{productData[5]?.title.slice(0, 20)}...</p>

                <div className="productPriceBox">
                  <span className="Dprice">₹{productData[5]?.Dprice}</span>
                  <span className="Aprice">₹{productData[5]?.Aprice}</span>
                  <span className="DiscountPercentage">{productData[5]?.discountPercentage}%off</span>
                </div>
                <Link to={`/product/${productData[5]?.title.slice(0, 18)}-${productData[5]?.id}`} className='viewProductDetailsLink'>View </Link>
              </div>
            </div>

            <div className='productBox'>
              <img src={productData[11]?.images[0]} alt="" className={`${productData[11]?.category}Image CommonImage`} />
              <span className='productRatingLabel'>{productData[11]?.rating}<i className="fa-solid fa-star"></i></span>
              <div className="productDetailsContainer">
                <p className="productTitle">{productData[11]?.title.slice(0, 20)}...</p>

                <div className="productPriceBox">
                  <span className="Dprice">₹{productData[11]?.Dprice}</span>
                  <span className="Aprice">₹{productData[11]?.Aprice}</span>
                  <span className="DiscountPercentage">{productData[0]?.discountPercentage}%off</span>
                </div>
                <Link to={`/product/${productData[11]?.title.slice(0, 18)}-${productData[11]?.id}`} className='viewProductDetailsLink'>View </Link>
              </div>
            </div>

            <div className='productBox'>
              <img src={productData[15]?.images[0]} alt="" className={`${productData[15]?.category}Image CommonImage`} />
              <span className='productRatingLabel'>{productData[15]?.rating}<i className="fa-solid fa-star"></i></span>
              <div className="productDetailsContainer">
                <p className="productTitle">{productData[15]?.title.slice(0, 20)}...</p>

                <div className="productPriceBox">
                  <span className="Dprice">₹{productData[15]?.Dprice}</span>
                  <span className="Aprice">₹{productData[15]?.Aprice}</span>
                  <span className="DiscountPercentage">{productData[15]?.discountPercentage}%off</span>
                </div>
                <Link to={`/product/${productData[15]?.title.slice(0, 18)}-${productData[15]?.id}`} className='viewProductDetailsLink'>View </Link>
              </div>
            </div>

            <div className='productBox'>
              <img src={productData[16]?.images[0]} alt="" className={`${productData[16]?.category}Image CommonImage`} />
              <span className='productRatingLabel'>{productData[16]?.rating}<i className="fa-solid fa-star"></i></span>
              <div className="productDetailsContainer">
                <p className="productTitle">{productData[16]?.title.slice(0, 20)}...</p>

                <div className="productPriceBox">
                  <span className="Dprice">₹{productData[16]?.Dprice}</span>
                  <span className="Aprice">₹{productData[16]?.Aprice}</span>
                  <span className="DiscountPercentage">{productData[16]?.discountPercentage}%off</span>
                </div>
                <Link to={`/product/${productData[16]?.title.slice(0, 18)}-${productData[16]?.id}`} className='viewProductDetailsLink'>View </Link>
              </div>
            </div>

            <div className='productBox'>
              <img src={productData[21]?.images[0]} alt="" className={`${productData[21]?.category}Image CommonImage`} />
              <span className='productRatingLabel'>{productData[21]?.rating}<i className="fa-solid fa-star"></i></span>
              <div className="productDetailsContainer">
                <p className="productTitle">{productData[21]?.title.slice(0, 20)}...</p>

                <div className="productPriceBox">
                  <span className="Dprice">₹{productData[21]?.Dprice}</span>
                  <span className="Aprice">₹{productData[21]?.Aprice}</span>
                  <span className="DiscountPercentage">{productData[21]?.discountPercentage}%off</span>
                </div>
                <Link to={`/product/${productData[21]?.title.slice(0, 18)}-${productData[21]?.id}`} className='viewProductDetailsLink'>View </Link>
              </div>
            </div>

            <div className='productBox'>
              <img src={productData[29]?.images[0]} alt="" className={`${productData[29]?.category}Image CommonImage`} />
              <span className='productRatingLabel'>{productData[29]?.rating}<i className="fa-solid fa-star"></i></span>
              <div className="productDetailsContainer">
                <p className="productTitle">{productData[29]?.title.slice(0, 20)}...</p>

                <div className="productPriceBox">
                  <span className="Dprice">₹{productData[29]?.Dprice}</span>
                  <span className="Aprice">₹{productData[29]?.Aprice}</span>
                  <span className="DiscountPercentage">{productData[29]?.discountPercentage}%off</span>
                </div>
                <Link to={`/product/${productData[29]?.title.slice(0, 18)}-${productData[29]?.id}`} className='viewProductDetailsLink'>View </Link>
              </div>
            </div>

            <div className='productBox'>
              <img src={productData[31]?.images[0]} alt="" className={`${productData[31]?.category}Image CommonImage`} />
              <span className='productRatingLabel'>{productData[31]?.rating}<i className="fa-solid fa-star"></i></span>
              <div className="productDetailsContainer">
                <p className="productTitle">{productData[31]?.title.slice(0, 20)}...</p>

                <div className="productPriceBox">
                  <span className="Dprice">₹{productData[31]?.Dprice}</span>
                  <span className="Aprice">₹{productData[31]?.Aprice}</span>
                  <span className="DiscountPercentage">{productData[31]?.discountPercentage}%off</span>
                </div>
                <Link to={`/product/${productData[31]?.title.slice(0, 18)}-${productData[31]?.id}`} className='viewProductDetailsLink'>View </Link>
              </div>
            </div>

            <div className='productBox'>
              <img src={productData[36]?.images[0]} alt="" className={`${productData[36]?.category}Image CommonImage`} />
              <span className='productRatingLabel'>{productData[36]?.rating}<i className="fa-solid fa-star"></i></span>
              <div className="productDetailsContainer">
                <p className="productTitle">{productData[36]?.title.slice(0, 20)}...</p>

                <div className="productPriceBox">
                  <span className="Dprice">₹{productData[36]?.Dprice}</span>
                  <span className="Aprice">₹{productData[36]?.Aprice}</span>
                  <span className="DiscountPercentage">{productData[29]?.discountPercentage}%off</span>
                </div>
                <Link to={`/product/${productData[36]?.title.slice(0, 18)}-${productData[36]?.id}`} className='viewProductDetailsLink'>View </Link>
              </div>
            </div>

            <div className='productBox'>
              <img src={productData[43]?.images[0]} alt="" className={`${productData[43]?.category}Image CommonImage`} />
              <span className='productRatingLabel'>{productData[43]?.rating}<i className="fa-solid fa-star"></i></span>
              <div className="productDetailsContainer">
                <p className="productTitle">{productData[43]?.title.slice(0, 20)}...</p>

                <div className="productPriceBox">
                  <span className="Dprice">₹{productData[43]?.Dprice}</span>
                  <span className="Aprice">₹{productData[43]?.Aprice}</span>
                  <span className="DiscountPercentage">{productData[43]?.discountPercentage}%off</span>
                </div>
                <Link to={`/product/${productData[43]?.title.slice(0, 18)}-${productData[43]?.id}`} className='viewProductDetailsLink'>View </Link>
              </div>
            </div>


          </div>
        }

      </div>

      <div className="posterContainer">
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ab11f518b2101663.jpeg?q=20" alt="homePoster" className='homePoster' />
        <button className='showNowButton' onClick={() => navigateTo('products/All')}>Shop Now</button>
      </div>

      <div className="serviceCardContainer">

        <div className="serviceCard">
          <i className="fa-solid fa-truck-fast serviceIcon"></i>
          <h3 className='serviceTitle'>FREE SHIPPING</h3>
          <p className='serviceDes'>We believe in transparency and making your shopping experience as enjoyable as possible. That's why we offer free shipping on all orders, so you can focus on finding the perfect items without worrying about additional charges.</p>
        </div>

        <div className="serviceCard">
          <i className="fa-solid fa-headset serviceIcon"></i>
          <h3 className='serviceTitle'>SUPPORT 24/7</h3>
          <p className='serviceDes'>Have a question at midnight or a concern in the early hours? No problem! Our dedicated support team is ready to assist you 24 hours a day, 7 days a week. Wherever you are, whenever you need us, we're just a message or call away.</p>
        </div>

        <div className="serviceCard">
          <i className="fa-solid fa-headset serviceIcon"></i>
          <h3 className='serviceTitle'>100% REFUND</h3>
          <p className='serviceDes'>Enjoy the peace of mind that comes with our 100% Refund Guarantee. Whether there's an issue with the product, it doesn't meet your expectations, or you simply change your mind – we'll process your refund hassle-free.</p>
        </div>

        <div className="serviceCard">
          <i className="fa-solid fa-user-lock serviceIcon"></i>
          <h3 className='serviceTitle'>Secure Payment</h3>
          <p className='serviceDes'>Rest easy knowing that your sensitive payment information is safeguarded by state-of-the-art encryption technology. Our Secure Payment Gateway employs the highest security standards to protect your data from unauthorized access.</p>
        </div>

      </div>


      <div className="featuredProductContainer">
        <h1 className='containerHeading'>FEATURED PRODUCTS</h1>
        {
          isLoading ? <Loader /> : <FeaturedSlider />

        }
      </div>

    </section>
  )
}

export default HomeComponent
