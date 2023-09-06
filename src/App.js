import React from 'react';
import './App.css'
import GatherAndGatherLogo from './components/GatherAndGatherLogo/GatherAndGatherLogo';
import WeekStartingInput from './components/WeekStartingInput/WeekStartingInput';
import RosterHoursTable from './components/RosterHoursTable/RosterHoursTable';

export const DateContext = React.createContext();

function App() {
  return (
    <div className="App h-100 d-flex flex-column align-items-center container-fluid">
      <GatherAndGatherLogo />
      <WeekStartingInput />
      <DateContext.Provider value=''>
        <RosterHoursTable />
      </DateContext.Provider>
    </div>
  );
}

function Date() {
  const value = React.useContext(DateContext);

  return <p>{value}</p>
}

export default App;