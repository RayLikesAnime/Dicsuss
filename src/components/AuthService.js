import "core-js/stable/atob";
import { jwtDecode } from "jwt-decode";
import {createUser} from './Util';
const ID_TOKEN_KEY = 'id_token';

var options = {auth: {
  redirectUrl: `${window.location.origin}`,
  responseType: 'token',
  params: {scope: 'openid profile'}}
}

const lock = new Auth0Lock('b5DSCxzYWVduljdl4P22O9PeeHWO6esR', 'dev-ztgcqal82wib7sqb.us.auth0.com', options);

lock.on('authenticated', authResult => {
  setIdToken(authResult.idToken);
  // checkForExistingUser(authResult.idTokenPayload.user_id);
  // if (existence.length === 0) {
  //   console.log('I DONT EXIST YET SO I WILL BE ADDED TO THE DB!');
    var data = {
      idFromAuth0: authResult.idTokenPayload.sub,
      username: authResult.idTokenPayload.username,
      dateJoined: authResult.idTokenPayload.created_at,
      imageUrl: authResult.idTokenPayload.picture,
      email: authResult.idTokenPayload.email
    };
    createUser(data);
    setProfile(data);
});


export function login(options) {
  lock.show(options);
  return {
    hide() {
      lock.hide();
    }
  }
}

  export function setProfile(profile) {
    // Saves profile data to local storage
    localStorage.setItem('profile', JSON.stringify(profile))
  }

  export function getProfile() {
    // Retrieves the profile data from local storage
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
  }


export function logout() {
  clearIdToken();
    // browserHistory.replace('/');
    window.location.reload();
}

export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({pathname: '/'});
  }
}

function setIdToken(idToken) {
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY);
}

export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
}

function getTokenExpirationDate(encodedToken) {
  const token = jwtDecode(encodedToken);
  if (!token.exp) { return null; }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}