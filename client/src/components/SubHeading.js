import React from 'react'
import styled from 'styled-components'

const Heading = styled.h2`
	font-family: Shadows Into Light Two;
	font-size: 48px;
    text-transform: uppercase;
    max-width: 100%;

    display: inline-block;
    padding: 16px 32px;
    margin-bottom: 48px;

	color: #ffffff;
`

export default ({ children, style }) => {
	return <Heading style={style}>{children}</Heading>
}
