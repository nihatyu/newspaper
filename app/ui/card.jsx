import Link from "next/link";
import Image from "next/image";

const Card = ({ cardTitle, cardBody, id, category }) => {
  const MAX_TITLE_LENGTH = 43;
  const MAX_BODY_LENGTH = 76;

  const truncatedTitle =
    cardTitle.length > MAX_TITLE_LENGTH
      ? `${cardTitle.slice(0, MAX_TITLE_LENGTH)}...`
      : cardTitle;

  const truncatedBody =
    cardBody.length > MAX_BODY_LENGTH
      ? `${cardBody.slice(0, MAX_BODY_LENGTH)}...`
      : cardBody;

  return (
    <div class="sm:w-full md:w-1/4 lg:w-1/6  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
      <Link href={`${category}/${id}`}>
        <Image
          class="rounded-t-lg"
          src="https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438"
          alt=""
          layout="responsive"
          width={200}
          height={200}
        />
      </Link>
      <div class="p-5">
        <Link href={`${category}/${id}`}>
          <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
            {truncatedTitle}
          </h5>
        </Link>
        <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400 line-clamp-3">
          {truncatedBody}
        </p>
        <Link
          href={`${category}/${id}`}
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Detaylar
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;
