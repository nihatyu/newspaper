import { Carousel } from "flowbite-react";
import { newsData } from "@/app/lib/placeholder-data";
import Image from "next/image";

const Slider = () => {
  return (
    <div className="container h-72 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        {newsData.slice(0, 5).map((data) => (
          <Image
            key={data.id}
            src={data.img}
            alt={data.spot}
            width={200}
            height={200}
            priority
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
