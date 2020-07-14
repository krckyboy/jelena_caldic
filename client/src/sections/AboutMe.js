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
		font-weight: 500;
		z-index: 5;
		font-size: 16px;
		flex: 1 0;
		line-height: 170%;
		letter-spacing: 0.1rem;

		@media (min-width: 900px) {
			font-size: 24px;
			order: 1;
			flex: 50% 0;
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

	@media (min-width: 1350px) {
		flex-direction: row;
		justify-content: space-between;
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
	max-width: 450px;
	flex: 1;
	order: 3;

	@media (min-width: 1350px) {
		margin: 0 auto;
		margin-bottom: 0;
		transform: translateY(-30%);
	}

	img {
		max-width: 100%;
		object-fit: cover;

		&:nth-child(1) {
			margin-left: auto;
			display: block;
			max-width: 80%;

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
							Zdravo, ja sam Jelena Ćaldić i ja sam <strong>vokalni solista</strong>. Rođena sam
							16. oktobra u Užicu i potičem iz muzičke porodice. Pevanjem se
							bavim od 2012. godine i ljubav prema muzici je prerasla u moje
							profesionalno zanimanje. Takođe, pohađala sam raketnu mehatroniku
							na Vazduhoplovnoj Akademiji u Beogradu. <br /><br />Moji hobiji su:
							slikarstvo, pisanje pesama i briga o cveću. Svoje pevanje sam
							orijentisala na izvođenje narodne muzike, ali pored toga repertoar
							je raznovrstan folk, turbo-folk i zabavna muzika.
						</p>
						<ImageContainer>
							<img src='/images/jelena1-min.jpg' alt='Jelena Ćaldić' />
							<img src='/images/jelena2resized-min.jpg' alt='Jelena Ćaldić' />
						</ImageContainer>
					</FlexContainer>
				</div>
			</Container>
		</section>
	)
}
