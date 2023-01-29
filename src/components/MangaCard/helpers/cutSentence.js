export const cutSentence = (sentence, countOfWords) => {
  return sentence.split(' ').slice(0, countOfWords).join(' ') + '...';
};
