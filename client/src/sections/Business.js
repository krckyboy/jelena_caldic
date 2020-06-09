import React, { useEffect } from 'react'
import styled from 'styled-components'
import SubHeading from '../components/SubHeading'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	z-index: 5;
	position: relative;

	p {
		font-size: 16px;
		line-height: 26px;

		@media (min-width: 800px) {
			font-size: 18px;
		}
	}

	p:not(:last-child) {
		margin-bottom: 32px;
	}
`

const Background = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	content: '';
	height: 100%;
	width: 100%;
	margin-bottom: 15px;
	/* background-color: #99b3cb; */
	background-color: #f2f2f2;
`

const PlainBackground = styled.div`
	position: absolute;
	background-color: #99b3cb;
	/* background-color: blue; */
	left: 0;
	top: 0;
	content: '';
	height: 100%;
	width: 100%;
	z-index: 0;
	margin-bottom: 15px;
`

const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 900px) {
		flex-direction: row;
	}
`

const VideoContainer = styled.div`
	margin-bottom: 32px;
	width: 100%;

	img {
		width: 100%;
		max-width: 800px;
	}
`

export default () => {
	useEffect(() => {
		AOS.init({ duration: 2000 })
	})
	return (
		<section className='topMargin' style={{ position: 'relative' }}>
			<PlainBackground />
			<Background data-aos='fullWidthRightToLeft' />
			<Container className='topBottomPadding'>
				<div className='sideMargin'>
					<SubHeading style={{ backgroundColor: '#527799' }}>
						Saradnja
					</SubHeading>
					<FlexContainer>
						<p>
							Quas molestias excepturi sint occaecati cupiditate non provident,
							similique sunt in culpa qui officia deserunt mollitia animi, id
							est laborum et dolorum fuga. Et harum quidem rerum facilis est et
							expedita distinctio. quas molestias excepturi sint occaecati
							cupiditate non provident, similique sunt in culpa qui officia
							deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
							quidem rerum facilis est et expedita distinctio.
						</p>
						<VideoContainer>
							<img src='/images/jelena3.jpg' alt='Jelena Ćaldić' />
						</VideoContainer>
						<p>
							At vero eos et accusamus et iusto odio dignissimos ducimus qui
							blanditiis praesentium voluptatum deleniti atque corrupti quos
							dolores et quas molestias excepturi sint occaecati cupiditate non
							provident, similique sunt in culpa qui officia deserunt mollitia
							animi, id est laborum et dolorum fuga. Et harum quidem rerum
							facilis est et expedita distinctio.
						</p>
					</FlexContainer>
				</div>
			</Container>
		</section>
	)
}
