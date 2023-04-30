const StatistiquesSection = () => {
  return (
    <section className="max-w-screen-lg px-4 mx-auto my-20 relative flex items-center flex-col">
      <div
        className="w-[90%]  absolute -bottom-3 bg-blue-300  flex flex-col h-96  rounded-[50px] before:absolute before:bg-blue-300  items-center "
        style={{ transform: "perspective(100px) rotateX(2deg)" }}
      ></div>
      <div
        className="w-full relative bg-gradient-to-br from-blue-400 justify-around to-blue-700 flex flex-col h-96  rounded-[50px] before:absolute before:bg-blue-300  items-center "
        style={{ transform: "perspective(80px) rotateX(1deg)" }}
      >
        <div className="max-w-md text-center ">
          <h1 className="text-slate-50 font-semibold text-2xl leading-relaxed">
            در این پست آخرین داده های مربوط به کووید-19 آمده است
          </h1>
        </div>
        <div className="flex items-center justify-between gap-x-7 text-slate-50 ">
            <StatistiquesPatient number={125000} desc={"بیماران بهبود یافته"} />
            <StatistiquesPatient number={92000} desc={"بیماران تحت درمان"} border={true} />
            <StatistiquesPatient number={25000} desc={"بیماران در قرنطینه"} border={true} />
            <StatistiquesPatient number={120} desc={"بینارستان فعال"} border={true} />
        </div>
      </div>
    </section>
  );
};

export default StatistiquesSection;

const StatistiquesPatient = ({ number, desc  , border=false}) => {
  return (
    <div className={`flex flex-col px-10 py-4 ${border ? 'border-r' : ''} border-slate-400`}>
      <span className="text-5xl font-bold">{number > 999 ? `${number/1000}K` : number }</span>
      <span className="text-sm">{desc}</span>
    </div>
  );
};
