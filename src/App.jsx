import Global from './style/Global';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import NavBar from './components/NavBar';
import GoBackButton from './components/GoBackButton'

function App() {
  return (
    <>
      <Global />
      <NavBar />
      <Router>
        <AppRoutes />
      <GoBackButton />
      </Router>
    </>
  );
}

export default App;
