import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Menu = ({ options, onToggleShow }) => {
	return (
		<div className='menu'>
			{options.map((option) => {
				return (
					<div className='menu__item' key={option.text} onClick={onToggleShow}>
						{option.path ? (
							<Link to={option.path}>{option.text}</Link>
						) : (
							<span>{option.text}</span>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Menu;
