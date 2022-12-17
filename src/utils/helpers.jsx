import { DEFAULT_IMAGE } from "./constants";

/**
 * @readonly
 */

export const truncatingText = (text, length) =>
  text.length > length ? `${text.substring(0, length)}...` : text;

export const isItDefaultImg = (url) => (url ? url.match(DEFAULT_IMAGE) : false);

export const splitNews = (news) => {
  const newsPerSections = 5;
  const numberOfSections = Math.ceil(news.length / newsPerSections);

  const newArray = Array.from({ length: numberOfSections }, (_, index) => {
    const start = index * newsPerSections;
    return news.slice(start, start + newsPerSections);
  });

  return newArray;
};
