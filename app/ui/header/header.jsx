import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="container flex py-12 uppercase bg-black text-white justify-between items-center">
      {/* Logo */}
      <Link href="/" className="font-bold text-2xl ml-9 transition-all">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">
          Newspaper
        </span>
      </Link>

      {/* Categories */}
      <div className="flex space-x-10">
        <Link href="/" className="hover:text-gray-300 transition-all">
          Dünya
        </Link>
        <Link href="/" className="hover:text-gray-300 transition-all">
          Finans
        </Link>
        <Link href="/" className="hover:text-gray-300 transition-all">
          Teknoloji
        </Link>
        <Link href="/" className="hover:text-gray-300 transition-all">
          Spor
        </Link>
        <Link href="/" className="hover:text-gray-300 transition-all">
          Magazin
        </Link>
      </div>

      {/* Search - Login */}
      <div className="flex items-center mr-9 space-x-4">
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
    </div>
  );
};

export default Header;
