import Cta from "../components/cta";
import Features from "../components/features";
import Footer from "../components/footer";
import Main from "../components/main";
import Nav from "../components/nav";
import Testmotion from "../components/testmotion";

export default function Page() {
    return <>
    <div>
      <Nav />          
      <Main />
      <Features />
      <Testmotion />
      <Cta />
      <Footer />
    </div>
        
    </>;
  }