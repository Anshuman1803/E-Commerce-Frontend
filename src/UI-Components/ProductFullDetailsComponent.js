import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function ProductFullDetailsComponent() {
  const ProductID = useParams().title.split("-")[1];
  const currentProduct = useSelector((state) => state.store).filter((ele) => ele.id === Number(ProductID));

  return (
    <section className='ProductFullDetailsContainer'>
      <div className="Product--pictureContainer">
        <img src={currentProduct[0].images[0]} alt="ProductPoster" className={`${currentProduct[0].category}currentImage currentImage`} />
        <div className="MoreImageContainer">
          {
            currentProduct[0].images.map((images, index) => {
              return <div className='imageBox' key={index}>
                <img src={images} alt="MoreImages" className='MoreImage' />
              </div>
            })
          }
        </div>
      </div>

      <div className="Product--DetailsContainer">
        <h2 className='currentProduct--title'>{currentProduct[0].title}</h2>
        <p className="currentProduct--rating">{currentProduct[0].rating}<i className="fa-solid fa-star"></i></p>

        <p className="currentPrduct--price">
          <span className="Dprice">₹{currentProduct[0].Dprice}</span>
          <span className="Aprice">₹{currentProduct[0].Aprice}</span>
          <span className="DiscountPercentage">{currentProduct[0].discountPercentage}%off</span>
        </p>
        <div className="itemCountContainer">
          <button className='countButton'>-</button><span className='itemCount'>0</span> <button className='countButton'>+</button>
          <button className='addToCartButton'>Add To Cart</button>
        </div>

   
        <p className='currentPrduct--discription'>
          Description : {currentProduct[0].description}
        </p>
      </div>
    </section>
  )
}

export default ProductFullDetailsComponent
