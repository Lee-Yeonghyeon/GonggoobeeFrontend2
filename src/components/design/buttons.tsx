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
    disabled?: any;
    onClick?: any;
}

export const Button: React.FC<IButtonProps> = ({ children, type, style, url, disabled, onClick }) => {

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
      'login': {
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
    

    const Button = styled.button`
      -webkit-transition: background 0.3s, color 0.3s, border 0.3s, -webkit-transform 0.3s;
      transition: background 0.3s, color 0.3s, border 0.3s, transform 0.3s;
      cursor : pointer;
      height : 52px;
      width : 160px;
      min-width: 136px;
      border-radius: 20px;
      border-width : 1px;
      border-color : ${styles[tagType].borderColor};
      border-style : solid;
      background-color: ${styles[tagType].background};
      color : ${styles[tagType].color};

      font-family: Spoqa Han Sans Neo;
      font-size: 16px;
      font-style: normal;
      font-weight: ${styles[tagType].weight};
      line-height: 19px;
      letter-spacing: 0em;
      text-align: center;

      &:hover{
        background-color: ${styles[tagType].hover.background};
        color: ${styles[tagType].hover.color};
        border-color : ${!isLoading? styles[tagType].hover.borderColor : styles[tagType].borderColor};
      }    

      &:active{
        background-color: ${styles[tagType].pressed.background};
        color: ${styles[tagType].pressed.color};
        border-color : ${styles[tagType].pressed.borderColor};
      }

      &:disabled{
        cursor : default;
        background-color: ${styles[tagType].disabled.background};
        color: ${styles[tagType].disabled.color};
        border-color : ${styles[tagType].disabled.borderColor};
      }

      &:focus{
        outline : none;
      }
    `;
    return (
      <Button style={assignCss(style)} disabled={disabled} onClick={()=>{loading(); onClick ? onClick() : null}}>{buttonText}</Button>
    )
}