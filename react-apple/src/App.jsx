import "../src/Common-Resource/css/bootstrap.css";
import "../src/Common-Resource/css/styles.css";
import Header from "./Components/Header/Header";
import Alert from "./Components/Alert/Alert";
import FirstSection from "./Components/FirstSection/FirstSection";
import SecondSection from "./Components/SecondSection/SecondSection";
import ThirdSection from "./Components/ThirdSection/ThirdSection";
import FourthSection from "./Components/FourthSection/FourthSection";
import FifthSection from "./Components/FifthSection/FifthSection";
import SixthSection from "./Components/SixthSection/SixthSection";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>its working</h1> */}
      <Header />
      <Alert />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />

      <Footer />
    </>
  );
}

export default App;
