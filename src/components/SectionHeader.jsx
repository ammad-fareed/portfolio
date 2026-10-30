function SectionHeader({ kicker, title, intro }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span className="eyebrow-line" /> {kicker}
      </p>
      <h2>{title}</h2>
      <p>{intro}</p>
    </div>
  );
}

export default SectionHeader;
