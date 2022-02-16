import Header from '../../components/Header'
import styles from './Basket.module.scss'
import BasketCart from '../../components/BasketCart'
import { useContext } from 'react'
import { MainContext } from '../../context'

const Basket = () => {
	const { cartItems, allPrice, allItems, removeItem } = useContext(MainContext)
	return (
		<>
			<Header allItems={allItems} />
			<div className={styles.main}>
				<div className={styles.basket__cart}>
					<div className={styles.title}>
						<h3>Shopping Cart</h3>
						<p>Diselect all items</p>
						<span>Price</span>
						<div className={styles.line}></div>
					</div>

					{cartItems.map(cartItem => (
						<BasketCart
							removeItem={() => removeItem(cartItem.id)}
							title={cartItem.title}
							price={cartItem.price}
							imgUrl={cartItem.image}
							key={cartItem.id}
						/>
					))}
					<div className={styles.bottom}>
						<div className={styles.line}></div>
						<h3>
							Subtotal ({allItems} item): <span>${allPrice}</span>
						</h3>
					</div>
				</div>
				<div className={styles.subtotal}>
					<h3>
						Subtotal ({allItems} items): <span>${allPrice}</span>
					</h3>
					<div className={styles.checkbox}>
						<input type='checkbox' />
						<p>This order contains a gift</p>
					</div>
					<button>Proceed to check out</button>
				</div>
			</div>

			<div className={styles.items}>
				<h3>Your Items</h3>
				<div className={styles.items__subtitle}>
					<p>No items saved for later</p>
					<p>Buy it again</p>
				</div>

				<div className={styles.line}></div>
			</div>
		</>
	)
}

export default Basket
