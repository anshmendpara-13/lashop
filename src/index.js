import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontext";
import { FilterContextProvider } from "./context/filter_context";
import { Auth0Provider } from '@auth0/auth0-react';
import { CartProvider } from "./context/cart_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
const domainname = "dev-u5xiiyn1ticjiej1.au.auth0.com";
const clientid = "va3kgnCl0SGXR8thD9s7kt0lePOVxIXv";

root.render(
    <Auth0Provider
        domain={domainname}
        clientId={clientid}
        redirectUri={window.location.origin}
    >

        <AppProvider>
            <FilterContextProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </FilterContextProvider>
        </AppProvider>
    </Auth0Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
