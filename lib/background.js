var f = new Firebase('https://sayhallo.firebaseio.com/');

function login() {
  var scope = {
    scope: 'email,public_profile'
  };
  f.authWithOAuthPopup('facebook', function(err, auth) {
    alert('logged in!');
  }, scope);
}

login();
