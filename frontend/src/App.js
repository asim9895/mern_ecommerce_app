import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

const App = () => {
  return (
    <>
      <Header />
      <Container style={{ marginTop: 100 }}>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/product/:id' component={ProductDetails} />
          <Route path='/cart/:id?' component={Cart} />
        </Switch>
      </Container>
      <Footer />
    </>
  );
};

export default App;
