import React from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './styles.css';

const AddToWishBtn = ({ text, wIcon, cssUtils }) => {
	return (
		<div className={`button button--primary button--addToWish ${cssUtils}`}>
			{ text && <span className="button__text">{text}</span>}
			{wIcon && (
				<div className="button__icon">
					<FavoriteBorderOutlinedIcon />
				</div>
			)}
		</div>
	);
};

export default AddToWishBtn;
