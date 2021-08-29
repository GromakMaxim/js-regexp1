/*
Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);
Имя не должно содержать подряд более трёх цифр,
а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.
*/

export default class Validator {
  validateUsername(username) {
    if (username === '') return false;
    return (!/\d{4}/.test(username) && (/^[^\d\-_][\w-]*[^\d^\-_]$/).test(username));
  }
}
