import "./App.scss";
import Header from "./components/Header/Header";
import SearchCats from "./containers/SearchCats/SearchCats";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchCats />
    </div>
  );
}

export default App;
