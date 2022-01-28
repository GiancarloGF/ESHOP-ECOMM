import './styles.css';
import React from 'react';
import {Link} from 'react-router-dom';
const Categories = () => {
	return (
		<section>
			<div className='categories container'>
				<h1 className='categories__title'>Categories</h1>
				<div className='categories__items'>
					<Link to='/products/jackets'>
						<div className='categories__item item item--jackets'>
							<h2 className='item__title'>Jackets</h2>
						</div>
					</Link>
					<Link to='/products/caps'>
						<div className='categories__item item item--coats'>
							<h2 className='item__title'>Caps</h2>
						</div>
					</Link>
					<Link to='/products/t-shirts'>
						<div className='categories__item item item--tshirts'>
							<h2 className='item__title'>T-Shirts</h2>
						</div>
					</Link>
					<Link to='/products/jeans'>
						<div className='categories__item item item--jeans'>
							<h2 className='item__title'>Jeans</h2>
						</div>
					</Link>
					<Link to='/products/shoes'>
						<div className='categories__item item item--shoes'>
							<h2 className='item__title'>Shoes</h2>
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Categories;
