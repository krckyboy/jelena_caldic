import React, { useEffect } from 'react'
import styled from 'styled-components'
import SubHeading from '../components/SubHeading'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	overflow: hidden;
    position: relative;
    
	p {
		z-index: 5;
		font-size: 16px;
		line-height: 26px;
		flex: 1 0;

		@media (min-width: 800px) {
			font-size: 18px;
		}

		@media (min-width: 900px) {
			order: 1;
			flex: 30% 0;
			padding-bottom: 0;
			margin-right: 24px;

			&:nth-child(2) {
				order: 2;
				margin-right: 48px;
			}
		}
	}

	p:not(:last-child) {
		margin-bottom: 32px;
	}
`

const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 900px) {
		flex-direction: row;
	}
`

const Background = styled.div`
	position: absolute;
	background-color: #e5cf87;
	left: 0;
	top: 0;
	content: '';
	height: 100%;
	z-index: 0;
	margin-bottom: 15px;
`

const ImageContainer = styled.div`
	margin-bottom: 82px;
	position: relative;
	width: 100%;
	max-width: 400px;
	flex: 1;

	@media (min-width: 900px) {
		margin: 0 auto;
		margin-bottom: 0;
		order: 3;
		transform: translateY(-30%);
	}

	img {
		max-width: 100%;
		object-fit: cover;

		&:nth-child(1) {
			margin-left: auto;
			display: block;
			max-width: 80%;
			/* min-height: 400px; */

			@media (min-width: 900px) {
				max-width: 90%;
			}
		}

		&:nth-child(2) {
			position: absolute;
			z-index: 2;
			left: 0;
			bottom: -50px;
			max-width: 50%;

			@media (min-width: 1440px) {
				left: -50px;
			}
		}
	}
`

export default () => {
	useEffect(() => {
		AOS.init({ duration: 2000 })
	})
	return (
		<section className='topMargin' style={{ position: 'relative' }}>
			<Background data-aos='fullWidthLeftToRight' />
			<Container className='topBottomPadding'>
				<div className='sideMargin'>
					<SubHeading style={{ backgroundColor: '#D6AC1D', zIndex: 5 }}>
						O meni
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
						<ImageContainer>
							<img src='/images/jelena1.jpg' alt='Jelena Ćaldić' />
							<img src='/images/jelena2.jpg' alt='Jelena Ćaldić' />
						</ImageContainer>
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
