export function GoogleAds({ checked, onChange }) {
  return (
    <>
      <input type="checkbox" checked={checked} onChange={onChange} /> Google Ads
      campaign (200€) <br />
    </>
  );
}

export default GoogleAds;
