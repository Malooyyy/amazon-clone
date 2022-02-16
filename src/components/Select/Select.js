import React, { useContext } from 'react'
import { MainContext } from '../../context'
import styles from './Select.module.scss'

const Select = ({ options, defaultValue }) => {
	const { sortItems } = useContext(MainContext)
	return (
		<select
			onChange={event => sortItems(event.target.value)}
			className={styles.select}
		>
			<option disabled={true} value=''>
				{defaultValue}
			</option>
			{options.map(option => (
				<option key={option.value} value={option.value}>
					{option.value}
				</option>
			))}
		</select>
	)
}

export default Select
