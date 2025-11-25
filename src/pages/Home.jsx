import Services from "../components/Services";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <div className="container mx-auto px-5">
        <Services />
      </div>
    </>
  );
};

export default Home;
