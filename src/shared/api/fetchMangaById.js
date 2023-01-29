import axios from 'axios';

const IF_NONE = 'unknown';
const NOT_SYNOPSIS_STRING = 'No synopsis ';

const createUrl = (id) => {
  return `https://kitsu.io/api/edge/manga/${id}?fields[manga]=synopsis,chapterCount,posterImage,status,averageRating,canonicalTitle`;
};

export const fetchMangaById = async (id) => {
  const manga = await axios
    .get(createUrl(id))
    .then((response) => response.data.data);

  return {
    id: manga.id,

    title: manga.attributes.canonicalTitle || IF_NONE,

    synopsis: manga.attributes.synopsis || IF_NONE,

    imageSrc:
      manga.attributes.posterImage.medium ||
      manga.attributes.posterImage.original,

    status: manga.attributes.status || IF_NONE,

    rating: manga.attributes.averageRating || IF_NONE,

    countOfSeries:
      manga.attributes.chapterCount || 'The series is still coming out',
  };
};
