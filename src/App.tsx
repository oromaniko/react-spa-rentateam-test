import React from 'react';
import HeadContent from "./Components/header/HeadContent";
import Footer from "./Components/footer/Footer";
import MainContent from "./Components/main/MainContent";
import styled from "styled-components";

function App() {
    return (
        <Container>
            <HeadContent />
            <MainContent />
            <Footer />
        </Container>
    );
}

export default App;

const Container = styled.div`
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
`