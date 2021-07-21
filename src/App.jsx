import MyNavbar from './components/navbar/Navbar';
import MyTable from './components/table/Table'
import store from './redux/store'
import { Provider } from 'react-redux'
import './App.css';
function App() {
  return (
    <div>
      <Provider store={store}>
        <MyNavbar />
        <MyTable />
      </Provider>
    </div>
  );
}
export default App;
