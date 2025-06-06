import React, { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import FeaturedProducts from "../components/FeaturedProducts";
import { useProductStore } from "../stores/useProductStore";

const categories = [
	{ href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
	{ href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
	{ href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
	{ href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
	{ href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
	{ href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden bg-gray-900'>

			{/* Hero Section */}
			<section className='relative h-[75vh] bg-black'>
				<img
					src='/HPimage.jpg'
					alt='Hero'
					className='absolute inset-0 w-full h-full object-cover opacity-30'
				/>
				<div className='relative z-10 flex flex-col justify-center h-full px-6 max-w-6xl mx-auto'>
					<h1 className='text-5xl sm:text-6xl font-bold text-white mb-4'>
						Level Up Your Look
					</h1>
					<p className='text-xl text-gray-300 mb-6 max-w-2xl'>
						Uncover modern style essentials curated just for you. Your wardrobe transformation starts here.
					</p>
					<a
						href='#categories'
						className='px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full w-fit'
					>
						Shop Now
					</a>
				</div>
			</section>

			{/* Categories Grid */}
			<section id='categories' className='relative -mt-32 z-20 px-6'>
				<div className='bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-7xl mx-auto'>
					<h2 className='text-3xl sm:text-4xl font-bold text-cyan-300 text-center mb-8'>
						Explore Our Categories
					</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
						{categories.map((category) => (
							<CategoryItem category={category} key={category.name} />
						))}
					</div>
				</div>
			</section>

			{/* Featured Products */}
			<section className='mt-20 px-6 max-w-7xl mx-auto'>
				{!isLoading && products.length > 0 && (
					<FeaturedProducts featuredProducts={products} />
				)}
			</section>
		</div>
	);
};

export default HomePage;
