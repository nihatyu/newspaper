import Card from "./card";
import { newsData } from "../lib/placeholder-data";

const CardLayout = ({ categoryPath }) => {
  // categoryPath ile eşleşen kartları filtrele

  const filteredCards = newsData.filter((card) => card.url === categoryPath);

  return (
    <div className="container flex flex-wrap justify-between">
      {filteredCards.map((card, index) => (
        <Card
          id={card.id}
          cardTitle={card.title}
          cardBody={card.paragraph}
          category={card.url}
          key={index}
        />
      ))}
    </div>
  );
};

export default CardLayout;
