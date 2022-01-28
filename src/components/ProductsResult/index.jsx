import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import './styles.css';

const ProductsResult = ({ cat, filters, sort }) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get(
					cat !== 'all'
						? `http://localhost:5000/api/products?category=${cat}`
						: 'http://localhost:5000/api/products'
				);
				setProducts(res.data);
			} catch (err) {}
		};
		getProducts();
	}, [cat]);

	useEffect(() => {
		cat &&
			setFilteredProducts(
				products.filter((item) =>
					Object.entries(filters).every(([key, value]) =>
						item[key].includes(value)
					)
				)
			);
	}, [products, cat, filters]);

	useEffect(() => {
		if (sort === 'newest') {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => a.createdAt - b.createdAt)
			);
		} else if (sort === 'asc') {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => a.price - b.price)
			);
		} else {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => b.price - a.price)
			);
		}
	}, [sort]);

	return (
		<div className='productsResult'>
			{cat
				? filteredProducts.map((product) => (
						<ProductCard product={product} key={product._id} />
				  ))
				: products
						.slice(0, 8)
						.map((product) => (
							<ProductCard product={product} key={product._id} />
						))}

			{(products.length === 0 || filteredProducts.length === 0) && (
				<div className='no-products'>
					No products founded <SentimentVeryDissatisfiedIcon />
				</div>
			)}
		</div>
	);
};

export default ProductsResult;
