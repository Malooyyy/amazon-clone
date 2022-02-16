import React, { useContext } from 'react'

import Header from '../components/Header'
import Banner from '../components/Banner'
import Cart from '../components/Cart'
import { MainContext } from '../context'
import Pagination from '../components/Pagination'
import Select from '../components/Select'

const Home = () => {
	const {
		items,
		value,
		setValue,
		addToCart,
		allItems,
		isLoading,
		myCurrentPage,
	} = useContext(MainContext)
	return (
		<>
			{/* Header */}
			<Header value={value} setValue={setValue} allItems={allItems} />
			{/* Main */}
			<main className='main'>
				{/* Banner */}
				<Banner />
				{/* ProductFeed */}
				<div className='sort__panel'>
					<Select
						defaultValue='Sorted'
						options={[{ value: 'H Price' }, { value: 'S Price' }]}
					/>
					<Pagination />
				</div>
				<div className='cart__container'>
					{isLoading
						? [...Array(12)]
						: myCurrentPage
								.filter(title =>
									title.title.toLowerCase().includes(value.toLowerCase())
								)
								.map(item => (
									<Cart
										onPlus={() => addToCart(item)}
										key={item.id}
										title={item.title}
										price={item.price}
										imgUrl={item.image}
									/>
								))}
				</div>
			</main>
		</>
	)
}

export default Home
