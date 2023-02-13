import React from 'react'
import titlestyle from '../components/globalTitleBar.module.sass'
import TitleBoxTitle from './globalTitleBar/Title'
import TitleBoxRight from './globalTitleBar/TitleRight'

export const TitleBox = ({chindren}: any) => {
	return (
		<>
			<div>
				<TitleBoxTitle/>
			</div>
		</>
	)
}
