import React, { useState, useEffect } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Tooltip from '@mui/material/Tooltip';
import RadioOptions from '../RadioOptions';
import ColorOptions from './ColorOptions';
import SizeOptions from './SizeOptions';
import './styles.css';
// import { Add, Remove } from "@material-ui/icons";
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../../requestMethods';
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';

const ProductDetail = () => {
	const location = useLocation();
	const id = location.pathname.split('/')[2];
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);
	const [color, setColor] = useState('');
	const [size, setSize] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await publicRequest.get('/products/find/' + id);
				setProduct(res.data);
			} catch {}
		};
		getProduct();
	}, [id]);

	const handleQuantity = (type) => {
		if (type === 'dec') {
			quantity > 1 && setQuantity(quantity - 1);
		} else {
			setQuantity(quantity + 1);
		}
	};

	const handleColor = (selectedColor) => {
		setColor(selectedColor);
	};
	const handleSize = (selectedSide) => {
		setSize(selectedSide);
	};

	const onAddToCart = () => {
		dispatch(addProduct({ ...product, quantity, color, size }));
	};
	return (
		<section>
			<div className='productDetail container'>
				<div className='productDetail__card'>
					<div className='productDetail__imageSection'>
						<img src={product.img} alt='' className='productDetail__image' />
						<RadioOptions />
					</div>
					<div className='productDetail__infoSection'>
						<div className='productDetail__main'>
							<h1 className='productDetail__name'>{product.title}</h1>
							<h2 className='productDetail__brand'> Brandex</h2>
							<h3 className='productDetail__price'>
								<span>$</span>
								<span>{product.price}</span>
							</h3>
							<div className='productDetail__quantity'>
								<span
									onClick={() => handleQuantity('dec')}
									className='quantity__decrement'>
									-
								</span>
								<span>{quantity}</span>
								<span
									onClick={() => handleQuantity('inc')}
									className='quantity__increment'>
									+
								</span>
							</div>
						</div>

						<div className='productDetail__variants'>
							<div className='productDetail__size'>
								<h4 className='productDetail__size-title'>Size</h4>
								<SizeOptions handleSize={handleSize} sizes={product.size} />
							</div>
							<div className='productDetail__color'>
								<h4 className='productDetail__color-title'>Color</h4>
								<ColorOptions
									handleColor={handleColor}
									colors={product.color}
								/>
							</div>
						</div>
						<div className='productDetail__buttons'>
							<button className='button button-buy-now'>
								<span>BUY NOW</span>
							</button>
							<Tooltip
								title='Add To Cart'
								placement='top-start'
								enterDelay={1000}>
								<button
									className='button button-add-cart'
									onClick={onAddToCart}>
									<ShoppingCartOutlinedIcon />
								</button>
							</Tooltip>
							<Tooltip
								title='Add To Wish List'
								placement='top-start'
								enterDelay={1000}>
								<button className='button button-add-wish'>
									<FavoriteBorderOutlinedIcon />
								</button>
							</Tooltip>
						</div>
						<div className='productDetail__description'>
							<h3>Description</h3>
							<p>{product.description}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetail;
