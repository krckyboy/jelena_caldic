import React from 'react'
import styled from 'styled-components'

const Heading = styled.h2`
	text-transform: uppercase;
	max-width: 100%;
	position: relative;
	letter-spacing: 0.1rem;
	font-size: 40px;

	display: inline-block;
	padding: 16px 32px;
	margin-bottom: 48px;

	color: #ffffff;

	@media (min-width: 360px) {
		letter-spacing: 0.2rem;
		font-size: 48px;
	}

	@media (min-width: 900px) {
		font-size: 64px;
		letter-spacing: 0.9rem;
	}

	@media (min-width: 1100px) {
		font-size: 96px;
	}
`

export default ({ children, style }) => {
	return <Heading style={style}>{children}</Heading>
}
