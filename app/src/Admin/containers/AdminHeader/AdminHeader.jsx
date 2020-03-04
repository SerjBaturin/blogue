import React from "react";
import styled from "styled-components";

const AdminHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;

const AdminHeader = props => {
  return (
    <AdminHeaderWrapper>
      <h1>ADMIN</h1>
    </AdminHeaderWrapper>
  );
};

export default AdminHeader;
