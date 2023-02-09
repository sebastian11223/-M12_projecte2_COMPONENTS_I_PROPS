import './Styles/App.css';
import pasta from './Imatges/menu_pasta.jpg';
function App() {
  return (
    <div className="App">
      <header>
        <Texto name="mensajeTextoGrande"/>
        <DivGrandeUno name="Martín" surname="Casco" af="Lorem Ipsum"/>
        <DivGrandeUno name="Leonardo" surname="Chávez" af="Lorem Ipsum"/>
      </header>     
    </div>
  );
}


const Texto = () => {
  return (
  <h2 className='mensajeTextoGrande'>Activitat on hem de crear un component i passar diferents valors</h2>
  )
}

const DivGrandeUno = (props) => {
  return (
      <div className='DIV1'>
        <div className='childDIV1'>
          <img className='imagen' src={pasta} alt=''/>  
        </div>
        <div className='alinearTexto'>
          <h3 className='Textos'>{props.name}</h3>
          <h4 className='Textos'>{props.surname}</h4>
          <p className='Textos'>{props.af}</p>
        </div>
      </div>
     )

}



export default App;
