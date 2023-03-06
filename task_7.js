const allLogins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
    return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function (login) {
    if (allLogins.includes(login)) {
        return false;
    }
    return true;
};

const addLogin = function (login) {
    if (!isLoginValid(login)) {
      return 'Помилка! Логін повинен бути від 4 до 16 символів';
    }
  
    if (!isLoginUnique(login)) {
      return 'Такий логін уже використовується!';
    }
  
    allLogins.push(login);
    return 'Логін успішно доданий!';
};

const userLogin = prompt('Ведіть свій логін:');
const result = addLogin(userLogin);
alert(result);
console.log(allLogins);
