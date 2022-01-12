import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Container = styled.div`
	height: 60px;
`;
const Wrapper = styled.div`
	display: flex;
	padding: 10px 20px;
	justify-content: space-between;
	align-items: center;
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;
const Language = styled.div`
	font-size: 14px;
	cursor: pointer;
`;
const SearchContainer = styled.div`
	border: 0.5px solid var(--c-search-border);
	display: flex;
	align-items: center;
	margin-left: 25px;
`;
const Input = styled.input`
	border: none;
	outline: none;
`;
const Center = styled.div`
	flex: 1;
	text-align: center;
`;
const Logo = styled.h1`
	font-size: 2rem;
	font-weight: bold;
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input />
						<SearchIcon style={{color: "gray", fontSize: "1rem"}}/>
					</SearchContainer>
				</Left>
				<Center>
					<Logo>SR STORE</Logo>
				</Center>
				<Right>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>
					<MenuItem>
						<Badge badgeContent={4} color='primary'>
							<ShoppingCartOutlinedIcon color='action' />
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
