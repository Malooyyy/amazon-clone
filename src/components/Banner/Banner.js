// { Lib }
import { Carousel } from 'react-responsive-carousel'
// { Components }

// { Style }
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from './Banner.module.scss'

const Banner = () => {
	return (
		<div className={styles.banner__wrapper}>
			<div className={styles.top__carousel} />
			<Carousel
				autoPlay
				infiniteLoop
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				interval={5000}
			>
				<div>
					<img
						loading='lazy'
						src='https://i.ibb.co/mRq08rf/baner1.jpg'
						alt='Banner One'
					/>
				</div>
				<div>
					<img
						loading='lazy'
						src='https://i.ibb.co/zN7TSZY/baner2.jpg'
						alt='Banner Two'
					/>
				</div>
				<div>
					<img
						loading='lazy'
						src='https://i.ibb.co/sgxpbBy/baner3.jpg'
						alt='Banner Three'
					/>
				</div>
				<div>
					<img
						loading='lazy'
						src='https://i.ibb.co/0hvQKk9/baner4.jpg'
						alt='Banner Four'
					/>
				</div>
			</Carousel>
		</div>
	)
}

export default Banner
