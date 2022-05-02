import React from 'react';
import styled from "styled-components";
import Map from '../../../containers/Home/NaverAPIMap';

const StyledMain = styled.div`
    display: flex;
    min-height: calc(100vh - 180px);
`;

const StyledBoard = styled.div`
    display: flex;
    width: 30%;
    background-color: pink;
`;

const StyledMap = styled.div`
    display: flex;
    width: 70%;
    background-color: yellow;
`;

const Main = () => {
    return (
        <StyledMain>
            <StyledBoard>
                양도 글 리스트
            </StyledBoard>
            <StyledMap>
                <Map/>
            </StyledMap>
        </StyledMain>
    )
}

export default Main