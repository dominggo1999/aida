import MainBanner from '../containers/MainBanner/MainBanner';
import CategoryCards from '../containers/CategoryCards/CategoryCards';
import Welcome from '../components/Welcome/Welcome';
import EditorsPicked from '../containers/EditorsPicked/EditorsPicked';

const Homepage = () => {
  return (
    <>
      <MainBanner />
      <CategoryCards />
      <Welcome />
      <EditorsPicked />
    </>
  );
};

export default Homepage;
