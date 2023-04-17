import { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import Webpage from "../components/Webpage";
import Consultation from "../components/Consultation";
import GoogleAds from "../components/GoogleAds";
import Price from "../components/Price";
import "./index.css";

function App() {
  const [welcome, setWelcome] = useState(true);
  const [serviceTotal, setServiceTotal] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [webpageChecked, setWebpageChecked] = useState(false);
  const [consultationChecked, setConsultationChecked] = useState(false);
  const [googleAdChecked, setGoogleAdChecked] = useState(false);
  const [numPages, setNumPages] = useState(0);
  const [numLangs, setNumLangs] = useState(0);

  const click = () => {
    setWelcome(false); 
  } 

  // Defining a function addWeb which will be called when the "A web page" checkbox is clicked
  const addWeb = (event) => {
    const webpage = 500;
    setServiceTotal(
      event.target.checked ? serviceTotal + webpage : serviceTotal - webpage
    ); // Updating the serviceTotal based on whether the checkbox is checked or unchecked
    setWebpageChecked(event.target.checked); // Updating the webpageChecked state variable based on whether the checkbox is checked or unchecked
  };

  // Defining a function addWeb which will be called when the "addConsult" checkbox is clicked
  const addConsult = (event) => {
    const consultation = 300;
    setServiceTotal(
      event.target.checked
        ? serviceTotal + consultation
        : serviceTotal - consultation
    );
    setConsultationChecked(event.target.checked);
  };

  // Defining a function addWeb which will be called when the "addGoogle" checkbox is clicked
  const addGoogle = (event) => {
    const googleAd = 200;
    setServiceTotal(
      event.target.checked ? serviceTotal + googleAd : serviceTotal - googleAd
    );
    setGoogleAdChecked(event.target.checked);
  };

  const readPages = (event) => {
    setNumPages(event.target.value);
  };

  const increasePages = () => {
    setNumPages(numPages + 1);
  };

  const decreasePages = () => {
    numPages > 0 ? setNumPages(numPages - 1) : setNumPages(0);
  };

  const readLang = (event) => {
    setNumLangs(event.target.value);
  };
  const increaseLangs = () => {
    setNumLangs(numLangs + 1);
  };

  const decreaseLangs = () => {
    numLangs > 0 ? setNumLangs(numLangs - 1) : setNumLangs(0);
  };

  useEffect(() => {
    if (!webpageChecked) {
      setNumLangs(0);
      setNumPages(0);
    } else if (finalTotal !== serviceTotal + numPages * numLangs * 30);
    setFinalTotal(serviceTotal + numPages * numLangs * 30);
  }, [numLangs, numPages, serviceTotal]);

  return (
    welcome === true ? (
    <Welcome click={click} />
    ) :
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
      <Price total={finalTotal} />
    </div>
  );
}

export default App;
