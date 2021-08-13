import React from "react";
import styled from "styled-components";

const MonthsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;
`;

const MonthTitle = styled.h4`
  font-weight: 500;
  color: #ff433b;
`;

const WeekWrapper = styled.span`
  & + & {
    margin-left: 10px;
  }
`;

const YearPage = ({ day }) => {
  return (
    <>
      <MonthsWrapper>
        <div>
          <MonthTitle>January</MonthTitle>
          <div>
            <WeekWrapper>M</WeekWrapper>
            <WeekWrapper>T</WeekWrapper>
            <WeekWrapper>W</WeekWrapper>
            <WeekWrapper>T</WeekWrapper>
            <WeekWrapper>F</WeekWrapper>
            <WeekWrapper>S</WeekWrapper>
            <WeekWrapper>S</WeekWrapper>
          </div>
        </div>
        <div>
          <MonthTitle>February</MonthTitle>
        </div>
        <div>
          <MonthTitle>March</MonthTitle>
        </div>
        <div>
          <MonthTitle>April</MonthTitle>
        </div>
      </MonthsWrapper>
      <MonthsWrapper>
        <div>
          <MonthTitle>Mey</MonthTitle>
        </div>
        <div>
          <MonthTitle>June</MonthTitle>
        </div>
        <div>
          <MonthTitle>July</MonthTitle>
        </div>
        <div>
          <MonthTitle>August</MonthTitle>
        </div>
      </MonthsWrapper>
      <MonthsWrapper>
        <div>
          <MonthTitle>September</MonthTitle>
        </div>
        <div>
          <MonthTitle>October</MonthTitle>
        </div>
        <div>
          <MonthTitle>November</MonthTitle>
        </div>
        <div>
          <MonthTitle>December</MonthTitle>
        </div>
      </MonthsWrapper>
    </>
  );
};

export default YearPage;
