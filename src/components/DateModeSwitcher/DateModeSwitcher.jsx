import React from "react";
import styled from "styled-components";

const DateModeSwitcherWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  min-width: 100px;
  height: 24px;
`;

const DateSwitchBtn = styled.button`
  display: inline-block;
  font-weight: bold;
  padding: 0 16px;
  height: 24px;
  background-color: ${(props) => (props.isActive ? "#c7c8ca" : "#696a6b")};
  color: ${(props) => (props.isActive ? "#3b3c3e" : "#e6e6e6")};
  border: none;

  border-left: ${(props) =>
    props.radiusLeft || props.radiusRight ? "none" : "1px solid #606062"};

  border-right: ${(props) =>
    props.radiusLeft || props.radiusRight ? "none" : "1px solid #606062"};

  border-radius: ${(props) =>
    props.radiusLeft ? "4px 0 0 4px" : props.radiusRight ? "0 4px 4px 0" : "0"};
  outline: none;
  cursor: pointer;
`;

const DateModeSwitcher = ({ changeViewMode, dateViewMode }) => {
  return (
    <DateModeSwitcherWrapper radius="true">
      <DateSwitchBtn
        isActive={dateViewMode === "day" && true}
        radiusLeft
        value="day"
        onClick={changeViewMode}
      >
        Day
      </DateSwitchBtn>
      <DateSwitchBtn
        isActive={dateViewMode === "week" && true}
        value="week"
        onClick={changeViewMode}
      >
        Week
      </DateSwitchBtn>
      <DateSwitchBtn
        isActive={dateViewMode === "month" && true}
        value="month"
        onClick={changeViewMode}
      >
        Month
      </DateSwitchBtn>
      <DateSwitchBtn
        isActive={dateViewMode === "year" && true}
        radiusRight
        value="year"
        onClick={changeViewMode}
      >
        Year
      </DateSwitchBtn>
    </DateModeSwitcherWrapper>
  );
};

export default DateModeSwitcher;
