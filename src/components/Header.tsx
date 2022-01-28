import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import {Desktop, Mobile} from '../components/design/ui';

export default function Header() {
  return (
    <Container>
        {/* Desktop */}
        <Desktop>
            <DesktopContainer>
                <Link href ="/">
                    <a className="menu" > <Image src="/button/btn_hambugerMenu.png" alt="" width={24} height={24} /> </a>
                </Link>
                <Link href="/">
                    <a className="logo"><Image src="/button/logo_imgText.png" alt="" width={124} height={35} /></a>
                </Link>
                <div>
                    <a className="search"><Image src="/button/btn_search.png" alt="" width={24} height={24} /></a>
                    <Link href="/">
                        <a><Image src="/button/btn_bell.png" alt="" width={24} height={24} /></a>
                    </Link>
                </div>
            </DesktopContainer>
        </Desktop>

        {/* Mobile */}
        <Mobile>
            <MobileContainer>
            <Link href ="/">
                    <a className="menu" > <Image src="/button/btn_hambugerMenu.png" alt="" width={24} height={24} /> </a>
                </Link>
                <Link href="/">
                    <a className="logo"><Image src="/button/logo_imgText.png" alt="" width={124} height={35} /></a>
                </Link>
                <div>
                    <a className="search"><Image src="/button/btn_search.png" alt="" width={24} height={24} /></a>
                    <Link href="/">
                        <a><Image src="/button/btn_bell.png" alt="" width={24} height={24} /></a>
                    </Link>
                </div>
            </MobileContainer>
        </Mobile>
    </Container>
  );
}

const Container = styled.div`
    .menu {
        padding-right: 32px;
    }
    .search {
        padding-right: 8px;
    }

`;


const DesktopContainer = styled.header`
    width: 768px;
    height: 36px;
    background: #FFFFFF;
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.1));

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 15px;
    margin-left:auto;
    margin-right:auto;
`;

const MobileContainer = styled.header`
    max-width: 100%;
    height: 36px;
    background: #FFFFFF;
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.1));

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 15px;
`;

