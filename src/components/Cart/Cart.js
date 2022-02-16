import { useContext } from 'react'
import ContentLoader from 'react-content-loader'
import { MainContext } from '../../context'
import styles from './Cart.module.scss'

const Cart = ({ title, price, imgUrl, onPlus }) => {
	const { isLoading } = useContext(MainContext)
	return (
		<>
			{isLoading ? (
				<ContentLoader
					speed={2}
					width={400}
					height={460}
					viewBox='0 0 400 460'
					backgroundColor='#000'
					foregroundColor='#000'
				>
					<rect x='0' y='0' rx='2' ry='2' width='296' height='400' />
				</ContentLoader>
			) : (
				<div className={styles.cart__wrapper}>
					<div className={styles.cart__top}>
						<img src={imgUrl} alt='Cart Item' />
					</div>
					<div className={styles.cart__bottom}>
						<h3 className={styles.cart__title}>{title}</h3>
						<p className={styles.cart__price}>${price}</p>
						<button onClick={onPlus} className={styles.cart__add}>
							Add to Card
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default Cart
