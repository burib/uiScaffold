export default function($http) {
  var url = 'http://localhost:8080/api/items';

  return {
    getItems: function() {
      return $http({
        method: 'GET',
        url: url
      }).then(function(response) {
        return response.data;
      });
    },
    getItem: function(id) {
      return $http({
        method: 'GET',
        url: url + '/' + id
      }).then(function(response) {
        return response.data;
      });
    },
    addItem: function(item) {
      return $http({
        data: {item: item},
        method: 'POST',
        url: url + '/' + id
      }).then(function(response) {
        return response.data;
      });
    },
    deleteItem: function(id) {
      return $http({
        method: 'DELETE',
        url: url + '/' + id
      }).then(function(response) {
        return response.data;
      });
    },
    updateItem: function(item) {
      return $http({
        data: {item: item},
        url: url + '/' + item.id,
        method: 'PUT'
      }).then(function(response) {
        return response.data;
      });
    }
  };

};
