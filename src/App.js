import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import CatalogPage from './components/pages/CatalogPage'
import ContactPage from './components/pages/ContactPage'
import Page404 from './components/pages/Page404'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/catalog" component={CatalogPage} />
          <Route path="/contacts" component={ContactPage} />
          <Route component={Page404}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
