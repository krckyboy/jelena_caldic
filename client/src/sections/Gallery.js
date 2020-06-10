import React, { useEffect } from 'react'
import styled from 'styled-components'
import SubHeading from '../components/SubHeading'
import Gallery from 'react-grid-gallery'
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

const IMAGES = [
	{
		src: '/images/jelena1.jpg',
		thumbnail: '/images/jelena1.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 174,
	},
	{
		src: '/images/jelena2.jpg',
		thumbnail: '/images/jelena2.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
	},

	{
		src: '/images/jelena3.jpg',
		thumbnail: '/images/jelena3.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
	},
	{
		src: '/images/jelena1.jpg',
		thumbnail: '/images/jelena1.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 174,
	},
	{
		src: '/images/jelena2.jpg',
		thumbnail: '/images/jelena2.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
	},

	{
		src: '/images/jelena3.jpg',
		thumbnail: '/images/jelena3.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
	},
	{
		src: '/images/jelena1.jpg',
		thumbnail: '/images/jelena1.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 174,
	},
	{
		src: '/images/jelena2.jpg',
		thumbnail: '/images/jelena2.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
	},

	{
		src: '/images/jelena3.jpg',
		thumbnail: '/images/jelena3.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
	},
	{
		src: '/images/jelena1.jpg',
		thumbnail: '/images/jelena1.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 174,
	},
	{
		src: '/images/jelena2.jpg',
		thumbnail: '/images/jelena2.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
	},

	{
		src: '/images/jelena3.jpg',
		thumbnail: '/images/jelena3.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
	},
]

const GalleryContainer = styled.div`
	display: block;
	position: relative;
	width: 100%;
	overflow: hidden;

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

export default () => {
	useEffect(() => {
		AOS.init({ duration: 1000 })
	})
	return (
		<section className='topMargin' data-aos='zoom-in-right'>
			<Container className='topBottomPadding' style={{ paddingTop: 0 }}>
				<div className='sideMargin'>
					<SubHeading style={{ backgroundColor: '#95200D' }}>
						Galerija
					</SubHeading>
					<GalleryContainer>
						<Gallery images={IMAGES} />
					</GalleryContainer>
				</div>
			</Container>
		</section>
	)
}
