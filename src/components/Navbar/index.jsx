import './styles.css';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import Menu from '../Menu';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [showUserOptions, setShowUserOptions] = useState(false);
	const onClickUserOptions = () => {
		setShowUserOptions(!showUserOptions);
	};
	const quantity = useSelector((state) => state.cart.quantity);
	const userOptions = [{ text: 'Login' }, { text: 'Register' }];
	return (
		<section className="m-0">
			<div className='navbar container'>
				<div className='navbar__menu'>
					<MenuIcon />
				</div>
				<div className='navbar__logo'>
					<Link to='/'>
						<h1 className='logo'>E-Shop</h1>
					</Link>
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
					<div className='navbar__item navbar__item-user'>
						<PersonOutlineOutlinedIcon onClick={onClickUserOptions} />
						{showUserOptions && (
							<Menu options={userOptions} onToggleShow={onClickUserOptions} />
						)}
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
