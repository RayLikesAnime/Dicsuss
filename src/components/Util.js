import $ from 'jquery'

export async function allCities(search) {
    const urlAll = `http://localhost:5000/api/cities/${search}`;
    try {
      const response = await fetch(urlAll);
      const res = await response.json();
      console.log("city response from db", res);
      return res;
    } catch (err) {
      console.error("Error fetching cities:", err);
    }
  }
  
  export async function getCities() {
    const url = 'http://localhost:5000/api/cities';
    try {
      const response = await fetch(url);
      const res = await response.json();
      console.log("all cities from db", res);
      return res;
    } catch (err) {
      console.error("Error fetching all cities:", err);
    }
  }
  
  export async function oneCity(name) {
    const urlOne = `http://localhost:5000/api/cities/${name}/posts`;
    try {
      const response = await fetch(urlOne);
      const res = await response.json();
      console.log('all the posts res from db', res);
      return res;
    } catch (err) {
      console.error("Error fetching city posts:", err);
    }
  }
  
  export async function createUser(data) {
    const url = 'http://localhost:5000/api/users';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      console.log('posted response from DB: ', res);
    } catch (err) {
      console.error("Error creating user:", err);
    }
  }
  
  export async function getUser(id) {
    const url = `http://localhost:5000/api/user/${id}`;
    try {
      const response = await fetch(url);
      const res = await response.json();
      console.log("we got from db", res);
      return res;
    } catch (err) {
      console.error("Error fetching user:", err);
    }
  }
  
  export async function getUserInfo(username) {
    console.log("passing into db", username);
    const url = `http://localhost:5000/api/user/${username}`;
    try {
      const response = await fetch(url);
      const res = await response.json();
      console.log("USSEERRRRRRRRRRRRR", res);
      return res;
    } catch (err) {
      console.error("Error fetching user info:", err);
    }
  }
  
  export async function checkForExistingUser(id) {
    const url = `http://localhost:5000/api/users/${id}`;
    try {
      const response = await fetch(url);
      const res = await response.json();
      console.log('SEARCH IN CHECK FOR EXISTING USER: ', res);
      return res;
    } catch (err) {
      console.error("Error checking for existing user:", err);
    }
  }
  
  export async function getUserPosts(name) {
    const url = `http://localhost:5000/api/users/${name}/posts`;
    try {
      const response = await fetch(url);
      const res = await response.json();
      console.log('found all posts by user', res);
      return res;
    } catch (err) {
      console.error("Error fetching user posts:", err);
    }
  }
  
  export async function createPost(post) {
    const username = post.author;
    const cityname = post.city;
    console.log(post, "this is going to db");
    const urlPost = `http://localhost:5000/api/user/${username}/city/${cityname}/posts`;
    try {
      const response = await fetch(urlPost, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });
      const res = await response.json();
      console.log('post added to db', res);
    } catch (err) {
      console.error("Error creating post:", err);
    }
  }
  
  export async function editPost(id, post) {
    console.log(id, 'post going to db');
    const url = `http://localhost:5000/api/posts/${id}`;
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });
      const res = await response.json();
      console.log('we edited', id);
      return res;
    } catch (err) {
      console.error("Error editing post:", err);
    }
  }
  
  export async function deletePost(id) {
    console.log("this is id in fx", id);
    const urlDelete = `http://localhost:5000/api/posts/${id}`;
    try {
      const response = await fetch(urlDelete, {
        method: "DELETE",
      });
      const res = await response.json();
      console.log("we deleted", id);
      return res;
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  }
  
  export async function editUser(username, profile) {
    console.log(username, 'post going to db');
    const url = `http://localhost:5000/api/users/${username}`;
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });
      const res = await response.json();
      console.log('we edited', username);
      return res;
    } catch (err) {
      console.error("Error editing user:", err);
    }
  }
  
  export async function deleteUser(username) {
    console.log("going to db", username);
    const urlDelete = `http://localhost:5000/api/users/${username}`;
    try {
      const response = await fetch(urlDelete, {
        method: "DELETE",
      });
      const res = await response.json();
      console.log("deleted", res);
      return res;
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  }
  