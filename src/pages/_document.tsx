import { Html , Head , Main, NextScript } from 'next/document';
import { TitleBox } from './components/globaltitleBar'

export default function Document() {
	const title = 'project V - official site'
	return (
		<Html>
			<Head/>
			<header>
				<title>{title}</title>
			</header>
			<body style={{
				backgroundColor: '#000021'
			}}>
				<TitleBox/>
				<Main/>
				<NextScript/>
			</body>
		</Html>
	)
}
