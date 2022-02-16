import { useEffect, useState } from 'react'
import axios from 'axios'
import { MainContext } from './context'

import { Routes, Route } from 'react-router-dom'
import Basket from './Pages/Basket'
import Home from './Pages/Home'

const App = () => {
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [value, setValue] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage] = useState(3)
	const [selectedSort, setSelectedSort] = useState('')

	const allPrice = cartItems.reduce(
		(currentValue, nextValue) => (currentValue += nextValue.price),
		0
	)

	const allItems = cartItems.length

	useEffect(() => {
		async function getRender() {
			try {
				const myItems = await axios.get(
					'https://61f75da92e1d7e0017fd70aa.mockapi.io/items'
				)
				const myCart = await axios.get(
					'https://61f75da92e1d7e0017fd70aa.mockapi.io/cart'
				)

				setItems(myItems.data)
				setCartItems(myCart.data)
			} catch (error) {
				alert(`Ошибка ${error}`)
			}
		}

		getRender()
	}, [])

	const addToCart = obj => {
		axios.post('https://61f75da92e1d7e0017fd70aa.mockapi.io/cart', obj)
		setCartItems(prev => [...prev, obj])
	}

	const removeItem = id => {
		axios.delete(`https://61f75da92e1d7e0017fd70aa.mockapi.io/cart/${id}`)
		setCartItems(prev => prev.filter(item => item.id != id))
	}

	const sortItems = itemValue => {
		setSelectedSort(itemValue)
		setItems([...items].sort((a, b) => a.price - b.price))
	}

	const totalItems = items.length
	const lastItemsIndex = currentPage * itemsPerPage
	const firstItemsIndex = lastItemsIndex - itemsPerPage
	const myCurrentPage = items.slice(firstItemsIndex, lastItemsIndex)

	const paginate = pageNumber => setCurrentPage(pageNumber)
	return (
		<>
			<MainContext.Provider
				value={{
					items,
					value,
					allItems,
					setValue,
					addToCart,
					removeItem,
					allItems,
					cartItems,
					allPrice,
					isLoading,
					itemsPerPage,
					totalItems,
					myCurrentPage,
					paginate,
					selectedSort,
					setSelectedSort,
					sortItems,
				}}
			>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='basket' element={<Basket />} />
				</Routes>
			</MainContext.Provider>
		</>
	)
}

export default App
