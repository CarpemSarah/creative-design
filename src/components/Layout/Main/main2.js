import React from 'react';
import styled from "styled-components";
import MenuApp from '../Menu/menu';
import MyInfo from '../Mypage/myinfo';
import mainTheme from "./mainTheme";
import { Checkbox, FormControl } from '@material-ui/core';

const StyledMain = styled.div`
    display: flex;
    min-height: calc(100vh - 180px);
    margin:
        margin-top: 0px;
        margin-right: 210px;
        margin-bottom: 0px;
        margin-left: 210px;
`;

const StyledNav = styled.div`
    display: block;
    float: left;
    width: 20%;
    padding-top: 30px;
    background-color: rgb(254, 248, 220);
`;

const StyledSection = styled.div`
    display: block;
    width: 80%;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 50px;
    font-size: 22px;
    background-color: green;
`;

const StyledTop = styled.div`
    display: block;
    height: 40px;
    margin-top: 15px;
    margin-bottom: 50px;
    margin-right: 50px;
    font-size: 22px;
    font-family: ${mainTheme.mainFont};
    background-color: yellow;
`;

const StyledMypage = styled.div`
    display: block;
    margin-right: 50px;
    font-size: 22px;
    background-color: ${mainTheme.mainOrangeColor};
`;

const Main = () => {
    return (
        <StyledMain>
            <StyledNav>
                <MenuApp />
            </StyledNav>
            <StyledSection>
                <StyledTop>
                    <h2>내 정보</h2>
                </StyledTop>
                <StyledMypage>
                    <MyInfo />
                </StyledMypage>
            </StyledSection>
        </StyledMain>
    )
}

export default Main