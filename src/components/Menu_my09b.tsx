import styled from '@emotion/styled';
import React, {useContext} from 'react';
import Image from 'next/image';
import {Colors, Button} from '../components/design/ui';
import { myContext } from '../context';
import { User } from '../types/usertypes';

export default function Menu_my09b( props: any ){
    const userObject = useContext(myContext) as User;

  return (
    <>
        <Title>마이공구비</Title>
        {props.type === 'login' ?
            <>
                {/* 로그인한 상태 */}
                <Container>
                    <div className='box'>
                        <div className='user'>
                            <Image src={userObject.userId === 1 ? "/profile_wonderful.png" : "/profile_wonderwomen.png"} alt='' width={44} height={44} />
                            <div style={{marginLeft: '19px'}}>
                                <div className='user-name'>{userObject.name}</div>
                                <div className='user-info'>
                                    <div>총 거래 수 {userObject.deal}</div>
                                    <div>팔로워 {userObject.follower}</div>
                                    <div>팔로우 {userObject.following}</div>
                                </div>
                            </div>
                        </div>
                        <Button onClick = {() => location.href = process.env.NEXT_PUBLIC_LOGOUT_GOOGLE as string} type = '92'>로그아웃</Button>
                    </div>
                </Container>
            </>
        :
            <>
                {/* 로그인하지 않은 상태 */}
                <Container>
                    <div className='box'>
                        <div className='user'>
                            <Image src='/profile_default.png' alt='' width={44} height={44} />
                            <div style={{marginLeft: '19px'}}>
                                <div className='user-name'>로그인 해주세요</div>
                                <div className='user-info'>
                                    <div>총 거래 수 0</div>
                                    <div>팔로워 0</div>
                                    <div>팔로우 0</div>
                                </div>
                            </div>
                        </div>
                        <Button onClick = {() => location.href = '/login'} type = '92'>로그인</Button>
                    </div>
                </Container>
            </>
        }  
    </>
  
  );
}

const Title = styled.div`
    font-family: NotoSans;
    font-weight: 700;
    font-size: 14px;
    color: ${Colors.gray4};

    margin-left: 5%;
    margin-top: 20px;
    margin-bottom: 16px;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 24px;

    .box {
        width: 91%;
        height: 133px;

        border: 1px solid ${Colors.gray2};
        box-sizing: border-box;
        border-radius: 12px;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding-top: 20px;
    }

    .user{
        display: flex;
        align-items: center;

        margin-bottom: 20px;
    }   

    .user-name{
        font-family: NotoSans;
        font-weight: 700;
        font-size: 15px;
        color: ${Colors.gray4};

        margin-bottom: 4px;
    }

    .user-info{
        font-family: NotoSans;
        font-weight: 400;
        font-size: 13px;
        color: ${Colors.gray4};

        display: flex;

        div{
            margin-right: 26px;
        }
    }

`;
