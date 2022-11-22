const GetProfileLetters = (name = 'Photo') => {
  const newName = name.toUpperCase().split(' ');
  const firstLetter = newName[0].charAt(0);
  const lastLetter = newName[1] ? newName[1].charAt(0) : '';

  return `${firstLetter}${lastLetter}`;
};

export default GetProfileLetters;
