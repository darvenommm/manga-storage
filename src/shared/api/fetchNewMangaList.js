import axios from 'axios';

const baseUrl = 'https://kitsu.io/api/edge/manga';
const needFields = 'fields[manga]=canonicalTitle,synopsis,posterImage,status';
const defaultSort = 'sort=-averageRating';

const IF_NONE = 'unknown';

const createUrl = (countOfManga, offset) => {
  const pagination = `page[limit]=${countOfManga}&page[offset]=${offset}`;

  return `${baseUrl}?${[needFields, defaultSort, pagination].join('&')}`;
};

export const fetchNewManga = async (countOfManga, offset) => {
  try {
    const response = await axios.get(createUrl(countOfManga, offset));

    const newManga = await response.data.data.map((manga) => ({
      id: manga.id,

      title: manga.attributes.canonicalTitle || IF_NONE,

      synopsis: manga.attributes.synopsis,

      status: manga.attributes.status || IF_NONE,

      imageSrc:
        manga.attributes.posterImage.small ||
        manga.attributes.posterImage.original,
    }));

    return newManga;
  } catch (error) {
    console.error(`___ERROR: ${error}___`);
  }
};
