import { createContext, useState } from 'react';
import './App.css'
import GatherAndGatherLogo from './components/GatherAndGatherLogo/GatherAndGatherLogo';
import WeekStartingInput from './components/WeekStartingInput/WeekStartingInput';
import RosterHoursTable from './components/RosterHoursTable/RosterHoursTable';
import CalculateButton from './components/CalculateButton/CalculateButton';
import { MyContext } from './myContext';

function App() {
  const [date, setDate] = useState("");
  const [totalHours, setTotalHours] = useState("--Hrs");

  return (
    <MyContext.Provider value={{date: [ date, setDate ], totalHours: [ totalHours, setTotalHours ]}}>
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