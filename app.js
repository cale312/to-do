var users = [
    {name: "Zikisa Cale", secondName: "Sogaxa", username: "test", password: "testing", security: "Yes or No?", answer: "Maybe", email: "test@example.com"}
];
var taskInput = document.querySelector('.taskInput'),
    username = document.querySelector('.username'),
    password = document.querySelector('.password'),
    newUser = document.querySelector('.newUser'),
    newPassword = document.querySelector('.newPassword'),
	confirmPassword = document.querySelector('.newPasswordConfirm'),
    firstName = document.querySelector('.firstName'),
    secondName = document.querySelector('.secondName'),
    Email = document.querySelector('.email'),
    securityQ = document.querySelector('.securityQ'),
    securityA = document.querySelector('.securityA'),
    login = document.querySelector('.login-btn'),
    login2 = document.querySelector('.login-btn-2'),
    forgot = document.querySelector('.forgot-btn'),
    back = document.querySelector('.back-btn'),
    back2 = document.querySelector('.back-btn-2'),
    logout = document.querySelector('.logout-btn'),
    register = document.querySelector('.add-user-btn'),
    submit = document.querySelector('.register-new-user'),
    add = document.querySelector('.add-btn'),
    newPage = document.querySelector('.new-page-btn'),
    list = document.getElementsByTagName('li'),
    search = document.querySelector('.search-btn'),
    recoveryHelp = document.querySelector('.recovery-help'),
    check =  document.querySelector('.check-answer-btn'),
    recovery_email = document.querySelector('.recovery-email'),
    to_do_list = document.querySelector('.to-do-list');
