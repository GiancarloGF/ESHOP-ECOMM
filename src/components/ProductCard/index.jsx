import React ,{useState}from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';

import './styles.css';

const Product = ({ product }) => {

	const dispatch = useDispatch();

	const onAddToCart = () => {
		dispatch(addProduct({ ...product, quantity:1, color: product.color[0], size: product.size[0] }));
	};
	return (
		<article className='product'>
			<div className='product__image'>
				<img src={product.img} alt='' />
			</div>
			<div className='product__info'>
				<h4 className='product__info-name'>{product.title}</h4>
				<h5 className='product__info-brand'>Brandex</h5>
				<span className='product__info-price'>${product.price}</span>
				<div className='product__info-rate'>
					<Rating name='read-only' value={4} readOnly />
				</div>
			</div>

			<div className='product__options'>
				<div className='options__item'>
					<Link to={`/product/${product._id}`}>
						<VisibilityOutlinedIcon />
					</Link>
				</div>
				<div className='options__item' onClick={onAddToCart}>
					<AddShoppingCartOutlinedIcon />
				</div>
				<div className='options__item'>
					<FavoriteBorderOutlinedIcon />
				</div>
			</div>
		</article>
	);
};

export default Product;
