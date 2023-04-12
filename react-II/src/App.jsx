import { useEffect, useState } from "react";
import { PopUp } from "./styled.js";

function App() {
  const [serviceTotal, setServiceTotal] = useState(0);
  debugger;
  const [finalTotal, setFinalTotal] = useState(0);
  const [webpageChecked, setWebpageChecked] = useState(false);
  const [consultationChecked, setConsultationChecked] = useState(false);
  const [googleAdChecked, setGoogleAdChecked] = useState(false);
  const [numPages, setNumPages] = useState(0);
  const [numLangs, setNumLangs] = useState(0);

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

  const readLang = (event) => {
    setNumLangs(event.target.value);
  };

  useEffect(() => {
    if (numLangs < 0 && numPages < 0) {
      setFinalTotal(serviceTotal);
    } else if (finalTotal !== serviceTotal + numPages * numLangs * 30);
    setFinalTotal(serviceTotal + numPages * numLangs * 30);
  }, [numLangs, numPages, serviceTotal]);

  return (
    // welcome === true ? (
    //   <Welcome readMore={click} />
    // ) :
    <div>
      <p>What do you want to do?</p>
      <input type="checkbox" checked={webpageChecked} onChange={addWeb} /> A web
      page (500€)
      <br />
      {webpageChecked === true ? (
        <PopUp>
          Number of pages <input type="number" min="0" onChange={readPages} />
          <br />
          <br />
          Number of languages{" "}
          <input type="number" min="0" onChange={readLang} />
        </PopUp>
      ) : null}
      <input
        type="checkbox"
        checked={consultationChecked}
        onChange={addConsult}
      />{" "}
      A SEO consultancy (300€) <br />
      <input type="checkbox" checked={googleAdChecked} onChange={addGoogle} /> A
      Google Ads campaign (200€) <br />
      <p>Price: {finalTotal}€</p>
    </div>
  );
}

export default App;
