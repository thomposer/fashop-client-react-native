import React, { Component } from 'react';
import App from "./containers";
import { Provider } from "react-redux";
import store from "./store";

export default class Root extends Component {
    render() {
        return <Provider store={store}>
            <App />
        </Provider>;
    }
}

