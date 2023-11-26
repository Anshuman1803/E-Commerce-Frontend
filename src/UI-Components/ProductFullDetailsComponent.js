import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Loader from './CompoLoader';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Slice/ReduxCartSlice";
import { ToastContainer, toast } from 'react-toastify';



function ProductFullDetailsComponent() {
  const { isLoggedIn } = useSelector((state) => state.User);

  const ProductID = useParams().title.split("-")[1];
  const [currentProduct, setCurrentProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true)
    axios.get(`http://localhost:5000/product/${ProductID}`).then((response) => {
      setCurrentProduct(response.data);
      setIsLoading(false);
    })

  }, [ProductID]);

  const handleAddToCart = (product) => {
    if (isLoggedIn) {
      toast.success('Item Added Successfully', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(addToCart(product))
    } else {
      toast.error('Permission Denied! First Sign In', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

  }
  return (
    <section className='ProductFullDetailsContainer'>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {
        isLoading ? <Loader /> : <>
          <div className="Product--pictureContainer">
            <img src={currentProduct[0]?.images[0]} alt="ProductPoster" className={`${currentProduct[0]?.category}currentImage currentImage`} />
            <div className="MoreImageContainer">
              {
                currentProduct[0]?.images.map((images, index) => {
                  return <div className='imageBox' key={index}>
                    <img src={images} alt="MoreImages" className='MoreImage' />
                  </div>
                })
              }
            </div>
          </div>

          <div className="Product--DetailsContainer">
            <h2 className='currentProduct--title'>{currentProduct[0]?.title}</h2>
            <p className="currentProduct--rating">{currentProduct[0]?.rating}<i className="fa-solid fa-star"></i></p>

            <p className="currentPrduct--price">
              <span className="Dprice">₹{currentProduct[0]?.Dprice}</span>
              <span className="Aprice">₹{currentProduct[0]?.Aprice}</span>
              <span className="DiscountPercentage">{currentProduct[0]?.discountPercentage}%off</span>
            </p>
            <div className="itemCountContainer">
              <button className='addToCartButton' onClick={() => handleAddToCart(currentProduct[0])}>Add To Cart</button>
            </div>


            <p className='currentPrduct--discription'>
              Description : {currentProduct[0]?.description}
            </p>
          </div>
        </>
      }
    </section>
  )
}

export default ProductFullDetailsComponent
