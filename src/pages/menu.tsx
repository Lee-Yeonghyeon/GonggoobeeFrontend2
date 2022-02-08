import React, { useState, useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import axios, {AxiosResponse} from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import {Desktop, Mobile, Colors} from '../components/design/ui';
import { myContext } from '../context';
import { User } from '../types/usertypes';
import Menu_my09b from '../components/Menu_my09b';

export default function menu() {
    const [userObject, setUserObject] = useState<any>();
    const [login, setLogin] = useState<string>('logout');

    {/* 로그인한 사용자 정보 불러오기 */}
    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_GET_USER as string, { withCredentials: true }).then((res: AxiosResponse) => {
            if (res.data) {
                console.log(res.data);
                setUserObject(res.data);
            }
        });
        userObject ? setLogin('login') : setLogin('logout'); {/* login: 로그인한 상태, logout: 로그인하지 않은 상태 */}
    });
    

  return (
      <>
      <Desktop>
          <DesktopContainer>
            <Menu_my09b type={login} />

          </DesktopContainer>

      </Desktop>
      <Mobile>
          <MobileContainer>
              <Menu_my09b type={login} />

          </MobileContainer>
      </Mobile>
      </>
  );
}

const DesktopContainer = styled.div`
    width: 768px;

    margin-left:auto;
    margin-right:auto;
`;

const MobileContainer = styled.div`
    max-width: 100%;
`;
