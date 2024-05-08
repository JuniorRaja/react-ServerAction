"use server";

export const fetchAnime = async (page: number) => {
  const respone = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );

  const data = await respone.json();
  return data;
};
