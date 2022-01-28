import React from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const CartDetails = () => {
	const cart = useSelector((state) => state.cart);
	return (
		<div className='shoppingCart__cartDetails cartDetails'>
			<div className='cartDetails__title'>
				<h3>Your Order</h3>
			</div>
			<div className='cartDetails__items'>
				{cart.products.map((item) => {
					return (
						<CartItem
							key={item._id}
							imgUrl={item.img}
							name={item.title}
							id={item._id}
							color={item.color}
							size={item.size}
							quantity={item.quantity}
							price={item.price}
						/>
					);
				})}
			</div>
			<div className='cartDetails__total'>
				<table>
					{/* <caption>Summary</caption> */}
					{/* <thead>
						<tr>
							<th scope='col'>Account</th>
							<th scope='col'>Amount</th>
						</tr>
					</thead> */}
					<tbody>
						<tr>
							<td data-label='Account'>Sub Total</td>
							<td data-label='Amount'>$125</td>
						</tr>
						<tr>
							<td data-label='Account'>Discount</td>
							<td data-label='Amount'> -$10</td>
						</tr>
						<tr>
							<td data-label='Account'>Delivery</td>
							<td data-label='Amount'>$5</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className='cartDetails__cta'>
				<button>
					<span>Pay</span> <span>$110</span>
				</button>
			</div>
		</div>
	);
};

export default CartDetails;
