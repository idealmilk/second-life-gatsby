export const capitalizeString = (string) => {
  let array = string.split('-');

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substr(1);
  }

  const formattedString = array.join(' ');

  return formattedString;
};
