'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])

    .controller('View1Ctrl', function ($scope, $http) {
        $scope.getVenues = function () {
            var placeEntered = document.getElementById("txt_placeName").value;
            if (placeEntered != null && placeEntered != "") {

                $http.get("https://kgsearch.googleapis.com/v1/entities:search?query="+placeEntered+"&key=AIzaSyCvnpFKAcsp9bg94zysoNY7QLv-P3SghJ8&limit=1&indent=True").then(function(data)
                {
                    alert("success triggered");
                    try {
                        console.log(data);
                        $scope.searchDescription = data.data.itemListElement[0].result.detailedDescription.articleBody;
                        $scope.description = "Description:";
                        $scope.wiki = data.data.itemListElement[0].result.detailedDescription.url;
                        $scope.wikiheading = "Explore " + $scope.searchDestination + " wiki in the following link";
                        $scope.searchimage = data.data.itemListElement[0].result.image.contentUrl;
                        alert($scope.searchimage);

                    }
                    catch(err){
                       // document.getElementById("errormsg").innerHTML = "Please Correct your search item";
                    }
                })
            }
        }

    });
