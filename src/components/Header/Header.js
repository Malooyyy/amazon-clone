/* eslint-disable jsx-a11y/alt-text */
// { Lib }
import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
} from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
// { Components }

// { Styles }
import styles from './Header.module.scss'

const Header = ({ value, setValue, allItems }) => {
	return (
		<header className={styles.header}>
			{/* Top Nav */}
			<div className={styles.header__top}>
				<Link to={'/'}>
					<div className={styles.top__nav}>
						<img
							width={150}
							height={40}
							src='https://i.ibb.co/CQJZ9Ms/amazon-logo.png'
							alt='Amazon Logo'
							className={styles.fill}
						/>
					</div>
				</Link>
				{/* Search Bar */}
				<div className={styles.search__bar}>
					<input value={value} onChange={e => setValue(e.target.value)} />
					<SearchIcon />
				</div>
				{/* { Top Right } */}
				<div className={styles.top__right}>
					<div className={styles.right__left}>
						<p>Hello, Sing in</p>
						<p className={styles.p__t}>Account & Lists</p>
					</div>
					<div className={styles.right__middle}>
						<p>Returns</p>
						<p className={styles.p__t}>& Orders</p>
					</div>
					<Link to={'basket'}>
						<div className={styles.right__right}>
							<span>{allItems}</span>
							<ShoppingCartIcon />
							<p className={styles.p__t}>Cart</p>
						</div>
					</Link>
				</div>
			</div>
			{/* Bottom Nav */}
			<div className={styles.bottom__nav}>
				<p>
					<MenuIcon />
					All
				</p>
				<p className={`link ${styles.details}`}>Today's Deals</p>
				<p className={`link ${styles.details}`}>Buy Again</p>
				<p className={`link ${styles.details}`}>Customer Service</p>
				<p className={`link ${styles.details}`}>Customer Service</p>
				<p className={`link ${styles.details} cost`}>Browsing History</p>
				<p className={`link ${styles.details} cost`}>Gift Cards</p>
				<p className={`link ${styles.details} cost`}>
					Qwerty-Night <span>'s Amazon.com</span>
				</p>
				<p className={`link ${styles.details} cost`}>Registry</p>
				<p className={`link ${styles.details} cost`}>Sell</p>
			</div>
		</header>
	)
}

export default Header
