import Slider from "./ui/homepage/slider";
import ContentGroup from "./ui/homepage/content-group";

import { newsData } from "@/app/lib/data";

// Yardımcı fonksiyon: Verileri kategorilere göre gruplama
const groupByCategory = (data) => {
  const groupedData = {};
  data.forEach((item) => {
    const { category } = item;
    if (!groupedData[category]) {
      groupedData[category] = [];
    }
    groupedData[category].push(item);
  });
  return groupedData;
};

export default function Home({ params }) {
  // Verileri kategorilere göre gruplanmış hali
  const groupedNewsData = groupByCategory(newsData);

  // console.log("groupedNewsData :>> ", groupedNewsData);

  return (
    <main className="container flex flex-wrap bg-slate-800 ">
      <Slider />

      {/* Kategorilere göre ContentGroup componentlerini ekle */}
      {Object.keys(groupedNewsData).map((category) => (
        <ContentGroup key={category} data={groupedNewsData[category]} />
      ))}
    </main>
  );
}
