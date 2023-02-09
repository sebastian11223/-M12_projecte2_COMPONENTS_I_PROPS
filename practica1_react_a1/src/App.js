import './App.css';



function App() {
  return (
    <div className="App">
      <User name="Grup de Leo i Martín" surname="Integrants = "/>
      <User name="Leonardo" surname="Chávez" age={100}/>
      <User name="Martín" surname="Casco" age={100}/><br></br>
      
      <Text_Info />
      
    </div>
  );
}






const User = (props) => {
  return (
    <div className='App'> 
      <div className='name'>{props.name} {props.surname} {props.age}</div>
    </div>
  );
}


const Text_Info = () => {
  return (
    <div> 
      <input className='AjustarInput' placeholder='Introdueix el correu'></input>
      <br></br>
      <input className='AjustarInput' placeholder='Introdueix la data de naixement'></input>
      <br></br>
      <input className='AjustarInput' placeholder='Introdueix el centre'></input>
    </div>
  )
}

export default App;

