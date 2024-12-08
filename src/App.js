import logo from './logo.svg';
import './App.css';
import Button from './button';

function App() {
 const userDetails={
  name:"suresh",
 state:"tamilandu",
  age:"26",
  education:"Be",
  location:"chennai"
 } 
  return (
    <div className="App">
      <header className="App-header">
       <h3>git hub  source control</h3>
       <p>one line added</p>
       <p>another line added changed  added</p>
       <p>another line added dev branched 
        
       </p>
       <Button/>
      </header>
    </div>
  );
}

export default App;
