import './css/App.css';
import MainForm from './components/MainForm'
import Welcome from './components/Welcome';
import SubmitButton from './components/SubmitButton';

function App() {

  return (
    
    <div className='MainApp'>
      <Welcome/>
      <MainForm/>
      <SubmitButton/>
    </div>
  );
}

export default App;
