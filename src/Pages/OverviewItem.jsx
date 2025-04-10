import Icon from "./Icon";
import { IoCartOutline } from "react-icons/io5";
import { TfiMoney } from "react-icons/tfi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";

const OverviewItem = ({ tieuDe, giaTri, thayDoi }) => {
  const laTang = typeof thayDoi === "string" && thayDoi.includes("+");
  const mauThayDoi = laTang ? "text-green-500" : "text-red-500";

  const giaTriThayDoi = typeof thayDoi === "string"
    ? thayDoi.replace(" percent of change", "")
    : "0%";
  const mauNen = tieuDe === "Turnover" ? "bg-pink-100" : "bg-blue-50";
  const layBieuTuong = () => {
    switch (tieuDe) {
      case "Turnover":
        return IoCartOutline; 
      case "Profit":
        return TfiMoney; 
      case "New customer":
        return FaRegUserCircle; 
      default:
        return null;
    }
  };

  return (
    <div className={`flex-1 p-4 rounded-lg shadow-md ${mauNen}`}>
      <div className="flex justify-between items-center">
        <h3 className="text-gray-500 font-medium">{tieuDe}</h3>
        <div className="text-gray-400">
          <Icon icon={layBieuTuong()} />
        </div>
      </div>
      <div className="mt-2">
        <p className="text-2xl font-bold">{giaTri}</p>
        <div className="flex items-center">
          <IoMdArrowDropup
            className={`text-sm ${mauThayDoi} ${!laTang ? "rotate-180" : ""}`}
          />
          <p className={`text-sm ${mauThayDoi}`}>
            {giaTriThayDoi}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverviewItem;