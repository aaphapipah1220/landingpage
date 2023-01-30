const BASE_URL = 'http://localhost:3011';

function getAccessToken() {
  return sessionStorage.getItem('accessToken')
}

function putAccessToken(accessToken) {
  return sessionStorage.setItem('accessToken', accessToken);
}
 
async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`
    }
  });
}
 
async function login({ username, password }) {
  const response = await fetch(`${BASE_URL}/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userName :username, userPassword: password }),
  });
 
  const responseJson = await response.json();
 
  console.log(responseJson);
  if (responseJson.status !== 200) {
    alert(responseJson.message);
    return { error: true, data: null };
  }
 
  return { error: false, data: responseJson };
}
 
 
async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/user/me`);
  const responseJson = await response.json();
 
  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
 
  return { error: false, data: responseJson.data };
}
 
// async function addTicket({ name, tag }) {
//   const response = await fetchWithToken(`${BASE_URL}/contacts`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ name, tag }),
//   });
 
//   const responseJson = await response.json();
 
//   if (responseJson.status !== 'success') {
//     alert(responseJson.message);
//     return { error: true };
//   }
 
//   return { error: false };
// }
 
// async function getTickets() {
//   const response = await fetchWithToken(`${BASE_URL}/ticket`);
//   const responseJson = await response.json();
 
//   if (responseJson.status !== 'success') {
//     alert(responseJson.message);
//     return { error: true, data: [] };
//   }
 
//   return { error: false, data: responseJson.data };
// }

async function getAllTickets() {
  const response = await fetch(`${BASE_URL}/ticket[]`);
  const responseJson = await response.json();
 
  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: [] };
  }
 
  return { error: false, data: responseJson.data };
}


async function getAllInfo(ticket) {
  const response = await fetch(`${BASE_URL}/ticket/findAll?ticket=${ticket}`);
  const responseJson = await response.json();
 
  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: [] };
  }
 
  return { error: false, data: responseJson.data };
}



async function getTicketNoToken(noTicket) {
  console.log(noTicket);
  const response = await fetch(`${BASE_URL}/ticket/cek?ticket=${noTicket}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const responseJson = await response.json();
  console.log(typeof responseJson.status);
  console.log(responseJson.status);
  if (responseJson.status !== 200) {
    alert(responseJson.message);
    return { error: true, data: [] };
  }
 
  return { error: false, data: responseJson.data };
}

// async function editTicket() {
//     const response = await fetchWithToken(`${BASE_URL}/tickets`);
//     const responseJson = await response.json();

//     if (responseJson.status )
// }
 
async function deleteTicket(id) {
  const response = await fetchWithToken(`${BASE_URL}/tickets/${id}`, {
    method: 'DELETE',
  });
 
  const responseJson = await response.json();
 
  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true };
  }
 
  return { error: false };
}
 
export { 
  getAccessToken,
  putAccessToken,
  login,
  getUserLogged,
//   addTicket,
  getAllTickets,
  getAllInfo,
  getTicketNoToken,
//   editTicket,
  deleteTicket 
}
