import React, { useState } from 'react';
import './styles.css';

const Steper = () => {
	const [currActive, setCurrActive] = useState('option-1');
	const handleClick = (e) => {
		setCurrActive(e.target.id);
	};
	return (
		<div className='steper'>
			<span
				id='option-1'
				className={
					currActive === 'option-1' ? 'steper__option--active' : 'steper__option'
				}
				onClick={handleClick}
				></span>
			<span
				id='option-2'
				className={	
					currActive === 'option-2' ? 'steper__option--active' : 'steper__option'
				}
				onClick={handleClick}
				></span>
			<span
				id='option-3'
				className={
					currActive === 'option-3' ? 'steper__option--active' : 'steper__option'
				}
				onClick={handleClick}
				></span>
			<span
				id='option-4'
				className={
					currActive === 'option-4' ? 'steper__option--active' : 'steper__option'
				}
				onClick={handleClick}
				></span>
		</div>
	);
};

export default Steper;
