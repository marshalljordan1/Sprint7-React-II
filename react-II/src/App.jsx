import { useEffect, useState } from "react";
// import Welcome from "../components/Welcome";
import Webpage from "../components/Webpage";
import Consultation from "../components/Consultation";
import GoogleAds from "../components/GoogleAds";
import Price from "../components/Price";
import "./index.css";

function App() {
  // const [welcome, setWelcome] = useState(true);
  const [webpageChecked, setWebpageChecked] = useState(false);
  const [consultationChecked, setConsultationChecked] = useState(false);
  const [googleAdChecked, setGoogleAdChecked] = useState(false);
  const [numPages, setNumPages] = useState(0);
  const [numLangs, setNumLangs] = useState(0);
  const [total, setTotal] = useState(0);

  // const click = () => {
  //   setWelcome(false);
  // }

  // Defining a function addWeb which will be called when the "A web page" checkbox is clicked
  const addWeb = (event) => {
    setWebpageChecked(event.target.checked); // Updating the webpageChecked state variable based on whether the checkbox is checked or unchecked
    localStorage.setItem(
      "webpageChecked",
      JSON.stringify(event.target.checked)
    );
  };

  // Defining a function addWeb which will be called when the "addConsult" checkbox is clicked
  const addConsult = (event) => {
    setConsultationChecked(event.target.checked);
    localStorage.setItem(
      "consultationChecked",
      JSON.stringify(event.target.checked)
    );
  };

  // Defining a function addWeb which will be called when the "addGoogle" checkbox is clicked
  const addGoogle = (event) => {
    setGoogleAdChecked(event.target.checked);
    localStorage.setItem(
      "googleAdChecked",
      JSON.stringify(event.target.checked)
    );
  };

  const readPages = (event) => {
    setNumPages(event.target.value);
  };

  const increasePages = () => {
    setNumPages(numPages + 1);
    localStorage.setItem("numPages", JSON.stringify(numPages + 1));
  };

  const decreasePages = () => {
    numPages > 0 ? setNumPages(numPages - 1) : setNumPages(0);
    localStorage.setItem(
      "numPages",
      JSON.stringify(numPages > 0 ? numPages - 1 : 0)
    );
  };

  const readLang = (event) => {
    setNumLangs(event.target.value);
  };
  const increaseLangs = () => {
    setNumLangs(numLangs + 1);
    localStorage.setItem("numLangs", JSON.stringify(numLangs + 1));
  };

  const decreaseLangs = () => {
    numLangs > 0 ? setNumLangs(numLangs - 1) : setNumLangs(0);
    localStorage.setItem(
      "numLangs",
      JSON.stringify(numLangs > 0 ? numLangs - 1 : 0)
    );
  };

  useEffect(() => {
    localStorage.setItem("total", JSON.stringify(total));
  }, [total]);

  useEffect(() => {
    calculateTotal();
  }, [
    webpageChecked,
    consultationChecked,
    googleAdChecked,
    numLangs,
    numPages,
  ]);

  const calculateTotal = () => {
    // TODO: move this logic to backend
    let sum = 0;
    if (webpageChecked) sum += 500;
    if (numPages && numLangs) sum += numPages * numLangs * 30;
    if (!webpageChecked) {
      setNumLangs(0);
      setNumPages(0);
    }
    sum += consultationChecked && 300;
    sum += googleAdChecked && 200;
    setTotal(sum);
  };

  useEffect(() => {
    const savedPages = localStorage.getItem("numPages");
    const savedLangs = localStorage.getItem("numLangs");
    const savedCheckedWebpage = localStorage.getItem("webpageChecked");
    const savedCheckedConsultation = localStorage.getItem(
      "consultationChecked"
    );
    const savedCheckedGoogleAds = localStorage.getItem("googleAdChecked");
    const savedTotal = localStorage.getItem("total");

    if (savedCheckedWebpage) {
      setWebpageChecked(JSON.parse(savedCheckedWebpage));
    }
    if (savedCheckedConsultation) {
      setConsultationChecked(JSON.parse(savedCheckedConsultation));
    }

    if (savedCheckedGoogleAds) {
      setGoogleAdChecked(JSON.parse(savedCheckedGoogleAds));
    }
    if (savedPages) {
      setNumPages(JSON.parse(savedPages));
    }
    if (savedLangs) {
      setNumLangs(JSON.parse(savedLangs));
    }
    if (savedTotal) {
      setTotal(parseInt(savedTotal));
    }
  }, []);

  return (
    // welcome === true ? (
    // <Welcome click={click} />
    // ) :
    <div>
      <Webpage
        checked={webpageChecked}
        onChange={addWeb}
        numPages={numPages}
        onNumPagesChange={readPages}
        numLang={numLangs}
        onNumLangChange={readLang}
        onPageIncrement={increasePages}
        onPageDecrement={decreasePages}
        onLangIncrement={increaseLangs}
        onLangDecrement={decreaseLangs}
      />
      <Consultation checked={consultationChecked} onChange={addConsult} />
      <GoogleAds checked={googleAdChecked} onChange={addGoogle} />
      <Price total={total} />
    </div>
  );
}

export default App;
