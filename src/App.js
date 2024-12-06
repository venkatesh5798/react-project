import logo from './logo.svg';
import './App.css';
import Button from './button';

function App() {
 const userDetails={
  name:"venkat",
  location :"chennai",
  age:"24"
 } 
  return (
    <div className="App">
      <header className="App-header">
       <h3>git hub  source control</h3>
       <p>one line added</p>
       <p>another line added changed  added</p>
       <Button/>
      </header>
    </div>
  );
}

export default App;
