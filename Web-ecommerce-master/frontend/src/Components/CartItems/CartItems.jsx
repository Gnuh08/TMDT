// import React, { useContext, useState } from 'react';
// import './CartItems.css';
// import { ShopContext } from '../../Context/ShopContext';
// import remove_icon from '../Assets/cart_cross_icon.png';

// const CartItems = () => {
//   const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

//   const [promoCode, setPromoCode] = useState('');
//   const [discount, setDiscount] = useState(0);

//   const handlePromoCodeSubmit = () => {
//     // console.log("g");
//     if (promoCode === '12345') {
//       setDiscount(getTotalCartAmount() * 0.5); // promocode
//     } else {
//       setDiscount(0);
//     }
//   };

//   const cartTotal = getTotalCartAmount() - discount;

//   return (
//     <div className='cartitems'>
//       <div className='cartitems-format-main'>
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />
//       {all_product.length > 0 &&
//         all_product.map((e) => {
//           if (cartItems[e.id] > 0) {
//             return (
//               <div key={e.id}>
//                 <div className='cartitems-format cartitems-format-main'>
//                   <img src={e.image} alt='' className='carticon-product-icon' />
//                   <p>{e.name}</p>
//                   <p>{e.new_price}Đ</p>
//                   <button className='cartitems-quantity'>{cartItems[e.id]}</button>
//                   <p>{e.new_price * cartItems[e.id]}Đ</p>
//                   <img
//                     className='cartitems-remove-icon'
//                     src={remove_icon}
//                     onClick={() => {
//                       removeFromCart(e.id);
//                     }}
//                     alt=''
//                   />
//                 </div>
//               </div>
//             );
//           }
//           return null;
//         })}
//       <div className='cartitems-down'>
//         <div className='cartitems-total'>
//           <h1>Cart Total</h1>
//           <div>
//             <div className='cartitems-total-item'>
//               <p>Subtotal</p>
//               <p>{getTotalCartAmount()}Đ</p>
//             </div>
//             <hr />
//             <div className='cartitems-total-item'>
//               <h3>Discount</h3>
//               <h3>{discount}Đ</h3>
//             </div>
//             <hr />
//             <div className='cartitems-total-item'>
//               <h3>Total</h3>
//               <h3>{cartTotal}Đ</h3>
//             </div>
//           </div>
//           <button>PROCEED TO CHECKOUT</button>
//         </div>
//         <div className='cartitems-promocode'>
//           <p>If you have a promo code, enter it here</p>
//           <div className='cartitems-promobox'>
//             <input type='text' placeholder='Promo code' value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
//             <button onClick={handlePromoCodeSubmit}>Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItems;


// import React, { useContext, useState } from 'react';
// import './CartItems.css';
// import { ShopContext } from '../../Context/ShopContext';
// import remove_icon from '../Assets/cart_cross_icon.png';

// const CartItems = () => {
//   const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

//   const [promoCode, setPromoCode] = useState('');
//   const [discount, setDiscount] = useState(0);

//   const handlePromoCodeSubmit = () => {
//     // console.log("g");
//     if (promoCode === '12345') {
//       setDiscount(getTotalCartAmount() * 0.5); // promocode
//     } else {
//       setDiscount(0);
//     }
//   };

//   const cartTotal = getTotalCartAmount() - discount;

//   return (
//     <div className='cartitems'>
//       <div className='cartitems-format-main'>
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />
//       {all_product.length > 0 &&
//         all_product.map((e) => {
//           if (cartItems[e.id] > 0) {
//             return (
//               <div key={e.id}>
//                 <div className='cartitems-format cartitems-format-main'>
//                   <img src={e.image} alt='' className='carticon-product-icon' />
//                   <p>{e.name}</p>
//                   <p>${e.new_price}</p>
//                   <button className='cartitems-quantity'>{cartItems[e.id]}</button>
//                   <p>${e.new_price * cartItems[e.id]}</p>
//                   <img
//                     className='cartitems-remove-icon'
//                     src={remove_icon}
//                     onClick={() => {
//                       removeFromCart(e.id);
//                     }}
//                     alt=''
//                   />
//                 </div>
//               </div>
//             );
//           }
//           return null;
//         })}
//       <div className='cartitems-down'>
//         <div className='cartitems-total'>
//           <h1>Cart Total</h1>
//           <div>
//             <div className='cartitems-total-item'>
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className='cartitems-total-item'>
//               <h3>Discount</h3>
//               <h3>${discount}</h3>
//             </div>
//             <hr />
//             <div className='cartitems-total-item'>
//               <h3>Total</h3>
//               <h3>${cartTotal}</h3>
//             </div>
//           </div>
//           <button>PROCEED TO CHECKOUT</button>
//         </div>
//         <div className='cartitems-promocode'>
//           <p>If you have a promo code, enter it here</p>
//           <div className='cartitems-promobox'>
//             <input type='text' placeholder='Promo code' value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
//             <button onClick={handlePromoCodeSubmit}>Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };




// export default CartItems;




import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const handlePromoCodeSubmit = () => {
    if (promoCode === '12345') {
      setDiscount(getTotalCartAmount() * 0.5);
    } else {
      setDiscount(0);
    }
  };

  // const handleCheckout = async () => {
  //   const response = await fetch('http://localhost:4000/payment', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ amount: getTotalCartAmount() - discount }),
  //   });
    
  //   const data = await response.json();
  //   if (data.payUrl) {
  //     window.location.href = data.payUrl;
  //   }
  // };


  const handleCheckout = async () => {
    const cartTotal = getTotalCartAmount() - discount;
    console.log("Số tiền gửi lên server: ", cartTotal); // Log số tiền để kiểm tra
  
    const response = await fetch('http://localhost:4000/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: cartTotal }), // Gửi đúng số tiền giỏ hàng
    });
    
    const data = await response.json();
    console.log("Phản hồi từ server MoMo:", data); // Log phản hồi từ MoMo
    if (data.payUrl) {
      window.location.href = data.payUrl;
    }
  };
  
  

  const cartTotal = getTotalCartAmount() - discount;

  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.length > 0 &&
        all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className='cartitems-format cartitems-format-main'>
                  <img src={e.image} alt='' className='carticon-product-icon' />
                  <p>{e.name}</p>
                  <p>{e.new_price}Đ</p>
                  <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                  <p>{e.new_price * cartItems[e.id]}Đ</p>
                  <img
                    className='cartitems-remove-icon'
                    src={remove_icon}
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                    alt=''
                  />
                </div>
              </div>
            );
          }
          return null;
        })}
      <div className='cartitems-down'>
        <div className='cartitems-total'>
          <h1>Cart Total</h1>
          <div>
            <div className='cartitems-total-item'>
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}Đ</p>
            </div>
            <hr />
            <div className='cartitems-total-item'>
              <h3>Discount</h3>
              <h3>{discount}Đ</h3>
            </div>
            <hr />
            <div className='cartitems-total-item'>
              <h3>Total</h3>
              <h3>{cartTotal}Đ</h3>
            </div>
          </div>
          <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cartitems-promocode'>
          <p>If you have a promo code, enter it here</p>
          <div className='cartitems-promobox'>
            <input type='text' placeholder='Promo code' value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
            <button onClick={handlePromoCodeSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;