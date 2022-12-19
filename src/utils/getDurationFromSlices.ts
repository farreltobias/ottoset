import { Content } from '@prismicio/client';
import { RTNode } from '@prismicio/types';

const MINUTES_IN_MILLISECONDS = 60 * 1000;
const WORDS_PER_MINUTE = 100;

export const getDurationFromSlices = (slices: Content.ArtigoSlice[]) => {
  const wordCount = slices.reduce((acc, { items }) => {
    return (
      acc +
      (items.reduce((acc, item) => {
        return (
          acc +
          (item.paragraph as RTNode[]).reduce((acc, item) => {
            if (item.type !== 'paragraph') return acc;

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
