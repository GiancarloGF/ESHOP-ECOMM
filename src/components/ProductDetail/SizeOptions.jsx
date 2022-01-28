import React, { useRef } from 'react';
import './styles.css';

const SizeOptions = ({ handleSize, sizes }) => {
	const ulRef = useRef(null);
	const handleClick = (e) => {
		const size = e.currentTarget.dataset.size;
		handleSize(size);
		ulRef.current.querySelector('.active')?.classList.remove('active');
		e.currentTarget.classList.add('active');
	};
	return (
		<div className='productDetail__size-options'>
			<ul ref={ulRef}>
				{sizes &&
					sizes.map((size) => {
						return (
							<li
								key={size}
								onClick={handleClick}
								className='size-option'
								data-size={size}>
								<span>{size}</span>
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default SizeOptions;