login.addEventListener('click', function () {
    'use strict';
    var template = document.querySelector('.template').innerHTML,
        temp = Handlebars.compile(template);
    for (var i = 0; i < users.length; i++) {
        if (username.value === users[i].username && password.value === users[i].password) {
            document.querySelector('.login-screen').style.display = 'none';
            to_do_list.style.display = "inline-block";
            document.querySelector('.list-header').innerHTML = temp(users[i]);
        } else {
            username.style.background = 'rgba(255, 0, 0, 0.4)';
            password.style.background = 'rgba(255, 0, 0, 0.4)';
            document.querySelector('.error-msg').innerHTML = 'Wrong username or password';
        }
    }
    username.value = "";
    password.value = "";
    username.addEventListener('click', function () {
        'use strict';
        username.style.background = 'white';
        document.querySelector('.error-msg').innerHTML = '';
    });
    password.addEventListener('click', function () {
        'use strict';
        password.style.background = 'white';
        document.querySelector('.error-msg').innerHTML = '';
    });
});
forgot.addEventListener('click', function () {
    'use strict';
    username.style.background = 'white';
    password.style.background = 'white';
    document.querySelector('.login-screen').style.display = 'none';
    document.querySelector('.recovery').style.display = 'inline-block';
    document.querySelector('.error-msg').innerHTML = '';
	document.querySelector('.your-password').style.display = 'none';
});
back.addEventListener('click', function () {
    'use strict';
    document.querySelector('.recovery').style.display = 'none';
    document.querySelector('.recovery-error').style.display = 'none';
    document.querySelector('.login-screen').style.display = 'inline-block';
});
register.addEventListener('click', function () {
    'use strict';
    document.querySelector('.registration-screen').style.display = "inline-block";
    document.querySelector('.login-screen').style.display = "none";
    username.style.background = 'white';
    password.style.background = 'white';
    document.querySelector('.error-msg').innerHTML = '';
});
back2.addEventListener('click', function () {
    'use strict';
    document.querySelector('.registration-screen').style.display = 'none';
    document.querySelector('.recovery-error').style.display = 'none';
    document.querySelector('.login-screen').style.display = 'inline-block';
    newPassword.style.backgroundColor = "white";
    Email.style.backgroundColor = "white";
    document.querySelector('.success-msg').innerHTML = "";
});
search.addEventListener('click', function () {
    'use strict';
    var security_template = document.querySelector('.security-template').innerHTML;
    var security = Handlebars.compile(security_template);
    var recovery_template = document.querySelector('.recovery-template').innerHTML;
    var recover = Handlebars.compile(recovery_template);
    for (var i = 0; i < users.length; i++) {
        if (recovery_email.value === users[i].email && recovery_email.value !== "") {
            document.querySelector('.alert-msg').innerHTML = recover(users[i]);
			document.querySelector('.alert-msg').style.display= 'inline-block';
            document.querySelector('.security-question').innerHTML = security(users[i]);
            document.querySelector('.answer-text').style.display = "inline-block";
            document.querySelector('.check-answer-btn').style.display = "inline-block";
            back.style.display = "none";
            login2.style.display = "inline-block";
            document.querySelector('.your-password').style.display = "block";
            document.querySelector('.answer-text').style.display = "inherit";
            document.querySelector('.security-question').style.display = "block";
            check.style.display = "inline-block";
            recoveryHelp.style.display = 'none';
            document.querySelector('.recovery-error').style.display = "none";
            recovery_email.value = "";
        } else {
            //document.querySelector('.alert-msg').style.display = "inline-block";
            document.querySelector('.recovery-error').innerHTML = 'Email not found!';
            document.querySelector('.recovery-error').style.display = 'inline-block';
        }
    }
    document.querySelector('.your-password').style.display = "none";
});
check.addEventListener('click', function () {
    'use strict';
    var answerInput = document.querySelector('.answer-text');
    var passwordTemp = document.querySelector('.password-display').innerHTML;
    var showPassword = Handlebars.compile(passwordTemp);
    var emailFound = false;
    for (var i = 0; i < users.length; i++) {
        if (answerInput.value === users[i].answer && answerInput.value !== "") {
            document.querySelector('.your-password').innerHTML = showPassword(users[i]);
            document.querySelector('.your-password').style.display = "inline-block";
            emailFound = true;
        } else{
			document.querySelector('.your-password').style.display = "inline-block";
            document.querySelector('.your-password').innerHTML = "<p>Incorrect answer!!!</p>";
        }
    }
    answerInput.value = "";
});
login2.addEventListener('click', function () {
    'use strict';
    document.querySelector('.recovery').style.display = "none";
    document.querySelector('.login-screen').style.display = "inline-block";
    document.querySelector('.alert-msg').style.display = "none";
    recoveryHelp.style.display = "inline-block";
    document.querySelector('.answer-text').style.display = "none";
    document.querySelector('.security-question').style.display = "none";
    check.style.display = "none";
    back.style.display = "inline-block";
    document.querySelector('.recovery-error').style.display = "none";
	document.querySelector('.your-password').innerHTML = "";
    login2.style.display = "none";
});
logout.addEventListener('click', function () {
    'use strict';
    to_do_list.style.display = "none";
    document.querySelector('.login-screen').style.display = "inline-block";
    username.style.background = 'white';
    password.style.background = 'white';
    document.querySelector('.error-msg').innerHTML = '';
});
submit.addEventListener('click', function () {
    'use strict';
    var newUserInfo = {name: firstName.value, secondName: secondName.value, username: newUser.value, password: newPassword.value, email: Email.value, security: securityQ.value, answer: securityA.value}
	var newUserValid = false;
	for (var i = 0; i < users.length; i++) {
		if (newUser.value === users[i].username) {
			alert('Username already exists');
			newUser.style.backgroundColor = 'rgba(255, 0, 0, 0.4)';
		} else if (Email.value === users[i].email) {
			alert('email already exists, try loging in or clicking forgot password to recover your password');
			Email.style.backgroundColor = 'rgba(255, 0, 0, 0.4)';
		} else if (firstName.value !== "" && secondName.value !== "" && newUser.value !== "" && newPassword.value !== "" && Email.value !== "" && securityQ.value !== "" && securityA.value !== "" && newPassword.value.length >= 6 && newPassword.value === confirmPassword.value) {
			users.push(newUserInfo);
			newUserValid = true;
			firstName.value = "";
			secondName.value = "";
			newUser.value = "";
			newPassword.value = "";
			confirmPassword.value = "";
			Email.value = "";
			securityQ.value = "";
			securityA.value = "";
            document.querySelector('.success-msg').innerHTML = 'Account created successfully,<br/> press the back key to go back to the login screen';
		} else if (newPassword.value !== confirmPassword.value) {
			alert('Passwords do not match');
			newUser.value = "";
			securityQ.value = "";
			securityA.value = "";
		} else if (newUserValid === false) {
			alert('Please ensure that all the fields marked with a (*) symbol are filled in correctly. And make sure that your password is at least 6 charectors long');
		}
	}
});
firstName.addEventListener('click', function () {
    'use strict';
    document.querySelector('.success-msg').innerHTML = "";
});
newUser.addEventListener('click', function () {
    'use strict';
	newUser.style.background = 'white';
});
Email.addEventListener('click', function () {
    'use strict';
    Email.style.background = 'white';
});
add.addEventListener('click', function () {
    'use strict';
    if (taskInput.value !== "") {
        var input = document.createTextNode(taskInput.value),
            newTask = document.createElement('li');
        newTask.appendChild(input);
        document.querySelector('.Tasklist').appendChild(newTask);
    }
    taskInput.value = "";
});
newPage.addEventListener('click', function () {
    'use strict';
    for (var i = 0; i < list.length; i++) {
        list[i].style.display = 'none';
    }
});
document.querySelector('.Tasklist').addEventListener('click', function (evt) {
    'use strict';
    var taskFinished = evt.target;
    for (var i = 0; i < list.length; i++) {
        if (list[i] === taskFinished) {
            list[i].style.textDecoration = 'line-through';
            list[i].style.color = 'rgba(255, 0, 0, 0.5)';
        }
    }
});
document.querySelector('.dateInput').addEventListener('click', function () {
    'use strict';
    document.querySelector('.dateInput').value = "";
});