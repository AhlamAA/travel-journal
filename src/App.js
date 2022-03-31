import './App.css';
import Navbar from './componants/Navbar';
import Data from './componants/Data'
import Card from './componants/Card';

function App() {
  const cards = Data.map(card => {
    return (
      <Card 
        {...card}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
