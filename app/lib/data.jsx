const newsModel = {
  id: 1, // Örnek bir değer
  url: "https://example.com/news",
  sourceUrl: "https://example.com/source",
  sourceSite: "Example Site",
  title: "Example News Title",
  spot: "Example Spot",
  team: "Example Team",
  video: "https://example.com/video",
  image: {
    // JSON formatında örnek bir değer
    key1: "value1",
    key2: "value2",
  },
  paragraph: {
    // JSON formatında örnek bir değer
    key1: "value1",
    key2: "value2",
  },
  isdeleted: false,
  deletedTime: "2023-01-01T12:00:00Z", // Örnek bir tarih
  createdDate: "2023-01-01T12:00:00Z", // Örnek bir tarih
  updatedDate: "2023-01-01T12:00:00Z", // Örnek bir tarih
  categoryId: 2, // Örnek bir değer
  category: {
    id: 2, // İlişkilendirilmiş kategori ID'si
    // Diğer kategori alanları
  },
  comments: [
    {
      // İlişkilendirilmiş yorum nesnesi
    },
    // Diğer yorum nesneleri
  ],
  images: [
    {
      // İlişkilendirilmiş resim nesnesi
    },
    // Diğer resim nesneleri
  ],
};

// Örnek kullanım
// console.log(newsModel.title); // "Example News Title"
// console.log(newsModel.category.name); // Eğer kategori adı varsa, bu şekilde erişebilirsiniz

export const newsData = [
  {
    id: "1",
    category: "Dünya",
    url: "dunya",
    img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    id: "2",
    category: "Dünya",
    url: "dunya",
    img: "https://i20.haber7.net/resize/1280x720//haber/haber7/photos/2023/52/israilden_son_dakika_hizbullah_duyurusu_genelkurmay_baskani_acikladi_1703726876_8803.jpg",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu? card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mucard paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mucard paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mucard paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mucard paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mucard paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mucard paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mucard paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mucard paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mucard paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mucard paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mucard paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mucard paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mucard paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mucard paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mucard paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mucard paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mucard paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mucard paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mucard paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu",
  },
  {
    id: "3",
    category: "Dünya",
    url: "dunya",
    img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    id: "4",
    category: "Dünya",
    url: "dunya",
    img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    id: "5",
    category: "Finans",
    url: "finans",
    img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    id: "6",
    category: "Finans",
    url: "finans",
    img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    id: "7",
    category: "Finans",
    url: "finans",
    img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    id: "8",
    category: "Finans",
    url: "finans",
    img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    id: "9",
    category: "Finans",
    url: "finans",
    img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    id: "10",
    category: "Teknoloji",
    url: "teknoloji",
    img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    id: "11",
    category: "Teknoloji",
    url: "teknoloji",
    img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    id: "12",
    category: "Teknoloji",
    url: "teknoloji",
    img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    id: "13",
    category: "Spor",
    url: "spor",
    img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    id: "14",
    category: "Spor",
    url: "spor",
    img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    id: "15",
    category: "Spor",
    url: "spor",
    img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    id: "16",
    category: "Spor",
    url: "spor",
    img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    id: "17",
    category: "Spor",
    url: "spor",
    img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    id: "18",
    category: "Magazin",
    url: "magazin",
    img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    id: "19",
    category: "Magazin",
    url: "magazin",
    img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    id: "20",
    category: "Magazin",
    url: "magazin",
    img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    id: "21",
    category: "Magazin",
    url: "magazin",
    img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    id: "22",
    category: "Magazin",
    url: "magazin",
    img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
  {
    id: "23",
    category: "Magazin",
    url: "magazin",
    img: "https://mo.ciner.com.tr/showtv/iu/400x400/show-tv-ana-haber.jpg?v=1695713446?v=438",
    spot: "Example SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample SpotExample Spot",
    title:
      "Bu da bir kart title neden olmasın ki olmasada olur bence bencesini siktir et global olarak nedir olayımız önemli olan o",
    paragraph:
      "card paragraph gibi paragraph dir bu arada ya bırak bu işleri hocam sen japonsun bi kere akıllı adamsın akııllı değil misin yoksa biz seni akullı biliyor idik bilmesekte olur imiş doğru mu?",
  },
];
