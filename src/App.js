import logo from './logo.svg';
import './App.css';
import MyButton from './components/myButton';
import Navbar from './components/Navbar';
import Footer from './components/footer';
const App = () => {
  const traceButton =() => {
    alert("muncul");
    console.log("button di click");
  }
  const navText = "Portfolio";
  const navHeading =" Heading";
    const paragraphFooter = () =>{
    return (
    <div>
           <i>mantavv</i>  
          <h3> ada apa </h3>
          <marquee> ----------------</marquee>
  </div>
  );
};
     return (
    <div className="App">
      <header className="App-header">
        <Navbar navText={navText} nav navHeading={navHeading} />
       
        <p>Hallo</p>
        <MyButton></MyButton>
 
        <Footer paragraphFooter={paragraphFooter} />
      </header>
      
    </div>
  );
}

export default App;
