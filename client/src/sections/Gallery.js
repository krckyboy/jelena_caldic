import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import styled from 'styled-components'
import SubHeading from '../components/SubHeading'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Container = styled.div`
	background-color: transparent;
	max-width: 1440px;
	margin: 0 auto;

	img {
		object-fit: cover;
		object-position: top;
	}
`

const images = [
	{
		src: '/images/gallery/9-min.webp',
	},
	{
		src: '/images/gallery/3-min.webp',
	},
	{
		src: '/images/gallery/4-min.webp',
	},
	{
		src: '/images/gallery/2-min.webp',
	},
	{
		src: '/images/gallery/8-min.webp',
	},
	{
		src: '/images/gallery/11-min.jpg',
	},
]

// << Images phone
const imagesMappedCarousel = images.map((i, index) => (
	<img key={index * Math.random()} src={i.src} alt={i.alt} />
))

// Hide when certain screen width
const CarouselStyled = styled(Carousel)`
	.slider-wrapper {
		max-height: 60vh;
		min-height: 350px;
	}

	@media (min-width: 900px) {
		display: none;
	}
`

function RadoviCarousel() {
	return (
		<CarouselStyled
			style={styles}
			showThumbs={false}
			showStatus={false}
			swipeScrollTolerance={50}
			showArrows={false}
			autoPlay={true}
		>
			{imagesMappedCarousel.map((i, index) => (
				<div key={index * Math.random()}>{i}</div>
			))}
		</CarouselStyled>
	)
}
// Images phone >>

// << Images desktop
const GalleryDesktop = styled.div`
	display: none;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: repeat(5, 10vw);
	grid-gap: 32px;
	width: 100%;
	max-width: initial;

	@media (min-width: 900px) {
		display: grid;
	}
`

const ImgDesktop = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const imagesMappedDesktop = images.map((i, index) => (
	<figure
		key={index * Math.random()}
		className={`gallery__item gallery__item--${index + 1}`}
	>
		<ImgDesktop src={i.src} alt={i.alt} />
	</figure>
))
// Images desktop >>

const GalleryContainer = styled.div`
	display: block;
	position: relative;
	width: 100%;
	overflow: hidden;

	img {
		object-position: top;
	}

	iframe {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0;
	}

	&::before {
		display: block;
		content: '';
		/* padding-top: 56.25%; */
	}
`

const Spinner = styled.img`
	display: ${(props) => props.display};
	margin: 0 auto;
`

export default () => {
	const [galleryHeight, setGalleryHeight] = useState(0)
	const [galleryOpacity, setGalleryOpacity] = useState(0)

	useEffect(() => {
		AOS.init({ duration: 1000 })
	})

	const timeout = setTimeout(() => {
		const height = document.getElementById('gallery').clientHeight

		if (height !== galleryHeight) {
			setGalleryHeight(height)
		}
	}, 1000)

	useEffect(() => {
		if (galleryHeight > 0) {
			clearTimeout(timeout)
		}

		setGalleryOpacity(1)
	}, [galleryHeight, timeout])

	return (
		<section className='topMargin' data-aos='zoom-in-right'>
			<Container className='topBottomPadding' style={{ paddingTop: 0 }}>
				<div className='sideMargin'>
					<SubHeading style={{ backgroundColor: '#95200D' }}>
						Galerija
					</SubHeading>
					<GalleryContainer id={'gallery'}>
						<Spinner
							src='/images/spinner.svg'
							alt='Spinner'
							display={galleryOpacity === 0 ? 'block' : 'none'}
						/>
						<RadoviCarousel autoPlay={true} />
						<GalleryDesktop>{imagesMappedDesktop}</GalleryDesktop>
					</GalleryContainer>
				</div>
			</Container>
		</section>
	)
}
