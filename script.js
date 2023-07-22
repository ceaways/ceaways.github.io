// This function will be called when the Google Sign-In is successful
function onSignIn(googleUser) {
  const id_token = googleUser.getAuthResponse().id_token;
  console.log('ID Token:', id_token);

  // Send the ID token to your backend server
  fetch('YOUR_BACKEND_SERVER_URL/auth/callback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id_token }),
  })
    .then(response => response.json())
    .then(data
