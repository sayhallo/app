var f = new Firebase("https://sayhallo.firebaseio.com/");

function login () {
	var scope = { scope: "email,read_mailbox" };
	f.authWithOAuthPopup("facebook", function (err, auth) {
		alert('logged in!');
	}, scope);
}

login();