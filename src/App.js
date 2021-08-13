import { useState } from "react";
import Monitor from "./components/Monitor/Monitor";
import Title from "./components/Title/Title";
import CallendarGrid from "./components/CallendarGrid/CallendarGrid";
import moment from "moment";
import styled from "styled-components";

const ShadowWrapper = styled("div")`
  border-top: 1px solid #737374;
  border-bottom: 1px solid #464648;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #1a1a1a, 0 8px 28px 6px #888;
`;

window.moment = moment;

function App() {
  moment.updateLocale("en", { week: { dow: 1 } });
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf("month").startOf("week");
  const [dateViewMode, setDateViewMode] = useState("month");

  const prevHandler = () => {
    setToday((prev) => prev.clone().subtract(1, "month"));
  };
  const todayHandler = () => {
    setToday(moment());
  };
  const nextHandler = () => {
    setToday((prev) => prev.clone().add(1, "month"));
  };

  const changeViewMode = (e) => {
    setDateViewMode(e.target.value);
  };

  return (
    <ShadowWrapper>
      <Title changeViewMode={changeViewMode} dateViewMode={dateViewMode} />
      <Monitor
        prevHandler={prevHandler}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
        today={today}
      />
      <CallendarGrid
        startDay={startDay}
        today={today}
        dateViewMode={dateViewMode}
      />
    </ShadowWrapper>
  );
}

export default App;
