import React from "react";
import "./Nasapic.css";
import styled from "styled-components";

const Headers = styled.div`
  background-color: #51a0d5;
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  height: 120px;
  width: 140px;
  margin-left: 50px;
`;

const H1 = styled.h1`
  margin-left: 250px;
  margin-top: 50px;
  color: white;
`;

function Header(props) {
  return (
    <Headers className="header">
      <div className="img">
        <Image src="https://seeklogo.com/images/N/NASA-logo-9411797223-seeklogo.com.png" />
      </div>
      <div>
        <H1>NASA Photo of the Day!</H1>
      </div>
    </Headers>
  );
}

export default Header;
