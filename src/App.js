import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import CatalogPage from './components/pages/CatalogPage'
import ContactPage from './components/pages/ContactPage'
import Page404 from './components/pages/Page404'
import ProductPage from './components/pages/ProductPage'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainLayout from './components/MainLayout/MainLayout'

function App() {
  return (
    <Router>
      <Header />
      <MainLayout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/catalog" component={CatalogPage} />
          <Route path="/contacts" component={ContactPage} />
          <Route path="/products/:id" component={ProductPage} />
          <Route component={Page404}/>
        </Switch>
      </MainLayout>
      <Footer />
    </Router>
  );
}

export default App;
