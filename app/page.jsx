import Carousel from "./ui/homepage/carousel";
import { newsData } from "./lib/data";
import Slider from "./ui/homepage/slider";

export default function Home({ params }) {
  const carouselData = [...newsData];

  return (
    <main className="container flex flex-wrap bg-slate-800 ">
      <Slider />
      {/* <Carousel /> */}
    </main>
  );
}
