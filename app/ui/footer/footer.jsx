import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppStore,
  faFacebook,
  faGooglePlay,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="container bg-black text-white py-12 ">
      {/*  Footer Content Container */}
      <div className="flex flex-wrap justify-around">
        {/*  Footer General  */}
        <div className="mb-6 flex flex-wrap lg:mb-0">
          <ul>
            <li>
              <Link href="#" className="hover:text-gray-400">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">
                Yayın İlkeleri
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">
                Gizlilik Politikası
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">
                İletişim
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">
                Reklam
              </Link>
            </li>
          </ul>
        </div>

        {/*  Social Media Links */}
        <div className="flex flex-col mb-6 lg:mb-0">
          <h3 className="text-lg font-bold mb-4">Sosyal Medya</h3>
          <ul>
            <li>
              <Link href="#" className="hover:text-gray-400">
                <FontAwesomeIcon className="mr-3" icon={faInstagram} />
                Instagram
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">
                <FontAwesomeIcon className="mr-3" icon={faTwitter} />
                Twitter
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">
                <FontAwesomeIcon className="mr-3" icon={faFacebook} />
                Facebook
              </Link>
            </li>
          </ul>
        </div>

        {/*  App Store and Google Play Links  */}
        <div className="flex flex-col mb-6 lg:mb-0">
          <h3 className="text-lg font-bold mb-4">Uygulama İndir</h3>
          <ul>
            <li>
              <Link href="#" className="hover:text-gray-400 ">
                <FontAwesomeIcon className="mr-3" icon={faAppStore} />
                App Store
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">
                <FontAwesomeIcon className="mr-3" icon={faGooglePlay} />
                Google Play Store
              </Link>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="w-full text-center text-gray-400 text-sm mt-4">
          <p>&copy; 2023 Newspaper All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
