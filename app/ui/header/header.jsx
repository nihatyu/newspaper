import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { newsData } from "@/app/lib/data";

const categories = [...newsData];

const Header = ({ params }) => {
  console.log("params :>> ", params);
  return (
    <header className="container flex flex-col lg:flex-row py-4 lg:py-12 uppercase bg-black text-white justify-between items-center">
      {/* Logo */}
      <Link href="/" className="font-bold text-2xl ml-4 lg:ml-9 transition-all">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">
          Newspaper
        </span>
      </Link>

      {/* Categories */}
      <div className="flex mt-4 lg:mt-0 space-x-4 lg:space-x-10">
        {Array.from(
          new Set(categories.map((category) => category.category))
        ).map((uniqueCategory, i) => {
          // Benzersiz kategoriyi filtrele
          const filteredCategory = categories.find(
            (category) => category.category === uniqueCategory
          );

          // Eğer filtrelenmiş kategori bulunamazsa, işlemi sonlandır
          if (!filteredCategory) return null;

          return (
            <Link
              href={filteredCategory.url}
              className="hover:text-gray-300 transition-all"
              key={i}
            >
              {uniqueCategory}
            </Link>
          );
        })}
      </div>

      {/* Search - Login */}
      <div className="flex items-center mt-4 lg:mt-0 mr-4 lg:mr-9 space-x-4">
        {/* Search */}
        <div className="group relative">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-white cursor-pointer hover:scale-150"
          />
          <input
            type="text"
            className="hidden group-hover:block absolute right-full top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-md border border-gray-300 outline-none transition-all duration-300"
            placeholder="Ara..."
          />
        </div>

        {/* Login */}
        <Link
          href="/"
          className="cursor-pointer text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all"
        >
          Giriş Yap
        </Link>
      </div>
    </header>
  );
};

export default Header;
