import './styles.css';
import React from 'react';

const Categories = () => {
	return (
		<section>
			<div className='categories container'>
				<h1 className='categories__title'>Categories</h1>
				<div className='categories__items'>
					<div className='categories__item item item--jackets'>
						<h2 className='item__title'>Jackets</h2>
					</div>
					<div className='categories__item item item--coats'>
						<h2 className='item__title'>Coats</h2>
					</div>
					<div className='categories__item item item--tshirts'>
						<h2 className='item__title'>T-Shirts</h2>
					</div>
					<div className='categories__item item item--jeans'>
						<h2 className='item__title'>Jeans</h2>
					</div>
					<div className='categories__item item item--shoes'>
						<h2 className='item__title'>Shoes</h2>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Categories;
