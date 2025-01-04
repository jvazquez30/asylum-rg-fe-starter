const config = {
  issuer: process.env.REACT_APP_AUTH0_DOMAIN,
  redirectUri: window.location.origin,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  pkce: true,
  scopes: ['openid', 'email', 'profile'],
};

export { config };
