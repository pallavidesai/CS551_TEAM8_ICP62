/**
 * Created by user on 23/10/2016.
 */
var myapp = angular.module('demoMongo',[]);
myapp.run(function ($http) {
    // Sends this header with any AJAX request
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // Send this header only in post requests. Specifies you are sending a JSON object
    $http.defaults.headers.post['dataType'] = 'json'
});
myapp.controller('MongoRestController',function($scope,$http){
    $scope.insertData = function(){
        console.log($scope.formData.name);
        console.log($scope.formData.classid);
        console.log($scope.formData.course);
        console.log($scope.formData.major);
        console.log($scope.formData.minor);
        var dataParams = {
            'name' : $scope.name,
            'classid' : $scope.classid,
            'course' : $scope.course,
            'major' : $scope.major,
            'minor' : $scope.minor
        };
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        var req = $http.post('http://127.0.0.1:8081/register',$scope.formData);
        req.success(function(data, status, headers, config) {
            $scope.message = data;
            console.log(data);
        });
        req.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    };



   /* $scope.Search = function () {
        console.log($scope.formData.major);
        var readVal="";
        $http.get('http://127.0.0.1:8081/getData?searchkey=cs').then(function(data)
            {
                var outputdata=data.data;
                //$scope.details =[];

                console.log("the length of the data is  :"+outputdata.length);
                console.log("the values :-"+JSON.stringify(outputdata) );


            },function(err)
            {
                console.log(err);
            }
        )
    };*/
    $scope.Search = function () {
        $http.get('http://127.0.0.1:8081/getData?searchkey='+$scope.search).then(function(data)
            {
                var outputdata=data.data;
                console.log("the length of the data is  :"+outputdata.length);
                console.log("The values are:-"+JSON.stringify(outputdata) );
                for(var x=0;x<outputdata.length;x++)
                {
                    console.log("Name is "+outputdata[x].name) ;
                    console.log("Class ID  is "+outputdata[x].classid) ;
                    console.log("Course is "+outputdata[x].course) ;
                    console.log("Minor is "+outputdata[x].minor) ;

                }
            },function(err)
            {
                console.log(err);
            }
        )}







});