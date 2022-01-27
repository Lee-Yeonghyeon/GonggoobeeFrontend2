import React from 'react';
import styled from '@emotion/styled';
import {Desktop, Mobile} from '../components/design/ui';

export default function Header() {
  return (
    <>
        {/* Desktop */}
        <Desktop>
            <DesktopContainer>

            </DesktopContainer>
        </Desktop>

        {/* Mobile */}
        <Mobile>
            <MobileContainer>

            </MobileContainer>

        </Mobile>
    </>
  );
}

const DesktopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 768px;
    height: 66px;
    background: #C4C4C4;

`

const MobileContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 66px;
    background: #FFC329;
`

