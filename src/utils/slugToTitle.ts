export const slugToTitle = (slug: string) => {
  const words = slug.split('-');
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
