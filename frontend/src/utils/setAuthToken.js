// import axios from 'axios';

// const setAuthToken = (token) => {
//   if (token) {
//     axios.defaults.headers.common['x-auth-token'] = token;
//   } else {
//     delete axios.defaults.headers.common['x-auth-token'];
//   }
// };

// export default setAuthToken;


// -------------


import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    // Set the Authorization header with Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Remove the Authorization header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;