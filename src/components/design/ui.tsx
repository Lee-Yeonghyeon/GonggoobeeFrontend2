import React from "react";
import { useMediaQuery } from "react-responsive";


//PC, Mobile 반응형 모듈
export const Desktop: React.FC = ({ children }) => {
    const isDesktop = useMediaQuery({ query: '(min-width: 768px)'});
    return<React.Fragment>{isDesktop && children }</React.Fragment>;
};
export const Mobile: React.FC = ({ children }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)'});
    return<React.Fragment>{isMobile && children }</React.Fragment>;
};
