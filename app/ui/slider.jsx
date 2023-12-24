const Slider = () => {
  return (
    <div className="relative w-full bg-black">
      {/* Sol ok */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        {/* Örnek: <img src="left-arrow.png" alt="Left Arrow" /> */}
      </div>

      {/* Sağ ok */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        {/* Örnek: <img src="right-arrow.png" alt="Right Arrow" /> */}
      </div>

      {/* Resim bileşeni */}
      <div className="overflow-hidden">
        Merhaba
        {/* Örnek: <img src="your-image.jpg" alt="Slider Image" /> */}
      </div>
    </div>
  );
};

export default Slider;
