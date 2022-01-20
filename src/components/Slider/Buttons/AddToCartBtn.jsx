import React from 'react';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import './styles.css';

const AddToCartBtn = ({ text, wIcon, cssUtils }) => {
	const css= cssUtils ? cssUtils : '';
	return (
		<div className={`button button--primary button--addToCart ${css}`}>
			{ text && <span className="button__text">{text}</span>}
			{wIcon && (
				<div className="button__icon">
					<AddShoppingCartOutlinedIcon />
				</div>
			)}
		</div>
	);
};

export default AddToCartBtn;
