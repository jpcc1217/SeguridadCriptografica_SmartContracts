const Asd = artifacts.require("Pruebaejemplo");
const TodoList = artifacts.require("TodoListejemplo");
const bbb = artifacts.require("Electric");

module.exports = function (deployer) {
  deployer.deploy(Asd);
  deployer.deploy(TodoList);
  deployer.deploy(bbb);
};
