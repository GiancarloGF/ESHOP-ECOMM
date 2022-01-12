import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import styled from 'styled-components';

const Info = styled.div`
	align-items: center;
	background-color: rgba(0, 0, 0, 0.2);
	cursor: pointer;
	display: flex;
	height: 100%;
	justify-content: center;
	left: 0;
	opacity: 0;
	position: absolute;
	top: 0;
	transition: all 0.5s ease;
	width: 100%;
	z-index: 3;
`;

const Container = styled.div`
	align-items: center;
	background-color: #f5fbfd;
	display: flex;
	flex: 1;
	height: 350px;
	justify-content: center;
	margin: 5px;
	min-width: 280px;
	position: relative;
	&:hover ${Info} {
		opacity: 1;
	}
`;

const Circle = styled.div`
	background-color: var(--c-white);
	border-radius: 50%;
	height: 200px;
	position: absolute;
	width: 200px;
`;

const Image = styled.img`
	height: 75%;
	z-index: 2;
`;

const Icon = styled.div`
	align-items: center;
	background-color: #fff;
	border-radius: 50%;
	display: flex;
	height: 40px;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease;
	width: 40px;
	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`;

const Product = ({ item }) => {
	return (
		<Container>
			<Circle />
			<Image src={item.img} />
			<Info>
				<Icon>
					<ShoppingCartOutlinedIcon />
				</Icon>
				<Icon>
					<SearchOutlinedIcon />
				</Icon>
				<Icon>
					<FavoriteBorderOutlinedIcon />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;
