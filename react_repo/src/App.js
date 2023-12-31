import './App.css';
import Person from "./Person"
import Event from './Event';
import SumCalculator from './SumCalculator';
import ConditionRender from './ConditionRender';
import CondRend from './CondRend';

function App() {
  return (
    <div>
      <Person name="Amit" age="25"/>
      <Person name="Karan" age = "34"/>
      <Person name="John"/>
      <Event />
      <SumCalculator />
      <ConditionRender />
      <CondRend />
    </div>
  );
}
export default App;