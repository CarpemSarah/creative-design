import React from 'react';
import styled from "styled-components";
import Footer from "./Footer/footer"
import Header from "./Header/header"
import StyledMain from "./Main/main"

const StyledLayout = styled.div`
    padding-top: 80px;
    margin: 0; /* margin default값으로 흰선 발생, 이를 제거 */
    font-family: 'Source Sans Pro';
`;

const Layout = (props) => {
    return (
        <StyledLayout>
            <Header />

            <StyledMain>
                {props.children}
            </StyledMain>

            <Footer />
        </StyledLayout>
    )
}

export default Layout