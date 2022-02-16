import React from 'react'
import styles from '../../Pages/Basket/Basket.module.scss'
const BasketCart = ({ title, price, imgUrl, removeItem }) => {
	return (
		<div className={styles.shopping_card}>
			<div className={styles.subtitle}>
				<div className={styles.subtitle__left}>
					<img src={imgUrl} alt='' />
				</div>
				<div className={styles.subtitle__right}>
					<div className={styles.subtitle__price}>
						<h3>{title} </h3>
						<span>${price}</span>
					</div>

					<p className={styles.raiting}>
						#1 Best Seller <span> in Women's Sweatshirts</span>
					</p>
					<p className={styles.stock}>In Stock</p>
					<p className={styles.gift}>
						Gift options not available.Gift options not available.{' '}
						<span>Learn more</span>
					</p>
					<p className={styles.quality}>
						Size: <span>Medium</span>
					</p>
					<p className={styles.quality}>
						Color <span>Navy Heather</span>
					</p>
					<button className={styles.quantity}>Qty:1</button>
					<button onClick={removeItem} className={styles.edit}>
						Delete
					</button>
					<button className={styles.edit}>Save for later</button>
					<button className={styles.edit}>Compare with similar items</button>
				</div>
			</div>
			<div className={styles.line}></div>
		</div>
	)
}

export default BasketCart
