import {Link} from 'react-router-dom'
let featuresProduct = [

    {
        "id": 11,
        "title": "OPPO Find N3 Flip",
        "discountPercentage": 5,
        "rating": "5.0",
        "category": 'mobile',
        "brand" : 'Oppo',
        "images": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/f/s/t/-original-imagu8h9bqnjsdnz.jpeg?q=70",
    },

    {
        "id": 16,
        "title": "SAMSUNG Galaxy Z Fold5",
        "discountPercentage": 2,
        "rating": "4.8",
        "category": 'mobile',
        "brand" : 'Samsung',
        "images": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/k/a/galaxy-fold5-sm-f946bzegins-samsung-original-imagru5udkewyvyn.jpeg?q=70",
    },

    {
        "id": 21,
        "title": "HP Spectre Eyesafe Intel Evo Core i7 12th Gen 1255U - (16 GB/512 GB SSD/Windows 11 Home) ef0053TU Notebook  (13.5 inch, Nightfall Black, 1.34 kg, With MS Office)",
        "discountPercentage": 12,
        "rating": "4.5",
        "category": 'laptop',
        "brand" : 'Hp',
        "images": "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/h/s/n/spectre-x360-13-notebook-hp-original-imagg4fa4ng9axqx.jpeg?q=70",
    },

    {
        "id": 33,
        "title": "ASUS ROG Strix SCAR 16 (2023) with 90WHr Battery Intel HX-Series Core i9 13th Gen 13980HX - (32 GB/1 TB SSD/Windows 11 Home/16 GB Graphics/NVIDIA GeForce RTX 4090/240 HZ/175 W) G634JY-NM054WS Gaming Laptop  (16 Inch, Black, 2.50 Kg, With MS Office)",
        "discountPercentage": 16,
        "rating": "4.3",
        "category": 'laptop',
        "brand" : 'Asus',
        "images": "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/8/b/w/-original-imagz42t6kzzjrcx.jpeg?q=70",
    },

    {
        "id": 34,
        "title": "ASUS TUF Gaming F15 Core i5 12th Gen 12500H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050) FX507ZC4-HN116W Gaming Laptop  (15.6 Inch, Mecha Gray, 2.20 Kg)",
        "discountPercentage": 29,
        "rating": "4.6",
        "category": 'laptop',
        "brand" : 'Asus',
        "images": "https://rukminim2.flixcart.com/image/416/416/l3rmzrk0/computer/l/7/m/-original-imagetj2awbvdju6.jpeg?q=70",
    },

    {
        "id": 38,
        "title": "Lenovo Lenovo V15 Celeron Dual Core 4th Gen - (8 GB/256 GB SSD/Windows 11 Home) 82QYA00MIN Laptop  (15.6 inch, Alc Balck)",
        "discountPercentage": 52,
        "rating": "4.3",
        "category": 'laptop',
        "brand" : 'Lenvo',
        "images": "https://rukminim2.flixcart.com/image/416/416/xif0q/screen-guard/screen-guard/4/b/d/asg-14715-saco-original-imaghqbah9jycshw.jpeg?q=70",
    },


    {
        "id": 43,
        "title": "Canon Digital Camera EOS R6 Mark II with 24-105 STM Kit Black",
        "discountPercentage": 1,
        "rating": "4.5",
        "category": 'camera',
        "brand" : 'Canon',
        "images": "https://m.media-amazon.com/images/I/71eOQ5ssTAL._SX522_.jpg",
    },


    {
        "id": 51,
        "title": "Sony Digital Vlog Camera ZV 1 (Compact, Video Eye AF, Flip Screen, in-Built Microphone, Bluetooth Shooting Grip, 4K Vlogging Camera and Content Creation) - Black",
        "discountPercentage": 10,
        "category": 'camera',
        "rating": "4.3",
        "brand" : 'Sony',
        "images": "https://m.media-amazon.com/images/I/61EGyktwgTL._SX425_.jpg",
    },


    {
        "id": 54,
        "title": "SONY ZV-E1L Mirrorless Camera Full-Frame Interchangeable Vlog �28-60mm Made for Creators | Artificial Intelligence Based Autofocus  (Black)",
        "category": 'camera',
        "discountPercentage": 12,
        "rating": "4.9",
        "brand" : 'Sony',
        "images": "https://rukminim2.flixcart.com/image/416/416/xif0q/dslr-camera/l/c/w/zv-e1l-12-1-zv-e1l-sony-original-imagrveqp2jrz9ay.jpeg?q=70",

    },

];
const FeaturedSlider = () => {


    return (
        <div className="FeaturedSlider--Container">
            <div className="FeaturedSlider--Container_Box">
               
              {
                featuresProduct.map((product, index)=>{
                    return <div className='productBox' key={product.id}>
                    <img src={product.images} alt="" className={`${product.category}Image CommonImage`} />
                    <span className='productRatingLabel'>{product.rating}<i className="fa-solid fa-star"></i></span>
                    <div className="productDetailsContainer">
                        <p className="productTitle">{product.title.slice(0, 20)}...</p>

                        <div className="productPriceBox">
                            <span className="DiscountPercentage">{product.discountPercentage}%off</span>
                        </div>
                        <Link to={`/product/${product.brand}-${product.id}`} className='viewProductDetailsLink'>View </Link>
                    </div>
                </div>
                })
              }

            </div>

        </div>
    )
}

export default FeaturedSlider

