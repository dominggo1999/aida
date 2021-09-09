import GlobalStyles from '../styles/GlobalStyles';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default App;
