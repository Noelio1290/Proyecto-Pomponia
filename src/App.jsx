import './App.css';
import Counter from './Components/Counter';

const App = () => {

  const limits = [
    {
      upperLimit: 10,
      lowerLimit: 2,
    },
    {
      upperLimit: 100,
      lowerLimit: 2,
    }, 
    {
      upperLimit: 20,
      lowerLimit: 12,
    }, 
    {
      upperLimit: 500,
      lowerLimit: 145,
    }, 
    {
      upperLimit: 80,
      lowerLimit: 14,
    }, 
    {
      upperLimit: 1200,
      lowerLimit: 400,
    },
  ]

  return (
    <div>
      {limits.map((limit, index) => <Counter key={`counter-number-${index}`} upperLimit={limit.upperLimit} lowerLimit={limit.lowerLimit}/>)}
    </div>
  );
}

export default App;
