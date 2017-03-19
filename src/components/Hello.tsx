import * as React from "react";

export interface HelloProps {
    compiler: string;
}

export const Hello = (props: HelloProps) => <h1>Testowy komponent: {props.compiler}</h1>;
