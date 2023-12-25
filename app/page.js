import Image from "next/image";
import Slider from "./ui/slider";
import Carousel from "./ui/homepage/carousel";

export default function Home() {
  const carouselData = [
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
    {
      title: "Baba merabamerabamerabamerabamerabamerabamerabameraba",
      category: "Finans",
      img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    },
  ];
  return (
    <main className="container flex flex-wrap">
      <Carousel title="Spor" data={carouselData}></Carousel>
      <Carousel title="Spor" data={carouselData}></Carousel>
      <Carousel title="Spor" data={carouselData}></Carousel>
      <Carousel title="Spor" data={carouselData}></Carousel>
      <Carousel title="Spor" data={carouselData}></Carousel>
    </main>
  );
}
