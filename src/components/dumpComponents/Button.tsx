import * as React from "react";

interface IButtonProps {
    value: string;
    name: string;
    title: string;
    className: string;
    text: string;
    onPress: () => void;
}

const Button = (props: IButtonProps) => {
    const {
        name,
        value,
        className,
        title,
        text,
        onPress,
    } = props;
    return (
        <button
            onClick={onPress}
            name={name}
            value={value}
            title={title}
            className={className}
        >
            {text}
        </button>
    )
};

export default Button;