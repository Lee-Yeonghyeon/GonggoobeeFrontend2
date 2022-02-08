import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import {Desktop, Mobile, Colors, LoginButton} from '../components/design/ui';

function onClickListener(){
  window.location.href = process.env.NEXT_PUBLIC_LOGIN_GOOGLE as string
}

export default function login() {
  return (
    <>
      {/* Desktop */}
      <Desktop>
        <DesktopContainer>
          {/* 로그인 설명 */}
          <Section1>
            <p className='header'>공구비 로그인</p>
            <p>공구비에 오신 것을 환영합니다!</p>
            <p>공구비는 러비&#38;더비 회원님들의 공동구매를 돕는 플랫폼입니다.</p>
            <p>공구비의 도움을 받으시려면 구글 계정 로그인이 필요합니다.</p>
          </Section1>
          {/* 로그인 버튼 및 하단 이미지 */}
          <Section2>
            <LoginButton onClick= {onClickListener} type = 'login'><Image src="/login_google.png" alt="" width={31} height={30} /> <div>구글 계정으로 시작하기</div> </LoginButton>  
            <div style={{marginTop: '71px'}}><Image src="/login_graphic.png" alt="" width={474} height={190} /></div>
          </Section2>
        </DesktopContainer>
      </Desktop>

      {/* Mobile */}
      <Mobile>
        {/* 로그인 설명 */}
        <Section1>
          <p className='header'>공구비 로그인</p>
          <p>공구비에 오신 것을 환영합니다!</p>
          <p>공구비는 러비&#38;더비 회원님들의 공동구매를 돕는 플랫폼입니다.</p>
          <p>공구비의 도움을 받으시려면 구글 계정 로그인이 필요합니다.</p>
        </Section1>
        {/* 로그인 버튼 및 하단 이미지 */}
        <Section2>
          <LoginButton onClick = {onClickListener} type = 'login'><Image src="/login_google.png" alt="" width={31} height={30} /> <div>구글 계정으로 시작하기</div> </LoginButton>  
          <div style={{marginTop: '71px'}}><Image src="/login_graphic.png" alt="" width={474} height={190} /></div>
        </Section2>
      </Mobile>
    </>
  );
}

const DesktopContainer = styled.div`
width: 768px;

margin-left:auto;
margin-right:auto;
`;

const Section1 = styled.div`
  max-width: 100%;
    
  display: flex;
  flex-direction: column;

  padding-top: 45px;
  padding-left: 4%;
  padding-bottom: 34px;

  .header{
    font-family: NotoSans;
    font-weight: 700;
    font-size: 22px;
    color: ${Colors.gray5};

    margin-bottom: 10px;
  }

  p{
    font-family: NotoSans;
    font-weight: 400;
    font-size: 14px;
    color: ${Colors.black};
  }
`;

const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;