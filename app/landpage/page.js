import Cta from "../../components/cta";
import Features from "../../components/features";
import Footer from "../../components/footer";
import Main from "../../components/main";
import Nav from "../../components/nav";
import Testmotion from "../../components/testmotion";
import Home from "../../styles/Home.module.css";

export default function Page() {
    return <>
    <div className={ Home.main }>
      <Nav />          
      <Main />
      <Features />
      <Testmotion />
      <Cta />
      <Footer />
    </div>
        
    </>;
  }