import * as React from "@types/react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="biuro"/>,
    document.getElementById("app")
);