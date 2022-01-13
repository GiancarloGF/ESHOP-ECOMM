import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { mobile } from '../responsive';
import { sliderItems } from '../data';

const Container = styled.div`
	display: flex;
	height: 100vh;
	width: 100%;
	position: relative;
	overflow: hidden;
	${mobile({ display: 'none' })}
`;

const Arrow = styled.div`
	align-items: center;
	background-color: var(--bgc-arrow-slider);
	border-radius: 50%;
	bottom: 0;
	cursor: pointer;
	display: flex;
	height: 50px;
	justify-content: center;
	left: ${(props) => props.direction === 'left' && '10px'};
	margin: auto;
	opacity: 0.5;
	position: absolute;
	right: ${(props) => props.direction === 'right' && '10px'};
	top: 0;
	width: 50px;
	z-index: 2;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transition: all 1.5s ease;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
	height: 100%;
	flex: 1;
`;

const Image = styled.img`
	height: 80%;
`;

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 50px;
`;

const Title = styled.h1`
	font-size: 70px;
	align-self: center;
	@media screen and (max-width: 1024px) {
		font-size: 35px;
	}
`;
const Description = styled.p`
	margin: 50px 0;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
`;
const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	cursor: pointer;
	align-self: end;
	width: 50%;
`;

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const dataLength = sliderItems.length;
	const handleClick = (direction) => {
		if (direction === 'left') {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : dataLength - 1);
		} else if (direction === 'right') {
			setSlideIndex(slideIndex < dataLength - 1 ? slideIndex + 1 : 0);
		}
	};

	return (
		<Container>
			<Arrow direction='left' onClick={() => handleClick('left')}>
				<ArrowBackIosNewOutlinedIcon />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item) => (
					<Slide bg={item.bg} key={item.id}>
						<ImgContainer>
							<Image src={item.img} />
						</ImgContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Description>{item.desc}</Description>
							<Button>SHOW NOW</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>
			<Arrow direction='right' onClick={() => handleClick('right')}>
				<ArrowForwardIosOutlinedIcon />
			</Arrow>
		</Container>
	);
};

export default Slider;
