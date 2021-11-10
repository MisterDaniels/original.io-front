import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import './App.css';

import { ProductPage } from './app/containers/ProductPage';

const AppContainer = styled.div`
    ${tw`
        w-full
        h-full
        flex
        flex-col
    `}
`;

function App() {
    return <AppContainer>
        <ProductPage />
    </AppContainer>
}

export default App;