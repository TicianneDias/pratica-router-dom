import Global from './style/Global';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <Global />
      <NavBar />
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
