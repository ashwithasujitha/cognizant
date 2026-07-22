import logo from './logo.svg';
import './App.css';
import { CalculatorScore } from './component/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculatorScore Name={"Steeve"}
      School={"DNV Public School"}
      total={284}
        goal={3}
      
      />
    </div>
  );
}

export default App;
