import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	background-color: #F5D25A;
	text-align: center;

	p {
		font-size: 16px;
		line-height: 26px;

		@media (min-width: 960px) {
		font-size: 18px;
	}
	}

	p:not(:last-child) {
		margin-bottom: 32px;
	}


`

export default () => {
	return (
		<footer className='topMargin'>
			<Container className='topBottomPadding'>
				<div className='sideMargin'>
					<p>
						Made by{' '}
						<a href='https://krcky.dev/' target='_blank' rel="noopener noreferrer">
							<strong>Dušan Todorović Krcky</strong>
						</a>{' '}
						| Sva prava zadržana
					</p>
				</div>
			</Container>
		</footer>
	)
}
