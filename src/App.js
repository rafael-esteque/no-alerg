import './App.css';
import Logo from './componentes/Logo';
import background from './imagens/lightwood.jpg';

function App() {
  return (
    <div className='App' style={{ 
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat'
    }}>
      <header className='App-header'>
        <Logo></Logo>
      </header>
    </div>
  );
}

export default App;
