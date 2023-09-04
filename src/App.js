import './App.css';

import Navbar from './componentes/Section/Navbar'
import Logo from './componentes/Section/Logo'
import Pesquisa from './componentes/Section/pesquisa'
import Footer from './componentes/Section/Footer'

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Logo/>
      <Pesquisa/>
      <Footer/>
      
      
    </div>
  )
}

export default App;
