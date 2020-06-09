import React from 'react'
import styled from 'styled-components'
import SubHeading from '../components/SubHeading'

const Container = styled.div`
	background-color: #e5cf87;

	p {
		font-size: 16px;
		line-height: 26px;
	}

	p:not(:last-child) {
		margin-bottom: 32px;
	}
`

const ImageContainer = styled.div`
	margin-bottom: 82px;
	position: relative;
	width: 100%;
	max-width: 530px;

	img {
		max-width: 100%;
		object-fit: cover;

		&:nth-child(1) {
			margin-left: auto;
			display: block;
            max-width: 80%;
            /* min-height: 400px; */
		}

		&:nth-child(2) {
			position: absolute;
			z-index: 2;
            left: 0;
            bottom: -50px;
			max-width: 50%;
		}
	}
`

export default () => {
	return (
		<section className='topMargin'>
			<Container className='topBottomPadding'>
				<div className='sideMargin'>
					<SubHeading style={{ backgroundColor: '#D6AC1D' }}>O meni</SubHeading>
					<p>
						Quas molestias excepturi sint occaecati cupiditate non provident,
						similique sunt in culpa qui officia deserunt mollitia animi, id est
						laborum et dolorum fuga. Et harum quidem rerum facilis est et
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
						animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
						est et expedita distinctio.
					</p>
				</div>
			</Container>
		</section>
	)
}
