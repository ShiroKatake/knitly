import { useState } from 'react';
import './App.css';
import { calculate } from './utils/calculate';
import { patternProcessor } from './utils/patternProcessor';

function App() {
  const [startCount, setStartCount] = useState(0);
  const [endCount, setEndCount] = useState(0);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const patterData = calculate(startCount, endCount);
    patternProcessor(patterData);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="start">Start with: </label>
          <input
            id="start"  
            type="number"
            name="start stitch count"
            value={startCount}
            onChange={(e) => setStartCount(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="end">End with: </label>
          <input
            id="end"
            type="number"
            name="end stitch count"
            value={endCount}
            onChange={(e) => setEndCount(parseInt(e.target.value))}
          />
        </div>
        <button>Calculate</button>

        <div>
          {/* <span>Every </span><span> rows</span><span> increase by </span><span> stitches</span> */}
        </div>
      </form>
    </div>
  );
}

export default App;
