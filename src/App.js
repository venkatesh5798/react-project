import logo from './logo.svg';
import './App.css';
import Button from './button';

function App() {
 const userDetails={
  name:"venkat",
  location :"madurai",
  age:"34",
  education:"MSC",
  dept:"Chemistry"
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
