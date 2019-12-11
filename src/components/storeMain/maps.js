import React from 'react';
import ProductCard from '../product-card';
import productArr from '../product-arr';

//Map through product array to create product cards of each
export const ProductMap = productArr.map((product) => (
	<ProductCard
		key={product.id}
		name={product.name}
		category={product.category}
		price={product.price}
		salePrice={product.salePrice}
		colors={product.colors}
		sizes={product.sizes}
		img={product.img}
	/>
));
//Map through filtered product array categories by searching for a specific substring in each category value, and creating product cards of remaining objects
export const MensMap = productArr
	.filter((product) => {
		return product.category.includes("Men's");
	})
	.map((product) => (
		<ProductCard
			key={product.id}
			name={product.name}
			category={product.category}
			price={product.price}
			salePrice={product.salePrice}
			colors={product.colors}
			sizes={product.sizes}
			img={product.img}
		/>
	));
export const WomensMap = productArr
	.filter((product) => {
		return product.category.includes("Women's");
	})
	.map((product) => (
		<ProductCard
			key={product.id}
			name={product.name}
			category={product.category}
			price={product.price}
			salePrice={product.salePrice}
			colors={product.colors}
			sizes={product.sizes}
			img={product.img}
		/>
	));
export const OxfordsMap = productArr
	.filter((product) => {
		return product.category.includes("Men's Dress Shoes");
	})
	.map((product) => (
		<ProductCard
			key={product.id}
			name={product.name}
			category={product.category}
			price={product.price}
			salePrice={product.salePrice}
			colors={product.colors}
			sizes={product.sizes}
			img={product.img}
		/>
	));
export const BootsMap = productArr
	.filter((product) => {
		return product.category.includes('Boots');
	})
	.map((product) => (
		<ProductCard
			key={product.id}
			name={product.name}
			category={product.category}
			price={product.price}
			salePrice={product.salePrice}
			colors={product.colors}
			sizes={product.sizes}
			img={product.img}
		/>
	));
export const ChukkasMap = productArr
	.filter((product) => {
		return product.category.includes('Chukka');
	})
	.map((product) => (
		<ProductCard
			key={product.id}
			name={product.name}
			category={product.category}
			price={product.price}
			salePrice={product.salePrice}
			colors={product.colors}
			sizes={product.sizes}
			img={product.img}
		/>
	));
export const HeelBootsMap = productArr
	.filter((product) => {
		return product.category.includes('Heel');
	})
	.map((product) => (
		<ProductCard
			key={product.id}
			name={product.name}
			category={product.category}
			price={product.price}
			salePrice={product.salePrice}
			colors={product.colors}
			sizes={product.sizes}
			img={product.img}
		/>
	));