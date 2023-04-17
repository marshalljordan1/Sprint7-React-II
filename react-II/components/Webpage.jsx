import { Decrease, Increase, PopUp } from "../src/styled";
import { IncreaseButton, DecreaseButton } from "./Buttons";

function Webpage({
  checked,
  onChange,
  numPages,
  onNumPagesChange,
  numLang,
  onNumLangChange,
}) {
  return (
    <>
      <p>What do you want to do?</p>
      <input type="checkbox" checked={checked} onChange={onChange} /> A web page
      (500€)
      <br />
      {checked && (
        <PopUp>
          Number of pages <IncreaseButton onClick={increase}>+</IncreaseButton>
          <input
            style={{ width: "30px" }}
            type="number"
            min="0"
            value={numPages}
            onChange={onNumPagesChange}
          />{" "}
          <DecreaseButton onClick={decrease}>—</DecreaseButton>
          <br />
          <br />
          Number of languages{" "}
          <IncreaseButton onClick={increase}>+</IncreaseButton>
          <input
            style={{ width: "30px" }}
            type="number"
            min="0"
            value={numLang}
            onChange={onNumLangChange}
          />{" "}
          <DecreaseButton onClick={decrease}>—</DecreaseButton>
        </PopUp>
      )}
    </>
  );
}

export default Webpage;
