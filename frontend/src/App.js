import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

const App = () => {
  return (
    <>
      <Header />
      <Container style={{ marginTop: 100 }}>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/product/:id' component={ProductDetails} />
          <Route path='/cart/:id?' component={Cart} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Container>
      <Footer />
    </>
  );
};

export default App;
