import Card from "./card";

const cardData = [
  {
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    body: "card body gibi body dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    body: "card body gibi body dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    body: "card body gibi body dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    body: "card body gibi body dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    body: "card body gibi body dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    body: "card body gibi body dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    body: "card body gibi body dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    body: "card body gibi body dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    body: "card body gibi body dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    body: "card body gibi body dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
];

const CardLayout = () => {
  return (
    <div className="container flex flex-wrap justify-between">
      {cardData.map((card, index) => (
        <Card cardTitle={card.title} cardBody={card.body} key={index} />
      ))}
    </div>
  );
};

export default CardLayout;
