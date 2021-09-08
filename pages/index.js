import MainBanner from '../containers/MainBanner/MainBanner';
import CategoryCards from '../containers/CategoryCards/CategoryCards';
import Welcome from '../components/Welcome/Welcome';

const Homepage = () => {
  return (
    <>
      <MainBanner />
      <CategoryCards />
      <Welcome />
    </>
  );
};

export default Homepage;
