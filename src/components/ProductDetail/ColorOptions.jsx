import React, { useRef } from 'react';
import './styles.css';

const ColorOptions = ({ handleColor, colors }) => {
	const ulRef = useRef(null);
	const handleClick = (e) => {
		const color = e.currentTarget.dataset.color;
		handleColor(color);
		ulRef.current.querySelector('.active')?.classList.remove('active');
		e.currentTarget.classList.add('active');
	};
	return (
		<div className='productDetail__color-options'>
			<ul ref={ulRef}>
				{colors &&
					colors.map((color) => {
						return (
							<li
								key={color}
								onClick={handleClick}
								className='color-option'
								data-color={color}>
								<span></span>
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default ColorOptions;
