// import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
// import { useState } from 'react';
// import styled from 'styled-components';
// import { sliderItems } from '../data';
// import { mobile } from '../responsive';
import Rating from '@mui/material/Rating';
import AddToCartBtn from './Buttons/AddToCartBtn';
import AddToWishBtn from './Buttons/AddToWishBtn';
import Steper from '../Steper';
import  {featuredProducts} from '../../data';
import './styles.css';

const Slider = () => {
	//   const [slideIndex, setSlideIndex] = useState(0);
	/* const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }; */

	return (
		<section>
			<div className='slider container'>
				<div className='slider__card'>
					<div className='slider__title'>
						<span>{featuredProducts[0].title}</span>
					</div>
					<div className='slider__description'>
						<p>{featuredProducts[0].description}</p>
					</div>
					<div className='slider__rating'>
						<Rating name='read-only' value={featuredProducts[0].stars} readOnly />
					</div>
					<div className='slider__price'>
						<span>$</span>
						<span>{featuredProducts[0].price}</span>
					</div>
					<div className='slider__buttons'>
						<AddToCartBtn text='ADD TO CART' cssUtils='h-100p' wIcon />
						<AddToWishBtn wIcon />
					</div>
					<div className='slider__image'>
						<img src={featuredProducts[0].imgUrl} alt='product' />
					</div>
					<div className='slider__options'>
						<Steper />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Slider;
