import React from 'react';
import { Link } from 'react-router-dom';
import CartListItem from './CartListItem';

export default function CartList({ carts = [], onRemoveCartItem = () => {} }) {
  // Cart 총합계 금액 계산식
  let cartTotalPrice = 0;
  for (let i = 0; i < carts.length; i++) {
    cartTotalPrice += parseFloat(carts[i].price.replace(/\$/, ''));
  }
  return carts.length > 0 ? (
    // Cart가 비어있지 않은 경우
    <div className="cart-item">
      <ul className="cart-item__list">
        {carts.map(cart => (
          <CartListItem
            key={cart.id}
            {...cart}
            onRemoveCartItem={onRemoveCartItem}
          />
        ))}
      </ul>
      <button className="button">
        Checkout / <span className="unit">${cartTotalPrice}</span>
      </button>
    </div>
  ) : (
    // Cart가 비어있는 경우
    <div className="cart-noitem">
      <p>The Cart is empty.</p>
      <Link to="/" className="button">
        Continue Browsing
      </Link>
    </div>
  );
}
