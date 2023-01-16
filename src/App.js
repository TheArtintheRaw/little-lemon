import "./App.css";
import ReserveATable from "./components/ReserveATable";
import Menu from "./components/Menu";
import Login from "./components/Login";



// Header component
const Header = () => (
  <header className="header">
    <h1 className="header__title">Little Lemon</h1>
    <Login />
  </header>
);

// Navigation component
const Nav = () => {
  return (
      <nav className="navbar">
          <ul className="navbar__links">
              <li className="navbar__link">
                  <a href="#home">Home</a>
              </li>
              <li className="navbar__link">
                  <a href="#menu">Menu</a>
              </li>
              <li className="navbar__link">
                  <a href="#reserve">Reserve a table</a>
              </li>
              <li className="navbar__link">
                  <a href="#order">Order Online</a>
              </li>
          </ul>
      </nav>
  );
};

// Main component
function Main() {
  return (
    <main className="main">
      <Menu id="menu" />
      <ReserveATable id="reserve-a-table" />
      <OrderOnline id="order-online" />
    </main>
  );
}

// Order Online component
const OrderOnline = () => (
  <section className="order-online">
    <h2 className="order-online__title">Order Online</h2>
    <button className="order-online__button">Order Now</button>
  </section>
);

// Footer component
const Footer = () => (
  <footer className="footer">
    <p className="footer__copyright">Copyright Little Lemon</p>
  </footer>
);

// App component
const App = () => (
  <div className="app">
    <Header />
    <Nav />
    <Main />
    <Footer />
  </div>
);

export default App;
