import styled from "@emotion/styled";
import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner"
import { Colors } from "./colors"
import { assignCss } from "./assignCss";

interface LoginButtonProps{ // type = "login" => 로그인, type = "start" => 시작하기
    type?: string;
    style?: object[] | object;
    url?: string;
    onClick?: any;
}

export const LoginButton: React.FC<LoginButtonProps> = ({ children, type, style, url, onClick }) => {

    const [buttonText, setButtonText] = useState(children);
    const [isLoading, setisLoading] = useState(false);
    const router = useRouter();

    const loader = <TailSpin color={type === "login" ? Colors.white : Colors.black} height={30} width={30} />

    useEffect(() => {       
      setButtonText(children);
    }, [children]);

    function loading() {      
      setButtonText(loader);
      setisLoading(true);
      if(url !== undefined) router.push(url);
    }

    const tagType:string = type ? type : 'login'; //기본 타입 start
    const styles:{[key: string]: any} = {
      'login': {
        width : '92%',
        background: Colors.gray1,
        borderColor: Colors.gray4,
        color: Colors.gray4,
      }
    }
    

    const LoginButton = styled.div`
      cursor : pointer;
      height : 50px;
      width : ${styles[tagType].width};
      border-radius: 0px;
      border-width : 1px;
      border-color : ${styles[tagType].borderColor};
      border-style : solid;
      background-color: ${styles[tagType].background};

      font-family: NotoSans;
      font-size: 16px;
      font-weight: 400;
      color : ${styles[tagType].color};
      
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    return (
      <LoginButton style={assignCss(style)} onClick={()=>{loading(); onClick ? onClick() : null}}>{buttonText}</LoginButton>
    )
}