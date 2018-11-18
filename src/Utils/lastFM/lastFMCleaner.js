export const lastFMCleaner = artist => {
  const image = Object.values(artist.image[3])[0];
  const bioData = artist.bio.summary.split('<');
  const trimData = bioData[0].trim();
  let bio = bioData[0];

  if (trimData.length < 40) {
    bio = 'Artist biography unavailable';
  }

  const genres = artist.tags.tag.splice(0, 4);
  const similarArtists = artist.similar.artist.splice(0, 4);
  const formattedArtist = {
    bio,
    image,
    genres,
    similarArtists
  };
  return formattedArtist;
};
