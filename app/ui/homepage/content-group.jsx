"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Card } from "flowbite-react";

const ContentGroup = ({ data }) => {
  const useMediaQuery = (query) => {
    const [matches, setMatches] = React.useState(false);

    React.useEffect(() => {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);

      const handler = (event) => setMatches(event.matches);
      mediaQuery.addListener(handler);

      return () => mediaQuery.removeListener(handler);
    }, [query]);

    return matches;
  };

  const xxl = useMediaQuery("(min-width: 1500px)");
  const xl = useMediaQuery("(min-width: 1200px)");
  const lg = useMediaQuery("(min-width: 992px)");
  const md = useMediaQuery("(min-width: 768px)");
  const sm = useMediaQuery("(min-width: 100px)");

  const getCardCount = () => {
    if (xxl) return 6;
    if (xl) return 5;
    if (lg) return 4;
    if (md) return 3;
    if (sm) return 1;
    return 6; // Default value
  };
  console.log("data :>> ", data);
  return (
    <div className="container flex flex-col m-4">
      <Link
        href={data.length > 0 ? `/${data[0].url}` : "/"}
        className="flex justify-start items-start m-5 text-2xl font-bold tracking-tight text-gray-200 dark:text-white"
      >
        {data.length > 0 ? data[0].category : " "}
      </Link>
      <div className={`flex overflow-hidden m-2`}>
        {data.slice(0, getCardCount()).map((item) => (
          <Link href={`${item.url}/${item.id}`} className="w-full m-2">
            <Card
              key={item.id}
              renderImage={() => (
                <Image
                  width={400}
                  height={400}
                  src={item.img}
                  alt={item.title}
                />
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight line-clamp-2 text-gray-900 dark:text-white">
                {item.title}...
              </h5>
              <p className="font-normal line-clamp-3 text-gray-700 dark:text-gray-400">
                {item.paragraph}...
              </p>
            </Card>
          </Link>
        ))}
      </div>
      <Link
        href={data.length > 0 ? `/${data[0].url}` : "/"}
        className="flex m-5 text-lg font-bold tracking-tight justify-end items-end  text-gray-200 dark:text-white "
      >
        Tümünü Gör...
      </Link>
    </div>
  );
};

export default ContentGroup;
