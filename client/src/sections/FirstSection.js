import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
	height: 100vh;
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.53), rgba(0, 0, 0, 0.53)),
		url('/images/rsz_microphone (1).jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	color: #f9f9f9;
	position: relative;
	padding-top: 24px;

	h1 {
		font-family: Shadows Into Light Two;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		width: 100%;
		top: 40%;
		left: 50%;
		transform: translateX(-50%);

		@media (orientation: landscape) {
			top: 35%;
		}

		div {
			position: relative;
		}

		p {
			font-size: 48px;
			display: block;
			text-align: center;
			margin: 0 auto;

			@media (min-width: 800px) {
				font-size: 48px;
			}

			@media (min-width: 800px) {
				font-size: 96px;
			}

			@media (max-height: 500px) {
				font-size: 32px;
			}

			@media (min-width: 1440px) {
				font-size: 140px;
			}

			&::after {
				height: 8px;
				display: block;
				width: 100%;
				background: #e79b70;
				content: '';
			}
		}

		span {
			font-size: 24px;
			position: absolute;
			bottom: -5%;
			transform: translateY(100%);
			right: 0;

			@media (min-width: 800px) {
				font-size: 36px;
			}

			@media (max-height: 500px) {
				font-size: 16px;
			}
		}
	}
`

const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	overflow: hidden;
	position: relative;
	height: 100vh;

	padding-top: 0;
	padding-bottom: 16px;

	@media (min-width: 800px) {
		padding-bottom: 24px;
	}
`

const Logo = styled.a`
	font-family: Shadows Into Light Two;
	font-size: 24px;
	line-height: 58px;
	color: #e79b70;
	height: 72px;
	justify-self: flex-start;

	@media (min-width: 800px) {
		font-size: 32px;
	}

	@media (max-height: 500px) {
		font-size: 24px;
	}
`

const SocialContainer = styled.div`
	position: absolute;
	width: 100%;
	bottom: 7%;
	left: 50%;
	transform: translateX(-50%);

	@media (orientation: landscape) {
		bottom: 10%;
	}

	div {
		text-align: center;

		a:not(:last-child) {
			margin-right: 16px;
		}
	}

	img {
		@media (max-height: 500px) {
			height: 40px;
		}
	}
`

export default () => {
	return (
		<Section className='sideMargin'>
			<Container>
				<Logo href='/'>JELENA ĆALDIĆ</Logo>
				<h1>
					<div>
						<p>Jelena Ćaldić</p>
						<span>vokalni solista</span>
					</div>
				</h1>
				<SocialContainer>
					<div>
						<a
							href='https://www.facebook.com/jelena.caldic.9'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img src='/icons/facebook.svg' alt='Facebook' />
						</a>
						<a
							href='https://www.instagram.com/jelenacaldicofficialprofile/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img src='/icons/instagram.svg' alt='Instagram' />
						</a>
					</div>
				</SocialContainer>
			</Container>
		</Section>
	)
}
