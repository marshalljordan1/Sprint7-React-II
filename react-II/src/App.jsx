import { useState } from "react";
import "./App.css";

function App() {
  const [total, setTotal] = useState(0);
  const [webpageChecked, setWebpageChecked] = useState(false);
  const [consultationChecked, setConsultationChecked] = useState(false);
  const [googleAdChecked, setGoogleAdChecked] = useState(false);

  const webpage = 500;
  const consultation = 300;
  const googleAd = 200;

  const addWeb = (event) => {
    setTotal(event.target.checked ? total + webpage : total - webpage);
    setWebpageChecked(event.target.checked);
  };

  const addConsult = (event) => {
    setTotal(
      event.target.checked ? total + consultation : total - consultation
    );
    setConsultationChecked(event.target.checked);
  };

  const addGoogle = (event) => {
    setTotal(event.target.checked ? total + googleAd : total - googleAd);
    setGoogleAdChecked(event.target.checked);
  };

  return (
    <div>
      <p>What do you want to do?</p>
      <input type="checkbox" checked={webpageChecked} onChange={addWeb} /> A web
      page (500€)
      <br />
      <input
        type="checkbox"
        checked={consultationChecked}
        onChange={addConsult}
      />{" "}
      A SEO consultancy (300€) <br />
      <input type="checkbox" checked={googleAdChecked} onChange={addGoogle} /> A
      Google Ads campaign (200€) <br />
      <p>Price: {total}€</p>
    </div>
  );
}

export default App;
