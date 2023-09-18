import { createContext, useState } from 'react';
import './App.css'
import GatherAndGatherLogo from './components/GatherAndGatherLogo/GatherAndGatherLogo';
import WeekStartingInput from './components/WeekStartingInput/WeekStartingInput';
import RosterHoursTable from './components/RosterHoursTable/RosterHoursTable';
import { MyContext } from './myContext';

function App() {
  const [date, setDate] = useState("");

  return (
    <div className="App h-100 d-flex flex-column align-items-center container-fluid">
      <GatherAndGatherLogo />
      <MyContext.Provider value={{ date, setDate }}>
        <WeekStartingInput />
        <RosterHoursTable />
      </MyContext.Provider>
    </div>
  );
}

export default App;