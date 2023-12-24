import { Content } from '@prismicio/client';
import { RTParagraphNode } from '@prismicio/types';

const MINUTES_IN_MILLISECONDS = 60 * 1000;
const WORDS_PER_MINUTE = 100;

export const getDurationFromSlices = (slices: Content.ArtigoSlice[]) => {
  const wordCount = slices.reduce((acc, { items }) => {
    return (
      acc +
      (items.reduce((acc, item) => {
        return (
          acc +
          (item.paragraph as RTParagraphNode[]).reduce((acc, item) => {
            const { text } = item;
            const count = text.split(' ').length;

            return acc + count;
          }, 0)
        );
      }, 0) || 0)
    );
  }, 0);

  const minutes = Math.ceil(wordCount / WORDS_PER_MINUTE);

  return minutes * MINUTES_IN_MILLISECONDS;
};
