import './App.css'
import GatherAndGatherLogo from './components/GatherAndGatherLogo/GatherAndGatherLogo';
import WeekStartingInput from './components/WeekStartingInput/WeekStartingInput';
import RosterHoursTable from './components/RosterHoursTable/RosterHoursTable';

function App() {
  return (
    <div className="App h-100 d-flex flex-column align-items-center container-fluid">
      <GatherAndGatherLogo />
      <WeekStartingInput />
      <RosterHoursTable />
    </div>
  );
}

export default App;