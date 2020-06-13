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
		src: '/images/gallery/2.jpg',
		thumbnail: '/images/gallery/thumbnails/2.jpg',
		thumbnailWidth: 320,
        thumbnailHeight: 174,
	},
	{
		src: '/images/gallery/3.jpg',
		thumbnail: '/images/gallery/thumbnails/3.jpg',
		thumbnailWidth: 320,
        thumbnailHeight: 116,
	},
	{
		src: '/images/gallery/4.jpg',
		thumbnail: '/images/gallery/thumbnails/4.jpg',
        thumbnailWidth: 320,
        thumbnailHeight: 212
	},
	// 2. row
	{
		src: '/images/gallery/6.jpg',
		thumbnail: '/images/gallery/thumbnails/6.jpg',
		thumbnailWidth: 320,
        thumbnailHeight: 174,
	},
	{
		src: '/images/gallery/8.jpg',
		thumbnail: '/images/gallery/thumbnails/8.jpg',
		thumbnailWidth: 320,
        thumbnailHeight: 116,
	},
	{
		src: '/images/gallery/9.jpg',
		thumbnail: '/images/gallery/thumbnails/9.jpg',
		thumbnailWidth: 320,
        thumbnailHeight: 116,
	},
	// 3. row
	{
		src: '/images/gallery/16.jpg',
		thumbnail: '/images/gallery/thumbnails/16.jpg',
		thumbnailWidth: 320,
        thumbnailHeight: 174,
	},
	{
		src: '/images/gallery/12.jpg',
		thumbnail: '/images/gallery/thumbnails/12.jpg',
		thumbnailWidth: 320,
        thumbnailHeight: 116,
	},
	{
		src: '/images/gallery/13.jpg',
		thumbnail: '/images/gallery/thumbnails/13.jpg',
		thumbnailWidth: 320,
        thumbnailHeight: 116,
	},
	{
		src: '/images/gallery/17.jpg',
		thumbnail: '/images/gallery/thumbnails/17.jpg',
		thumbnailWidth: 320,
        thumbnailHeight: 174,
	},
	// 4. row
	{
		src: '/images/gallery/11.jpg',
		thumbnail: '/images/gallery/thumbnails/11.jpg',
		thumbnailWidth: 320,
        thumbnailHeight: 116,
	},
	{
		src: '/images/gallery/10.jpg',
		thumbnail: '/images/gallery/thumbnails/10.jpg',
		thumbnailWidth: 320,
        thumbnailHeight: 116,
	},

	{
		src: '/images/gallery/14.jpg',
		thumbnail: '/images/gallery/thumbnails/14.jpg',
		thumbnailWidth: 320,
        thumbnailHeight: 174,
	},
	// 5. row
	{
		src: '/images/gallery/1.jpg',
		thumbnail: '/images/gallery/thumbnails/1.jpg',
		thumbnailWidth: 320,
        thumbnailHeight: 116,
	},
	{
		src: '/images/gallery/7.jpg',
		thumbnail: '/images/gallery/thumbnails/7.jpg',
		thumbnailWidth: 320,
        thumbnailHeight: 116,
	},
	{
		src: '/images/gallery/5.jpg',
		thumbnail: '/images/gallery/thumbnails/5.jpg',
		thumbnailWidth: 320,
        thumbnailHeight: 174,
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
