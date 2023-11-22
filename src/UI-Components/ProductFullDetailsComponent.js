import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Loader from './CompoLoader';
import { useDispatch } from "react-redux";
import { addToCart } from "../Slice/ReduxCartSlice";

function ProductFullDetailsComponent() {
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
    dispatch(addToCart(product))
  }
  return (
    <section className='ProductFullDetailsContainer'>
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
