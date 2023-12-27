// Carousel.jsx

"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const truncate = (text, max) => {
  return text.length > max ? `${text.slice(0, max)}...` : text;
};

const Carousel = ({ data, title }) => {
  const cardCount = data.length;
  const cardsPerPage = 6; // lg ekran için
  const cardWidth = 350; // Kartın genişliği
  const cardHeight = 250; // Kartın yüksekliği
  const cardsToScroll = Math.min(cardsPerPage, cardCount); // Her seferinde kaydırılacak kart sayısı
  const totalWidth = cardCount * (cardWidth / cardsToScroll);

  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef(null);

  const handleNext = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(Math.min(newIndex, cardCount - cardsPerPage));
  };

  const handlePrev = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(Math.max(newIndex, 0));
  };

  return (
    <div className="w-full my-7">
      <Link href={title} className="text-3xl font-bold mb-4">
        {title}
      </Link>
      <div className="relative overflow-hidden" ref={containerRef}>
        {/* Sol ok */}
        <div className="flex items-center justify-center absolute inset-y-0 left-0 z-10">
          {currentIndex > 0 && (
            <div
              className="rounded-full p-2 cursor-pointer bg-gradient-to-r from-red-500 to-pink-500 transform hover:scale-150 transition-transform duration-300"
              onClick={handlePrev}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-white text-2xl"
              />
            </div>
          )}
        </div>

        <div
          className="flex transition-transform ease-in-out duration-300 transform relative "
          style={{
            transform: `translateX(${-currentIndex * (100 / cardsToScroll)}%)`,
            width: `${totalWidth}px`, // Tüm kartları yan yana sıralamak için genişlik ayarı
          }}
        >
          {/* Kartlar */}
          {data.map((item, i) => (
            <Link
              href="/"
              key={i}
              className={`w-full lg:w-1/${cardsPerPage} p-4 cursor-pointer `}
            >
              <div className="bg-gray-200 p-4 rounded-lg hover:bg-gray-300 border border-gray-200 shadow dark:text-white dark:bg-gray-800 dark:border-gray-700 ">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={cardWidth}
                  height={cardHeight}
                  layout="responsive" // responsive layout ekleyerek boyutların korunmasını sağlar
                  priority // resmin öncelikli olarak yüklenmesini sağlar
                  className="w-full h-full object-cover rounded"
                />
                <h3
                  className="text-lg font-semibold mt-4 mb-2"
                  style={{ maxHeight: `${cardHeight * 0.25}px` }} // Metnin taşma sorununu önlemek için maksimum yükseklik belirleniyor
                >
                  {truncate(item.title, 20)}
                </h3>
                <p className="text-sm text-gray-600 dark:text-white">
                  {item.category}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Sağ ok */}
        <div className="flex items-center justify-center absolute inset-y-0 right-0 z-10">
          {currentIndex + cardsPerPage < cardCount && (
            <div
              className="rounded-full p-2 cursor-pointer bg-gradient-to-l from-red-500 to-pink-500 transform hover:scale-150 transition-transform duration-300"
              onClick={handleNext}
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-white text-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
