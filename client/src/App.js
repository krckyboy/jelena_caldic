import React from 'react'
import './App.css'
import styled from 'styled-components'
import FirstSection from './sections/FirstSection'
import AboutMe from './sections/AboutMe'
import Saradnja from './sections/Business'
import Gallery from './sections/Gallery'
import Footer from './sections/Footer'

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
			<Gallery />
			<Footer />
		</Content>
	)
}

export default App
