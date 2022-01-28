import React from 'react';
import CartDetails from './CartDetails';
import Checkout from './Checkout';
import './styles.css';
const ShoppingCart = () => {
	return (
		<section>
			<div className='shoppingCart'>
                <Checkout />
                <CartDetails />
            </div>
		</section>
	);
};

export default ShoppingCart;
