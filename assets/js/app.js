(function (angular) {
    var app = angular.module('ultraCoolToDoList', []);

    app.controller('addToDo', function () {
        var vm = this;
        vm.saveToDo = function (key) {
            if (key.keyCode == 13) {
                console.log(vm.newToDo);
            }
        };
    });
})(window.angular);