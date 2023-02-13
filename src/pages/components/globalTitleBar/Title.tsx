import React,{ useEffect, useState } from 'react';
import globalConfig from '../../configs/PageConfig.json'

const getWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		if (typeof window !== "undefined") {
			const handleResize = () => {
				setWindowSize({
					width:
					window.innerWidth,
					height: window.innerHeight,
				});
			};

			window.addEventListener("resize", handleResize);
			handleResize();
			return () => window.removeEventListener("resize", handleResize);
		} else {
			return;
		}
	}, []);
	return windowSize;
};

export default function TitleboxTitle () {
	return (
		<div>
			<div style={{display:'flex',
						width: '${width}',fontSize: 14}}>
				<div style={{
					backgroundColor: '#ff2200',
					color: '#000021',
					width: '50%',
					padding: 30,
				}}>
					<h1>projectV - for all web3 developers!</h1>
				</div>
				<div style={{
					backgroundColor: '#000021',
					color: '#fff',
					padding: 30,
					margin: '0 auto',
					width: '50%',
					display: 'flex',
					justifyContent: 'flex-end'
				}}>
					<h1>site ver - {globalConfig.globalversion}</h1>
				</div>
			</div>
		</div>
	)
}