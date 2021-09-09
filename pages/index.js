import MainBanner from '../containers/MainBanner/MainBanner';
import CategoryCards from '../containers/CategoryCards/CategoryCards';
import Welcome from '../components/Welcome/Welcome';
import SubscribeNewsletter from '../components/SubscribeNewsletter/SubscribeNewsletter';

const Homepage = () => {
  return (
    <>
      <MainBanner />
      <CategoryCards />
      <Welcome />
      <SubscribeNewsletter />
    </>
  );
};

export default Homepage;
