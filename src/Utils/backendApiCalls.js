// const venuePostRequest = (venue) => {
//   const url = ``
// }

export const userSignUp = async user => {
  const url = `http://localhost:5000/signup`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data;
};
