export const removeBaseUrl = (url?: string) => {
  if (!url) return null;

  const baseUrl = /(https:\/\/)?(www\.)?(?:(.+)?(ottoset)(.+)?(\.com))/;

  if (!baseUrl.test(url)) return url;

  const indexOfBaseUrl = url.indexOf('.br');

  return url.slice(indexOfBaseUrl + 3);
};
