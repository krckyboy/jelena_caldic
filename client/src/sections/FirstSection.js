import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
	height: 100vh;
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.53), rgba(0, 0, 0, 0.53)),
		url('/images/rsz_microphone.jpg');
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

		div {
			position: relative;
		}

		p {
			font-size: 6.4rem;
			display: block;
			text-align: center;
			margin: 0 auto;

			&::after {
				height: 8px;
				display: block;
				width: 100%;
				background: #e79b70;
				content: '';
			}
		}

		span {
			font-size: 2.4rem;
			position: absolute;
			bottom: -5%;
			transform: translateY(100%);
			right: 0;
			/* identical to box height */
		}
	}
`

const Logo = styled.a`
	font-family: Shadows Into Light Two;
	font-size: 36px;
	line-height: 58px;
	color: #e79b70;
	height: 72px;
	justify-self: flex-start;
`

const SocialContainer = styled.div`
	position: absolute;
	width: 100%;
	bottom: 5%;
	left: 50%;
	transform: translateX(-50%);

	div {
		text-align: center;

		a:not(:last-child) {
			margin-right: 16px;
		}
	}
`

export default () => {
	return (
		<Section className='sideMargin'>
			<Logo href='/'>JELENA ĆALDIĆ</Logo>
			<h1>
				<div>
					<p>Jelena Ćaldić</p>
					<span>vokalni solista</span>
				</div>
			</h1>
			<SocialContainer>
				<div>
					<a href='https://www.facebook.com/jelena.caldic.9' target='_blank' rel="noopener noreferrer" >
						<img src='/icons/facebook.svg' alt='Facebook' />
					</a>
					<a href='https://www.instagram.com/jelenacaldicofficialprofile/' target='_blank' rel="noopener noreferrer" >
						<img src='/icons/instagram.svg' alt='Instagram' />
					</a>
				</div>
			</SocialContainer>
		</Section>
	)
}
