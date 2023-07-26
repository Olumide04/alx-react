import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Notifications from "./Notifications";

ReactDOM.render(
        <App />,
    document.getElementById("root")
);
ReactDOM.render(
        <div id="root-notifications">
            <Notifications />
        </div>,
    document.getElementById("root-notifications")
);