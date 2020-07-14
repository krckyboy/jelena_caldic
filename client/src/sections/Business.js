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
		font-weight: 500;
		font-size: 16px;
		line-height: 16px;
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
				margin-right: 48px;
			}
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
	/* background-color: #99b3cb; */
	background-color: #c5ced6;
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

	@media (min-width: 1350px) {
		justify-content: space-between;
		flex-direction: row;
	}
`

const VideoContainer = styled.div`
	margin-bottom: 32px;
	width: 100%;
	max-width: 400px;
	order: 2;

	flex: 1;

	@media (min-width: 1350px) {
		margin: 0 auto;
		max-width: 450px;

		margin-bottom: -55px;
		transform: translateY(-20%);
	}
	img {
		width: 100%;
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
							Svakodnevno unapređujući inventivnost, sa ciljem da svaki sledeći
							nastup bude profesionalniji i da publika bude zadovoljnija,
							nedavno sam okupila ekipu mladih i ozbiljnih instrumentalista koji
							su zaduženi zajedno sa mnom, da Vam ulepšaju svaki svečani povod.<br /><br />
							Do konačnog formiranja i plodotvornosti benda, na raspolaganju sam
							kao <strong>solo izvođač</strong>.
						</p>
						<VideoContainer>
							<img src='/images/rsz_jelena3-min.jpg' alt='Jelena Ćaldić' />
						</VideoContainer>
					</FlexContainer>
				</div>
			</Container>
		</section>
	)
}
