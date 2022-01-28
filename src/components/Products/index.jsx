import React, { useState } from 'react';
import { useLocation } from 'react-router';
import ProductsResult from '../ProductsResult';
import FilterBar from '../FilterBar';
import { Link } from 'react-router-dom';

import './styles.css';

const Products = () => {
	const location = useLocation();
	const cat = location.pathname.split('/')[2];
	const [filters, setFilters] = useState({});
	const [sort, setSort] = useState('newest');

	const handleFilter = (e) => {
		const value = e.target.value;
		setFilters({
			...filters,
			[e.target.name]: value === e.target.name ? 'all' : value,
		});
	};

	const handleSort = (e) => setSort(e.target.value);
	return (
		<section>
			<h1 className='container'>{cat}</h1>
			<div className='products__content container'>
				<div className='products__content-left'>
					<h3>Categories</h3>
					<ul>
						<Link to='/products/all'>
							<li>All Products</li>
						</Link>
						<Link to='/products/jackets'>
							<li>Jackets</li>
						</Link>
						<Link to='/products/caps'>
							<li>Caps</li>
						</Link>
						<Link to='/products/jeans'>
							<li>Jeans</li>
						</Link>
						<Link to='/products/t-shirts'>
							<li>T-Shirts</li>
						</Link>
						<Link to='/products/women'>
							<li>Women</li>
						</Link>
						<Link to='/products/men'>
							<li>Men</li>
						</Link>
						<Link to='/products/bags'>
							<li>Bags</li>
						</Link>
						<Link to='/products/dresses'>
							<li>Dresses</li>
						</Link>
					</ul>
				</div>
				<div className='products__content-right'>
					<FilterBar handleFilter={handleFilter} handleSort={handleSort} />
					<ProductsResult cat={cat} filters={filters} sort={sort} />
				</div>
			</div>
		</section>
	);
};

export default Products;
