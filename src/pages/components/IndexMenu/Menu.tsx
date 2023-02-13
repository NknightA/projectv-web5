import React from 'react';
import styled from "styled-components";

export default function Menu () {
    return (
        <IndexMenu>
            <IndexMenuTitle>First Menu</IndexMenuTitle>
            <div style={{
                display: "flex",
            }}>
                <IndexMenuInner>
                    <h1>About projectV</h1>
                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in </p>
                </IndexMenuInner>
                <IndexMenuInner>
                    <h1>About projectV</h1>
                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in </p>
                </IndexMenuInner>
            </div>
            <div style={{
                display: "flex",
            }}>
                <IndexMenuInner>
                    <h1>About projectV</h1>
                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in </p>
                </IndexMenuInner>
                <IndexMenuInner>
                    <h1>About projectV</h1>
                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in </p>
                </IndexMenuInner>
            </div>
        </IndexMenu>
    )
}

const IndexMenu = styled.div`
    background-color: #ff2200;
    color: #000021;
    margin: 2em;
    padding: 1em;
    border-radius: 1.1vh;
`;

const IndexMenuInner = styled.div`
    background-color: #000021;
    color: #ff2200;
    width: 45%;
  height: 200px;
    margin: 1em;
    padding: 16px;
    border-radius: 1.1vh;
`;

const IndexMenuTitle = styled.h1`
  font-size: 40px;
`;