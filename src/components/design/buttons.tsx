import styled from "@emotion/styled";
import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner"
import { Colors } from "./colors"
import { assignCss } from "./assignCss";

interface IButtonProps{ // type = "login" => 로그인, type = "start" => 시작하기
    type?: string;
    style?: object[] | object;
    url?: string;
    onClick?: any;
}

export const Button: React.FC<IButtonProps> = ({ children, type, style, url, onClick }) => {

    const [buttonText, setButtonText] = useState(children);
    const [isLoading, setisLoading] = useState(false);
    const router = useRouter();

    const loader = <TailSpin color={type === "start" ? Colors.white : Colors.black} height={30} width={30} />

    useEffect(() => {       
      setButtonText(children);
    }, [children]);

    function loading() {      
      setButtonText(loader);
      setisLoading(true);
      if(url !== undefined) router.push(url);
    }

    const tagType:string = type ? type : 'start'; //기본 타입 start
    const styles:{[key: string]: any} = {
      '92': {
        width : '92%',
        background: Colors.gray2,
        color: Colors.white,
      },
      'loginWhite': {
        weight : '500',
        background: 'transparent',
        borderColor: Colors.white,
        color: Colors.white,
        hover: {
          background: 'transparent',
          borderColor: Colors.yellow2,
          color: Colors.yellow2,
        },
        pressed: {
          background: 'transparent',
          borderColor: Colors.yellow1,
          color: Colors.yellow1,
        },
        disabled: {
          background: 'transparent',
          borderColor: Colors.gray3,
          color: Colors.gray3,
        },
      },
      'secondary': {
        weight : '500',
        background: Colors.white,
        borderColor: Colors.black,
        color: Colors.black,
        hover: {
          background: Colors.white,
          borderColor: Colors.yellow2,
          color: Colors.yellow2,
        },
        pressed: {
          background: Colors.white,
          borderColor: Colors.yellow1,
          color: Colors.yellow1,
        },
        disabled: {
          background: Colors.white,
          borderColor: Colors.gray3,
          color: Colors.gray3,
        },
      },
      'start': {
        weight : '500',
        background: Colors.yellow2,
        borderColor: Colors.yellow2,
        color: Colors.white,
        hover: {
          background: Colors.yellow1,
          borderColor: Colors.yellow1,
          color: Colors.white,
        },
        pressed: {
          background: Colors.yellow1,
          borderColor: Colors.yellow1,
          color: Colors.white,
        },
        disabled: {
          background: Colors.skyblue1,
          borderColor: Colors.skyblue1,
          color: Colors.white,
        },
      },
    }
    

    const Button = styled.div`
      cursor : pointer;
      height : 35px;
      width : ${styles[tagType].width};
      border-radius: 7px;
      background-color: ${styles[tagType].background};

      font-family: NotoSans;
      font-size: 14px;
      font-weight: 700;
      color : ${styles[tagType].color};
      
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    return (
      <Button style={assignCss(style)} onClick={()=>{loading(); onClick ? onClick() : null}}>{buttonText}</Button>
    )
}