import { useState } from 'react';
import './App.css'
import GatherAndGatherLogo from './components/GatherAndGatherLogo/GatherAndGatherLogo';
import WeekStartingInput from './components/WeekStartingInput/WeekStartingInput';
import RosterHoursTable from './components/RosterHoursTable/RosterHoursTable';
import CalculateButton from './components/CalculateButton/CalculateButton';
import { MyContext } from './myContext';

function App() {
  const [date, setDate] = useState("");
  const [startTimes, setTimesHours] = useState({startTimes: {}});
  const [finishTimes, setFinishTimes] = useState("--:--");
  const [totalHours, setTotalHours] = useState("--Hrs");
  const [startOrFinishCellCount, setStartOrFinishCellCount] = useState(0);

  return (
    <MyContext.Provider value={{
    date: [ date, setDate ], 
    startTimes: [startTimes, setTimesHours], 
    finishTimes: [finishTimes, setFinishTimes], 
    totalHours: [ totalHours, setTotalHours ],
    startOrFinishCellCount: [startOrFinishCellCount, setStartOrFinishCellCount]
    }}>
      <div className="App d-flex flex-column align-items-center container-fluid">
        <GatherAndGatherLogo />
        <WeekStartingInput />
        <RosterHoursTable />
        <CalculateButton />
      </div>
    </MyContext.Provider>
  );
}

export default App;