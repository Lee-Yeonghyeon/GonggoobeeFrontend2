import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import {Desktop, Mobile, Colors} from '../components/design/ui';

export default function Footer() {
  return (
    <>
        {/* Desktop */}
        <Desktop>
            <DesktopContainer>
                {/* 최상단으로 이동 */}
                <Section1>
                    <a href = '#' className='top'>↑ TOP</a>
                </Section1>
                {/* 회사 정보 */}
                <Section2>
                    <div className='contents'>
                    <div style={{marginRight: '50px'}}>대표<br />주소<br />고객 문의<br />PR 문의<br />제휴 문의<br />사업자번호</div>
                    <div>원더풀<br />서울특별시 공동구 구매로 21길 9-20호<br />09b@gonggoobee.com<br />pr@gonggoobee.com<br />contact@gonggoobee.com<br />898-21-09208</div>
                    </div>
                    <div>copyright gonggoobee.co.kr. All Rights Reserved.</div>
                </Section2>
                {/* 배경화면에 바로가기 아이콘 추가 */}
                <Section3>
                    <Image src="/button/logo_square.png" alt="" width={25} height={25} />
                    <div className='yellow'>공구비</div><div>배경화면에 바로가기 아이콘 추가하기</div>
                </Section3>
            </DesktopContainer>
        </Desktop>

        {/* Mobile */}
        <Mobile>
            {/* 최상단으로 이동 */}
            <Section1>
                <a href = '#' className='top'>↑ TOP</a>
            </Section1>
            {/* 회사 정보 */}
            <Section2>
                <div className='contents'>
                <div style={{marginRight: '50px'}}>대표<br />주소<br />고객 문의<br />PR 문의<br />제휴 문의<br />사업자번호</div>
                <div>원더풀<br />서울특별시 공동구 구매로 21길 9-20호<br />09b@gonggoobee.com<br />pr@gonggoobee.com<br />contact@gonggoobee.com<br />898-21-09208</div>
                </div>
                <div>copyright gonggoobee.co.kr. All Rights Reserved.</div>
            </Section2>
            {/* 배경화면에 바로가기 아이콘 추가 */}
            <Section3>
                <Image src="/button/logo_square.png" alt="" width={25} height={25} />
                <div className='yellow'>공구비</div><div>배경화면에 바로가기 아이콘 추가하기</div>
            </Section3>
        </Mobile>
    </>
  );
}

const DesktopContainer = styled.div`
    width: 768px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-left:auto;
    margin-right:auto;
`;

const Section1 = styled.div`
    width: 100%;
    height: 42px;
    background: ${Colors.gray4};
    border-bottom: solid 1px ${Colors.gray5};

    display: flex;
    justify-content: center;
    align-items: center;

    .top{
        color: ${Colors.white};
        text-decoration:none
    }
`;

const Section2 = styled.div`
    width: 100%;
    height: 128px;
    background: ${Colors.gray4};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: NotoSans;
    font-weight: 400;
    font-size: 10px;
    color: ${Colors.gray3};

    .contents{
        display: flex;
        justify-content: center;
        align-items: center;
        
        margin-bottom: 3px;
    }
`;

const Section3 = styled.div`
    width: 100%;
    height: 42px;
    background: ${Colors.gray3};

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: NotoSans;
    font-weight: 400;
    font-size: 12px;

    .yellow {
        margin-left: 7px;
        margin-right: 3px;

        color: ${Colors.yellow2};
    }
`;