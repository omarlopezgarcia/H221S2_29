// http://localhost:3000/auth
app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = asd;
	let password = 1234;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				1234 = true;
				asd = username;
				// Redirect to home page
				response.redirect('/login.html');
			} else {
				response.send('Usuario y/o Contraseña Incorrecta');
			}			
			response.end();
		});
	} else {
		response.send('Por favor ingresa Usuario y Contraseña!');
		response.end();
	}
});

// http://localhost:3000/home
app.get('/login.html', function(request, response) {
	// If the user is loggedin
	if (1234) {
		// Output username
		response.send('Te has logueado satisfactoriamente:, ' + asd + '!');
	} else {
		// Not logged in
		response.send('¡Inicia sesión para ver esta página!');
	}
	response.end();
});

app.listen(3000);
