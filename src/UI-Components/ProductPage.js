import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Loader from './CompoLoader'
import axios from 'axios';

function ProductPage() {
    let brandName = [];
    let [productData, setProductData] = useState([]);
    let [productAllData, setproductAllData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let currentCategory = useParams().category;

    useEffect(() => {
        setIsLoading(true);
        axios.get("https://ecom-backend-t7c9.onrender.com/").then((response) => {
            setproductAllData(response.data);
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        setProductData(productAllData.filter((product) => currentCategory === 'All' ? product : product.category === currentCategory))
    }, [currentCategory, productAllData]);

    productAllData.filter((ele) => currentCategory === 'All' ? ele.brand : ele.category === currentCategory).forEach((ele) => {
        if (currentCategory === 'All') {
            if (!brandName.includes(ele.category)) {
                brandName.push(ele.category)
            }
        } else {
            if (!brandName.includes(ele.brand)) {
                brandName.push(ele.brand)
            }

        }
    });


    const handleFliterClick = (e) => {
        const filterContainer = document.querySelector('.filterContainer');
        const filterIcon = document.querySelector('.filterIcon');
        filterContainer.classList.remove("activeFilterContainer");
        filterIcon.classList.remove("fa-xmark");

        if (e.target.textContent === "All") {
            setProductData(productAllData.filter((product) => currentCategory === 'All' ? product : product.category === currentCategory))
        } else {
            if (currentCategory === 'All') {
                setProductData(productAllData.filter((product) => product.category === e.target.textContent))
            } else {
                setProductData(productAllData.filter((product) => product.brand === e.target.textContent))
            }
        }
    }

    return (
        <section className='ProductPageContainer'>
            <aside className='filterContainer'>
                <h3 className="filterContainer--Heading">Filter</h3>
                <p className="filterContainer--filterbrandName" onClick={handleFliterClick} >All</p>
                {
                    brandName.map((ele) => {
                        return <p className="filterContainer--filterbrandName" key={ele} onClick={handleFliterClick} >{ele}</p>
                    })
                }


            </aside>
            <div className="productContainer  ShowProduct-ProductContainer">
                {
                    isLoading ? <Loader /> : <ShowProduct product={productData} />
                }
            </div>
        </section>
    )
}

export default ProductPage


function ShowProduct(props) {
    let productData = props.product;

    const handleFilterClick = (e) => {
        const filterContainer = document.querySelector('.filterContainer');
        const filterIcon = document.querySelector('.filterIcon');
        filterContainer.classList.toggle("activeFilterContainer");
        filterIcon.classList.toggle("fa-xmark")
    }
    return (

        <>
            <button className='filterProductButton' onClick={handleFilterClick}><i className="fa-solid fa-filter filterIcon"></i></button>
            {
                productData.length > 0 ? productData.map((product) => {
                    return <div className='productBox' key={product.id}>
                        <img src={product.images[0]} alt="" className={`${productData[0].category}Image CommonImage`} />
                        <span className='productRatingLabel'>{product.rating}<i className="fa-solid fa-star"></i></span>
                        <div className="productDetailsContainer">
                            <p className="productTitle">{product.title.slice(0, 20)}...</p>

                            <div className="productPriceBox">
                                <span className="Dprice">₹{product.Dprice}</span>
                                <span className="Aprice">₹{product.Aprice}</span>
                                <span className="DiscountPercentage">{product.discountPercentage}%off</span>
                            </div>
                            <Link to={`/product/${product.brand}-${product.id}`} className='viewProductDetailsLink'>View </Link>
                        </div>
                    </div>
                }) : <p className='outOfStockMessage'>Out-Of-Stock</p>
            }

        </>
    );
}