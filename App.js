import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header'
import CatInfo from './containers/CatInfo/CatInfo';



function App() {
  return (
    <div className="App">
     <Header/>
     <CatInfo />
 
    </div>
  );
}

export default App;
