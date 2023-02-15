import { Html , Head , Main, NextScript } from 'next/document';
import {useRouter} from 'next/router';
//import headerstyles from './Document.module.css';

export default function Document() {
	const title = 'project V';
	return (
		<Html>
			<Head/>
			<header>
				<div style={{
					backgroundColor: '#ff2200',
					color: '#000021',
					display: 'flex',
					padding: 10,
				}}>
					<div style={{
						fontSize: '40px',
						width: '50%',
					}}>
						<a href={"/"} style={{
							textDecoration: 'none',
							color: '#000021'
						}}>{title}</a>
					</div>
					<div style={{
						display: 'flex',
						justifyContent: 'end',
                        alignItems: 'center',
						width: '50%'
					}}>
						<div style={{
							margin: 20
						}}>
							<p>site version - NaN</p>
						</div>
						<a href="/login"
							style={{
								backgroundColor: '#000',
								color: '#fff',
								display: 'flex',
								justifyContent: 'center',
                                alignItems: 'center',
								height: '30px',
								width: '90px',
								padding: '10px',
                                textDecoration: 'none',
                                fontSize: '20px',
                                fontWeight: 'bold'}}
							>
							Login
						</a>
					</div>
				</div>
				<title>{title}</title>
			</header>
			<body style={{
				backgroundColor: '#000021',
				color: '#ff2200',
			}}>
				<div>
					<Main/>
					<NextScript/>
				</div>
			</body>
		</Html>
	)
}