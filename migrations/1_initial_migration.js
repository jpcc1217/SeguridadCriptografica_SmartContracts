const Asd = artifacts.require("Pruebaejemplo");
const TodoList = artifacts.require("TodoListEjemplo");

module.exports = function (deployer) {
  deployer.deploy(Asd);
  deployer.deploy(TodoList);
};
