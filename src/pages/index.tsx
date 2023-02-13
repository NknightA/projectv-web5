import style from './styles/home.module.sass'
import Link from "next/link";
import Menu from "./components/IndexMenu/Menu";
import React from "react";
import styled from "styled-components";
import Content from "./components/ContentMenu/Content";

export default function Index () {
	return (
		<>
			<div className={style.Main}>
				<IndexTiles>
					Welcome to projectV!!!!
				</IndexTiles>
				<Index2>
					<Menu/>
				</Index2>
				<Link href={'./authUser/'}>Login with github</Link>
				<Content/>
				<IndexFooter>
					@project V - Nknight AMAMIYA
				</IndexFooter>
			</div>
		</>
	)
}

const IndexTiles = styled.div`
	font-size: 40px;
	color: #ff2200;
	height: 16em;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Index2 = styled.div`
	::selection{
		background-color: #000021;
		color: #ff2200;
	}	
`

const IndexFooter = styled.div`
	background-color: #ff2200;
	color: #000021;
	height: 10em;
	display: flex;
	justify-content: center;
	align-items: end;
	padding-bottom: 1vh;
`