import SearchIcon from '@mui/icons-material/Search';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import React from 'react';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';

const Container = styled.div`
	height: 60px;
	${mobile({ height: '50px' })}
`;
const Wrapper = styled.div`
	display: flex;
	padding: 10px 20px;
	justify-content: space-between;
	align-items: center;
	${mobile({ padding: '10px' })}
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;
const Language = styled.div`
	font-size: 14px;
	cursor: pointer;
	${mobile({ display: 'none' })}
`;
const SearchContainer = styled.div`
	border: 0.5px solid var(--c-search-border);
	display: flex;
	align-items: center;
	margin-left: 25px;
	${mobile({ marginLeft: 0 })}
`;
const Input = styled.input`
	border: none;
	outline: none;
	${mobile({ width: '50px' })}
`;
const Center = styled.div`
	flex: 1;
	text-align: center;
`;
const Logo = styled.h1`
	font-size: 2rem;
	font-weight: bold;
	${mobile({ fontSize: '1.2rem' })}
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: end;
	${mobile({ display: 'none' })}
`;
const RightMobile = styled.div`
	display: none;
	${mobile({ flex: 2, justifyContent: 'end', display: 'flex' })}
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin: 0 1rem;
	${mobile({ fontSize: '12px', margin: '0 1rem 0 0' })}
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder='Search' />
						<SearchIcon style={{ color: 'gray', fontSize: '1rem' }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>SR STORE.</Logo>
				</Center>
				<Right>
					<MenuItem>
						<Badge badgeContent={4} color='primary'>
							<ShoppingCartOutlinedIcon color='action' />
						</Badge>
					</MenuItem>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>
				</Right>
				<RightMobile>
					<MenuItem>
						<Badge badgeContent={4} color='primary'>
							<ShoppingCartOutlinedIcon color='action' />
						</Badge>
					</MenuItem>
					<MenuOutlinedIcon />
				</RightMobile>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
