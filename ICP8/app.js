'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])
    .controller('View1Ctrl', function ($scope, $http) {
        $scope.getVenues = function () {
            var placeEntered = document.getElementById("txt_placeName").value;
            if (placeEntered != null && placeEntered != "") {
                    $http.get('http://127.0.0.1:8081/getData?searchkey='+placeEntered).then(function(data)
                        {

                            var outputdata=data.data;
                            console.log("the length of the data is  :"+outputdata.length);
                            console.log("The values are:-"+JSON.stringify(outputdata) );
                            console.log(data);
                            $scope.searchDescription = data.data.itemListElement[0].result.detailedDescription.articleBody;
                            $scope.description = "Description:";
                            $scope.wiki = data.data.itemListElement[0].result.detailedDescription.url;
                            $scope.wikiheading = "Explore " + $scope.searchDestination + " wiki in the following link";
                            $scope.searchimage = data.data.itemListElement[0].result.image.contentUrl;

                        },function(err)
                        {
                            alert("failed");
                            console.log(err);
                        })
            }
        }

    });
