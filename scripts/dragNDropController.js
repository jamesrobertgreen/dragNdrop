app.controller('dragNDropController', ['$scope', function ($scope) {
    $scope.list = app.buildArray('Item', 5);
    $scope.sortingLog = [];
    $scope.sortableOptions = {
        // called after a node is dropped
        stop: function (e, ui) {
            var logEntry = {
                ID:  'Moved: ' + ui.item.scope().item.text
            };
            $scope.sortingLog.push(logEntry);
        }
    };
}]);