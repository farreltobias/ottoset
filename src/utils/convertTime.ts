export const convertTime = (duration: number) => {
  const [hours, minutes] = new Date(duration)
    .toISOString()
    .substring(11, 19)
    .split(':')
    .map((time) => Number(time));

  return `${hours ? `${hours} h ` : ''}${
    minutes ? `${minutes} min ` : ''
  }de leitura`;
};
