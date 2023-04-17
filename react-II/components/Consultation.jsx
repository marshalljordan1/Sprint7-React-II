function Consultation({ checked, onChange }) {
  return (
    <>
      <input type="checkbox" checked={checked} onChange={onChange} /> A SEO
      consultancy (300€) <br />
    </>
  );
}

export default Consultation;
