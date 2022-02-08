import React from "react";
import { useMediaQuery } from "react-responsive";
import * as _colors from './colors';
import { Button as _button } from './buttons';
import { LoginButton as _loginButton } from './loginButtons';


{/* Media Query */}
export const Desktop: React.FC = ({ children }) => {
    const isDesktop = useMediaQuery({ query: '(min-width: 768px)'});
    return<React.Fragment>{isDesktop && children }</React.Fragment>
};
export const Mobile: React.FC = ({ children }) => {
    const isMobile = useMediaQuery({ query: '(min-width: 0px) and (max-width: 767px)'});
    return<React.Fragment>{isMobile && children }</React.Fragment>
};

{/* Variable */}
export const Colors = _colors.Colors;

{/* Components */}
export const Button = _button;
export const LoginButton = _loginButton;
