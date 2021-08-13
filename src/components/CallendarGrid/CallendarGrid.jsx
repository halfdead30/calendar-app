import moment from "moment";
import styled from "styled-components";
import YearPage from "../YearPage/YearPage";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  background-color: ${(props) => (props.isHeader ? "#1E1F21" : "#4D4C4D")};
  ${(props) => props.isHeader && "border-bottom: 1px solid #4D4C4D"}
`;

const CellWrapper = styled.div`
  min-width: 140px;
  min-height: ${(props) => (props.isHeader ? "24px" : "80px")};
  background-color: ${(props) => (props.isWeekend ? "#272829" : "#1e1f21")};
  color: ${(props) => (props.isSelectedMonth ? "#DDDDDD" : "#555759")};
  cursor: pointer;
  transition: background-color 0.5s cubic-bezier(0, 0.81, 0.63, 0.33);

  &:hover {
    background-color: #171717;
  }
`;

const RowInCell = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  ${(props) => props.pr && `padding-right: ${props.pr * 8}px`}
`;

const DayWrapper = styled.div`
  height: 33px;
  width: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
`;

const CurrentDay = styled.div`
  height: 100%;
  width: 100%;
  background: #f00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CallendarGrid = ({ today, startDay, dateViewMode }) => {
  const totalDays = 42;
  const day = startDay.clone().subtract(1, "day");
  const daysArray = [...Array(totalDays)].map(() => day.add(1, "day").clone());

  const isCurrentDay = (day) => moment().isSame(day, "day");
  const isSelectedMonth = (day) => today.isSame(day, "month");

  return (
    <>
      <GridWrapper isHeader>
        {[...Array(7)].map((_, i) => (
          <CellWrapper isHeader isSelectedMonth>
            <RowInCell justifyContent="flex-end" pr={1}>
              {moment()
                .day(i + 1)
                .format("ddd")}
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>

      {dateViewMode === "month" && (
        <GridWrapper>
          {daysArray.map((dayItem) => (
            <CellWrapper
              key={dayItem.unix()}
              isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
              isSelectedMonth={isSelectedMonth(dayItem)}
            >
              <RowInCell justifyContent="flex-end">
                <DayWrapper>
                  {!isCurrentDay(dayItem) ? (
                    dayItem.format("D")
                  ) : (
                    <CurrentDay>{dayItem.format("D")}</CurrentDay>
                  )}
                </DayWrapper>
              </RowInCell>
            </CellWrapper>
          ))}
        </GridWrapper>
      )}

      {dateViewMode === "year" && <YearPage day={startDay} />}
    </>
  );
};

export default CallendarGrid;
