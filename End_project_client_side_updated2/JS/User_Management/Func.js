//שיוך אירוע טעינה לדף פרופיל
function profilePageLoaded() {
    var loggedUser = JSON.parse(sessionStorage.getItem(`login_user`));
    console.log('logged user to show', loggedUser);
    //בדיקה שאין משתמש מחובר
    if (!loggedUser) {
        console.log('no logged user was found');
        location.href = `/html/login.htm`
        return;
    }

    //session שליפת הפרטים של המשתמש מתוך ה
    //כתיבת ההודעה
    $(`#name`).html(`${loggedUser.FirstName} ${loggedUser.LastName}`)
    $(`#welcomeM`).html(`Welcome ${loggedUser.FirstName} ${loggedUser.LastName} `)
    $(`#email`).html(`${loggedUser.YourEmail} `)
    $(`#stret`).html(`${loggedUser.street}, ${loggedUser.city}`)
    $(`#birthdate`).html(`${loggedUser.Birthdate} `)
    loggedUser.best = localStorage.getItem('login_user');
    var cat = localStorage.getItem('user');
    if (cat > 4000) {
        $(`#best`).html(`The best score in the game ever is : ${cat}, let's break this record !`)
    }
    else {
        $(`#best`).html(`The best score in the game ever is : 4000, let's break this record !`)
    }
}

//שיוך אירוע טעינה לדף התחברות
function loginPageLoaded() {

    //בדיקה שיש משתמש מחובר
    if (sessionStorage.getItem(`login_user`) != null) {
        location.href = `/html/index.html`
    }
}


