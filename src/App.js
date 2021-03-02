import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Final from './Final';



function App() {
  return (
    <div className="App">


    {/*header */}

    <Header/>



    {/*navigatin componet*/}

     <Nav/> 
   

    {/*results */}
      <Final/>
  
  
  
  </div>
    );
}

export default App;
