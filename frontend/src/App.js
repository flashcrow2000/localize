import { BrowserRouter } from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import { LocalizedRoutes } from './components/routes/LocalizedRoutes';
import Header from './components/header/header';

function App() {
  const [locale, setLocale] = useState('en');

  const handleLocaleChange = (ev) => {
    console.log(`language set to ${ev.target.value}`)
    setLocale(ev.target.value)
  }

  return (
    <div className="App">
      <BrowserRouter>
          <Header currentLocale={locale} onLanguageSelect={handleLocaleChange}></Header>
          <LocalizedRoutes locale={locale}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
