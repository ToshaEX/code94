import './App.css';
import {
  Navbar,
  Title,
  PrimaryButton,
  SearchBar,
  SecondaryButton,
  ProductList
} from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title title={'Products'} />
      <SearchBar placeholder={'Search for products'} />
      <div style={{ display: 'flex' }}>
        <PrimaryButton label={'New Product'} />
        <SecondaryButton onClick={() => {}} />
      </div>
      <ProductList />
    </div>
  );
}

export default App;
