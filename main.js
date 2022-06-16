// GET Clients
function getClients() {

  //var access_token = window.localStorage.getItem('access_token');
  var options = {
    method: 'GET',
    url: 'https://dev-udf2grvz.us.auth0.com/api/v2/clients',
    headers: {'content-type': 'application/json', authorization: `Bearer Your_Token_Goes_Here`}
  };
  
  axios.request(options)
  .then(res => showOutput(res))
  .catch(function (error) {
    console.error(error);
  });
}

// Get Actions
function getActions() {
  //var access_token = window.localStorage.getItem('access_token');
  var options = {
    method: 'GET',
    url: 'https://dev-udf2grvz.us.auth0.com/api/v2/actions/actions',
    headers: {'content-type': 'application/json', authorization: `Bearer Your_Token_Goes_Here`}
  };
  
  axios.request(options)
  .then(res => showOutput(res))
  .catch(function (error) {
    console.error(error);
  });
  
  };
  
  

// Get Token
function getToken() {

var options = {
  method: 'POST',
  url: 'https://dev-udf2grvz.us.auth0.com/oauth/token',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  data: new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: '8tRVqge6hMKehG8eJccTxkJmkInEFkEZ',
    client_secret: 'Your_Secret_here',
    audience: 'https://dev-udf2grvz.us.auth0.com/api/v2/'
  })
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

// axios.request(options).then(function (response) {
//   window.localStorage.setItem('access_token', response.data.access_token);
//   var access_token = window.localStorage.getItem('access_token');
//   console.log(access_token);
// }).catch(function (error) {
//   console.error(error);
// });
}


// INTERCEPTING REQUESTS & RESPONSES

// axios.interceptors.response.use(
//   config => {
//     console.log(config.data.access_token);
//     return config
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getClients);
document.getElementById('post').addEventListener('click', getActions);
document.getElementById('update').addEventListener('click', getToken);
