import Carousel from "./ui/homepage/carousel";
import { newsData } from "./lib/data";
import Slider from "./ui/homepage/slider";

export default function Home({ params }) {
  const carouselData = [...newsData];
  console.log("params :>> ", params);

  return (
    <main className="container flex flex-wrap">
      <Slider />
      {/* <Carousel /> */}
    </main>
  );
}
