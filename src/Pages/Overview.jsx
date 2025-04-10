import { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import Title from "./Title";
import OverviewItem from "./OverviewItem";

const Overview = () => {
  const [duLieu, setDuLieu] = useState([]);
  const [dangTai, setDangTai] = useState(true); 

  useEffect(() => {
    const layDuLieuAPI = async () => {
      try {
        const phanHoi = await fetch(
          "https://67ece4444387d9117bbb5ab5.mockapi.io/api/v1/overview"
        );
        const duLieuAPI = await phanHoi.json();
        console.log("Dữ liệu API:", duLieuAPI);
        const duLieuDaXuLy = duLieuAPI.map((muc) => {
          let thayDoi = muc.change;
          if (typeof thayDoi !== "string") {
            thayDoi = `${thayDoi >= 0 ? "+" : ""}${thayDoi}% percent of change`;
          }
          return { ...muc, change: thayDoi };
        });

        setDuLieu(duLieuDaXuLy); 
      } catch (loi) {
        console.log("Lỗi khi lấy dữ liệu:", loi); 
      } finally {
        setDangTai(false); 
      }
    };
    layDuLieuAPI(); 
  }, []);

  if (dangTai) {
    return <div>Đang tải dữ liệu...</div>;
  }

  return (
    <div className="px-7 pt-7">
      <Title icon={MdDashboard} title="Overview" />
      <div className="flex justify-between gap-4">
        {(duLieu || []).map((muc) => (
          <OverviewItem
            key={muc.id}
            id={muc.id}
            tieuDe={muc.title}
            giaTri={muc.value}
            thayDoi={muc.change}
          />
        ))}
      </div>
    </div>
  );
};

export default Overview;