const { intToString } = require("@/utils/intToString");

const MapDesc = ({ data }) => {
  return (
    <div className="flex items-center justify-between w-full gap-x-2 pt-2">
      <MapCalc name={"تعداد"} num={data.cases} />
      <MapCalc name={"بهبود"} num={data.recovered} />
      <MapCalc name={"مرگ و میر"} num={data.deaths} />
    </div>
  );
};

export default MapDesc;

const MapCalc = ({ num, name }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-blue-950 font-bold text-lg ">
        {intToString(num)}
      </span>
      <span className="text-gray-400 text-xs">{name}</span>
    </div>
  );
};
