import Image from "next/image";
import Breadscrumb from "../breadscrumb";

const HaberDetay = ({ title, spot, img, paragraph }) => {
  return (
    // <!-- Container for demo purpose -->
    <div class="container my-14 mx-auto md:px-6">
      <Breadscrumb />
      {/* <!-- Section: Design Block --> */}
      <section class="my-10">
        <h1 class="mb-4 text-3xl font-bold">{title}</h1>

        <p class="mb-6">{spot}</p>

        <Image
          src={img}
          className="mb-6 w-full max-h-fit object-contain rounded-lg shadow-lg dark:shadow-black/20"
          alt=""
          width={500}
          height={500}
        />

        <p>Haberin eklendiği tarih</p>
        <p>yazı boyutu büyütüp küçültme</p>

        <p>{paragraph}</p>
      </section>
      {/* <!-- Section: Design Block --> */}
    </div>
    // <!-- Container for demo purpose -->
  );
};

export default HaberDetay;
