angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {
    
    login: function( user ) {
     return $http({
       method: 'POST',
       url: 'http://localhost:3000/api/login'
     })
    },

    getFriends: function() {
    	/* FIX ME */
    }
  }
});