import React from 'react'
import styled from 'styled-components'
import SubHeading from '../components/SubHeading'

const Container = styled.div`
	background-color: #99b3cb;
	max-width: 1440px;
    margin: 0 auto;

	p {
		font-size: 16px;
		line-height: 26px;
	}

	p:not(:last-child) {
		margin-bottom: 32px;
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
	return (
		<section className='topMargin'>
			<Container className='topBottomPadding'>
				<div className='sideMargin'>
					<SubHeading style={{ backgroundColor: '#527799' }}>
						Saradnja
					</SubHeading>
					<p>
						Quas molestias excepturi sint occaecati cupiditate non provident,
						similique sunt in culpa qui officia deserunt mollitia animi, id est
						laborum et dolorum fuga. Et harum quidem rerum facilis est et
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
						animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
						est et expedita distinctio.
					</p>
				</div>
			</Container>
		</section>
	)
}
