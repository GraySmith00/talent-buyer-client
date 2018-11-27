export const capitalize = string => {
  return string
    .split(' ')
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(' ');
};

export const capitalizeArtists = searchResults => {
  if (searchResults.length) {
    const results = searchResults.map(artist => {
      let cleanedArtists = [];
      const split = artist.split(' ');
      split.forEach(name => {
        cleanedArtists.push(name[0].toUpperCase() + name.slice(1));
      });
      return cleanedArtists.join(' ');
    });
    return results;
  }
};
