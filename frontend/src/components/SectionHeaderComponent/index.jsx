const SectionHeaderComponent = ({title,content}) => {
  return (
    <section className="mt-5">
      <h1 className="text-3xl font-bold">{title}</h1>
      <h3>{content}</h3>
      <div className="divider"></div>
    </section>
  );
};

export default SectionHeaderComponent;
