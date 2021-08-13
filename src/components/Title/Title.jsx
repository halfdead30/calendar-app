import React from "react";
import DateModeSwitcher from "../DateModeSwitcher/DateModeSwitcher";
import SearchField from "../SearchField/SearchField";
import styled from "styled-components";

const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2a2826;
  height: 36px;
`;

const WindowControls = styled.div`
  width: 14px;
  height: 14px;
  margin-left: 10px;
  background-color: #f16153;
  border-radius: 50%;
  box-shadow: 25px 0 0 #f8c048, 50px 0 0 #59c64f;
`;

const Title = ({ changeViewMode, dateViewMode }) => {
  return (
    <DivWrapper>
      <WindowControls />
      <DateModeSwitcher
        changeViewMode={changeViewMode}
        dateViewMode={dateViewMode}
      />
      <SearchField />
    </DivWrapper>
  );
};

export default Title;
