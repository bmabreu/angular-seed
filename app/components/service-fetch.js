angular.module("myApp").service("serviceFetch", function($http) {
  let resource_url = "https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=6ffaf2f592ca4029cf614bb4bf313be5";
    return $http.get(resource_url).then(res => {
    return res.data;
  });
});
