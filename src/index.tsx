import * as React from "react";
import * as ReactDOM from "react-dom";

export interface HelloProps {
    compiler: string;
}

export const Hello = (props: HelloProps) => <h1>Testowa integracja: {props.compiler}</h1>

ReactDOM.render(
    <Hello compiler="Webgazer!"/>,
    document.getElementById("app")
);