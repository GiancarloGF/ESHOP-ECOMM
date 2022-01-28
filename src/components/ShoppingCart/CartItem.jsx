import React from 'react';

const CartItem = ({ id, name, price, color, size, quantity, imgUrl }) => {
	return (
		<div className='cartDetails__item cartItem'>
			<div className='cartItem__left'>
				<img src={imgUrl} alt='' />
			</div>
			<div className='cartItem__right'>
				<div className='cartItem__name'>{name}</div>
				<div className='cartItem__variants'>
					<div className='cartItem__size'>
						Size: <span>{size}</span>
					</div>
					<div className='cartItem__color'>
						Color: <span></span>
					</div>
				</div>
				<div className='cartItem__total'>
					<span className='price'>${price}</span>
					<span className='quantity'>x{quantity}</span>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
