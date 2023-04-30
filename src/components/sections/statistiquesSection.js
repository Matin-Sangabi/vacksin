const StatistiquesSection = () => {
  return (
    <section className="max-w-screen-lg px-4 mx-auto my-20 relative flex items-center flex-col">
      <div
        className="w-[90%]  absolute -bottom-3 bg-blue-300  flex flex-col h-96  rounded-[50px] before:absolute before:bg-blue-300  items-center "
        style={{ transform: "perspective(100px) rotateX(2deg)" }}
      ></div>
      <div
        className="w-full relative bg-gradient-to-br from-blue-400 to-blue-700 flex flex-col h-96  rounded-[50px] before:absolute before:bg-blue-300  items-center "
        style={{ transform: "perspective(100px) rotateX(2deg)" }}
      ></div>
    </section>
  );
};

export default StatistiquesSection;
