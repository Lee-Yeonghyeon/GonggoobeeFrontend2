import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import {Desktop, Mobile, Colors} from '../components/design/ui';
import Menu_my09b from '../components/Menu_my09b';

export default function menu() {
  return (
      <>
      <Desktop>
          <DesktopContainer>

          </DesktopContainer>

      </Desktop>
      <Mobile>
          <MobileContainer>
              <Menu_my09b />

          </MobileContainer>
      </Mobile>
      </>
  );
}

const DesktopContainer = styled.div`

`;

const MobileContainer = styled.div`

`;
