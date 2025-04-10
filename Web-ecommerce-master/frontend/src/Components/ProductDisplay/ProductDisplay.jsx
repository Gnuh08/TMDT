import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext.jsx'

const ProductDisplay = (props) => {
     const {product} = props;
     const {addToCart} = useContext(ShopContext);

    return (
      <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-mai-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-old">{product.old_price}Đ</div>
                <div className="productdisplay-right-prices-new">{product.new_price}Đ</div>
            </div>
            <div className="productdisplay-right-description">
               
            </div>
            <div className="productdisplay-right-size">
                <h1></h1>
                <div>
                   
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span> MotoBike</p>
            <p className='productdisplay-right-category'><span>Tags :</span> Modern, Latest</p>
            <p className='productdisplay-right-description'>
            <span>Description :</span> Honda AirBlade là một dòng xe tay ga hiện đại với thiết kế thể thao, mạnh mẽ.  
            Xe được trang bị động cơ eSP tiết kiệm nhiên liệu, hệ thống phanh ABS an toàn và nhiều tiện ích như 
            khóa thông minh Smart Key, cốp rộng và đèn LED chiếu sáng. Đây là lựa chọn lý tưởng cho những ai tìm kiếm 
            một chiếc xe tay ga phong cách và hiệu suất cao.
            </p>

        </div>
      </div>
    );
  }

export default ProductDisplay