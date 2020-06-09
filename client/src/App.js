import React from 'react'
import './App.css'
import styled from 'styled-components'
import FirstSection from './sections/FirstSection'
import AboutMe from './sections/AboutMe'
import Saradnja from './sections/Business'

const Content = styled.main`
	width: 100%;
	max-width: 100%;
	background-color: #f2f2f2;
`

function App() {
	return (
		<Content>
			<FirstSection />
			<AboutMe />
			<Saradnja />
		</Content>
	)
}

export default App
