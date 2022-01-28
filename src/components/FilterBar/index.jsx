import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const Container = styled.div``;

const Title = styled.h1`
	margin: 20px;
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Filter = styled.div`
	margin: 20px;
	${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;
	${mobile({ marginRight: '0px' })}
`;

const Select = styled.select`
	padding: 10px;
	margin-right: 20px;
	${mobile({ margin: '10px 0px' })}
`;
const Option = styled.option``;
const FilterBar = ({ handleFilter, handleSort }) => {
	return (
		<div>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products:</FilterText>
					<Select name='color' onChange={handleFilter}>
						<Option >color</Option>
						<Option>white</Option>
						<Option>black</Option>
						<Option>red</Option>
						<Option>blue</Option>
						<Option>yellow</Option>
						<Option>green</Option>
					</Select>
					<Select name='size' onChange={handleFilter}>
						<Option >size</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XS</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products:</FilterText>
					<Select onChange={handleSort}>
						<Option value='newest'>Newest</Option>
						<Option value='asc'>Price (asc)</Option>
						<Option value='desc'>Price (desc)</Option>
					</Select>
				</Filter>
			</FilterContainer>
		</div>
	);
};

export default FilterBar;
