import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './pages';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!)
  .render(<HashRouter> <App /> </HashRouter>)
