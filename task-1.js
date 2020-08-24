const Account = function (login) {
  const { login: logi, email: emai } = login;
  Account.prototype.getInfo = function () {
    console.log(`Login: ${logi}, Email: ${emai}`);
  };
  console.log(Account.prototype.getInfo); // function
};

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
