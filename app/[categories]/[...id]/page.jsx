import Image from "next/image";
import Link from "next/link";
import HaberDetay from "@/app/ui/haber-detay/haber-detay";

import { newsData } from "@/app/lib/data";

const Page = ({ params }) => {
  // Destructuring ile params objesinden id'yi çıkar
  const { id } = params;

  console.log("id :>> ", id);

  // id'yi kullanarak uygun haber nesnesini bul
  const selectedNews = newsData.find((news) => news.id === id[0]);

  // Eğer haber bulunduysa, HaberDetay component'ine props olarak gönder
  if (selectedNews) {
    const { title, spot, img, paragraph } = selectedNews;

    console.log("title :>> ", title);

    return (
      <div>
        <HaberDetay title={title} spot={spot} img={img} paragraph={paragraph} />
      </div>
    );
  } else {
    // Eğer haber bulunamadıysa, isteğe bağlı olarak bir hata mesajı gönderebilirsiniz.
    return <div>Haber bulunamadı.</div>;
  }
};

export default Page;
