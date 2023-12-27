import Carousel from "./ui/homepage/carousel";
import { newsData } from "./lib/data";

export default function Home() {
  const carouselData = [...newsData];

  return (
    <main className="container flex flex-wrap">
      <Carousel data={carouselData} />
    </main>
  );
}
