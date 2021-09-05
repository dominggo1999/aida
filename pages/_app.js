import GlobalStyles from '../styles/GlobalStyles';
import Navbar from '../components/Navbar/Navbar';

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Navbar />
    <Component {...pageProps} />
  </>
);

export default App;
