import Image from "next/image";
import Slider from "./ui/homepage/slider";
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
      {Array(5)
        .fill()
        .map((_, index) => (
          <Carousel key={index} title="Spor" data={carouselData}></Carousel>
        ))}
    </main>
  );
}
