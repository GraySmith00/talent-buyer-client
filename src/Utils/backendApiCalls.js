export const venuePostRequest = async venue => {
  const url = `http://localhost:5000/api/v1/venues`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(venue),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data;
};

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

export const userLogIn = async userCreds => {
  const url = `http://localhost:5000/login`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(userCreds),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.status === 201) {
    const data = await response.json();
    return data;
  } else {
    const error = await response.text();
    return error;
  }
};
