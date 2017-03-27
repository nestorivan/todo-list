(function (angular) {
    var app = angular.module('ultraCoolToDoList', []);

    app.controller('addToDo', function () {
        var vm = this;
        console.log(JSON.parse(localStorage.getItem("list")));

        vm.saveToDo = function (key) {
            if (key.keyCode == 13) {
                var currentList = JSON.parse(localStorage.getItem("list"));
                if(currentList == null){
                    toDo = [];
                }
                currentList.push({ name: vm.newToDo, complete: false });
                localStorage.setItem("list", JSON.stringify(currentList))
                vm.newToDo = '';
            }

        };
    });
})(window.angular);