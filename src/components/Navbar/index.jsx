import './styles.css';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const quantity = useSelector((state) => state.cart.quantity);
	return (
		<section>
			<div className='navbar container'>
			<div className='navbar__menu'>
					<MenuIcon />
					<div className='menu'>
						<div className='menu__item'></div>
						<div className='menu__item'></div>
						<div className='menu__item'></div>
					</div>
				</div>
				<div className='navbar__logo'>
					<h1 className='logo'>E-Shop</h1>
				</div>
				<div className='navbar__nav'>
					<div className='navbar__item'>
						<SearchOutlinedIcon />
					</div>
					<Link to='/cart'>
						<div className='navbar__item'>
							<Badge badgeContent={quantity} color='primary'>
								<ShoppingCartOutlinedIcon />
							</Badge>
						</div>
					</Link>
					<div className='navbar__item'>
						<PersonOutlineOutlinedIcon />
					</div>
				</div>
				<Link to='/cart'>
						<div className='navbar__item--mobile'>
							<Badge badgeContent={quantity} color='primary'>
								<ShoppingCartOutlinedIcon />
							</Badge>
						</div>
					</Link>
			</div>
		</section>
	);
};

export default Navbar;
