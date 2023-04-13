import { Decrease, Increase, PopUp } from "../src/styled";

function Webpage({
  checked,
  onChange,
  numPages,
  onNumPagesChange,
  numLang,
  onNumLangChange,
  onPageIncrement,
  onPageDecrement,
  onLangIncrement,
  onLangDecrement,
}) {
  return (
    <>
      <p>What do you want to do?</p>
      <input type="checkbox" checked={checked} onChange={onChange} /> A web page
      (500€)
      <br />
      {checked && (
        <PopUp>
          Number of pages <Increase onClick={onPageIncrement}>+</Increase>
          <input
            style={{ width: "30px" }}
            type="number"
            min="0"
            value={numPages}
            onChange={onNumPagesChange}
          />{" "}
          <Decrease onClick={onPageDecrement}>—</Decrease>
          <br />
          <br />
          Number of languages <Increase onClick={onLangIncrement}>+</Increase>
          <input
            style={{ width: "30px" }}
            type="number"
            min="0"
            value={numLang}
            onChange={onNumLangChange}
          />{" "}
          <Decrease onClick={onLangDecrement}>—</Decrease>
        </PopUp>
      )}
    </>
  );
}

export default Webpage;
