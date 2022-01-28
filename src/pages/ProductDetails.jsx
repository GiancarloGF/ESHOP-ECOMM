// import { Add, Remove } from "@material-ui/icons";
// import styled from "styled-components";
// import Announcement from "../components/Announcement";
// import Footer from "../components/Footer";
import Navbar from '../components/Navbar';
import ProductDetail from '../components/ProductDetail';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import Newsletter from "../components/Newsletter";
// import { mobile } from "../responsive";
// import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { publicRequest } from "../requestMethods";
// import { addProduct } from "../redux/cartRedux";
// import { useDispatch } from "react-redux";

const Product = () => {
	// const location = useLocation();
	// const id = location.pathname.split("/")[2];
	// const [product, setProduct] = useState({});
	// const [quantity, setQuantity] = useState(1);
	// const [color, setColor] = useState("");
	// const [size, setSize] = useState("");
	// const dispatch = useDispatch();

	/* useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]); */

	/* const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  }; */

	/* const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  }; */
	return (
		<>
			<Navbar />
			<section className='m-0'>
				<div className='container'>
					<KeyboardBackspaceIcon />
				</div>
			</section>
			<ProductDetail />
		</>
	);
};

export default Product;
