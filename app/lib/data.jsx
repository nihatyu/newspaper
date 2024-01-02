// news modeli için
export async function getNewsData() {
  try {
    const response = await fetch("api_endpoint");
    const news = await response.json();

    console.log(data);

    return news;
  } catch (error) {
    console.error("Veri çekme sırasında bir hata oluştu:", error);
  }
}

// category modeli için
export async function getCategoryData() {
  try {
    const response = await fetch("api_endpoint");
    const category = await response.json();

    console.log(data);

    return category;
  } catch (error) {
    console.error("Veri çekme sırasında bir hata oluştu:", error);
  }
}

// comment modeli için
export async function getCommentData() {
  try {
    const response = await fetch("api_endpoint");
    const comment = await response.json();

    console.log(data);

    return comment;
  } catch (error) {
    console.error("Veri çekme sırasında bir hata oluştu:", error);
  }
}

// user modeli için
export async function getUserData() {
  try {
    const response = await fetch("api_endpoint");
    const user = await response.json();

    console.log(data);

    return user;
  } catch (error) {
    console.error("Veri çekme sırasında bir hata oluştu:", error);
  }
}

// image modeli için
export async function getImageData() {
  try {
    const response = await fetch("api_endpoint");
    const image = await response.json();

    console.log(data);

    return image;
  } catch (error) {
    console.error("Veri çekme sırasında bir hata oluştu:", error);
  }
}
