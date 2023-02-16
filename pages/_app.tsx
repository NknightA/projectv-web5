import React from 'react'
import { AppProps } from 'next/app'
import '../styled/global.sass'

export default function App ({Component,pageProps}: AppProps) {
	return (
		<>
			<Component{...pageProps}/>
		</>
	)
}
