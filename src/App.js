import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Registration from './Components/Registration'
import Header from './Components/Header'
import ViewRegistration from './Components/ViewRegistration';
import Hooksexample from './Components/HooksExample';
function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <Header></Header>
    
    <Route exact path="/" component={Registration}/>
    <Route  path="/view" component={ViewRegistration}/>
    <Route path="/hooks" component={Hooksexample} />
    

    </BrowserRouter>
    
    
     
    </div>
  );
}

export default App;
