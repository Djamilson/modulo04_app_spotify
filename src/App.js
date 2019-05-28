import dotenv from "dotenv";
import React from "react";
import "./config/ReactotronConfig";

import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from "./routes";

import { Wrapper, Container, Content } from "./styles/components";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";


dotenv.config();


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
