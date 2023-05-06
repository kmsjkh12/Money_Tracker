import React from "react";
import styled from "styled-components";
import Spend from "./Spend";


const Layout = () =>{
    return(
        <LayoutWrapper>
            <Spend />
        </LayoutWrapper>
    )
}

const LayoutWrapper = styled.div`
    max-width:768px;
`
export default Layout;