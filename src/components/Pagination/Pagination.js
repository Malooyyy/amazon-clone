import React, { useContext } from 'react'
import { MainContext } from '../../context'
import styles from './Pagination.module.scss'

const Pagination = () => {
	const { itemsPerPage, totalItems, paginate } = useContext(MainContext)
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i)
	}

	return (
		<div className={styles.pagination__wrapper}>
			{pageNumbers.map(number => (
				<p
					onClick={() => paginate(number)}
					key={number}
					className={styles.pagination__item}
				>
					{number}
				</p>
			))}
		</div>
	)
}

export default Pagination
