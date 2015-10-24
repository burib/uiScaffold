function isPlainObject(arg) {
  return (arg && typeof arg === 'object' && !(arg instanceof Array) );
}

function createScope($rootScope, scope) {
  if (!scope) {
    return $rootScope.$new();
  }

  if (scope && isPlainObject(scope)) {
    return angular.extend($rootScope.$new(), scope);
  }

  return scope;
}


function getInjector() {
  var injector;

  inject(function ($injector) {
    injector = $injector;
  });

  return injector;
}

function createController(controllerName, scope, locals) {
  return getInjector().invoke(controllerFactory)(controllerName);

  function controllerFactory($rootScope, $controller) {
    return function (controllerName) {
      var localScope = createScope($rootScope, scope),
          controller = $controller(controllerName, angular.extend({$scope: localScope}, locals || {}));
      controller._scope = localScope;

      return controller;
    };
  }
}

function provideMock($provide, mockName, mockMethods) {
  var mock = mockMethods ? jasmine.createSpyObj(mockName, mockMethods) : jasmine.createSpy(mockName);

  $provide.value(mockName, mock);

  return mock;
}

window.createDirective = function (template, localScope) {
  // this thing is not good enough, don't use it yet.
  var elem;

  inject(function ($compile, $rootScope) {
    elem = $compile(template)(createScope($rootScope, localScope));
    $rootScope.$digest();
  });

  return elem;
};

beforeEach(function () {
  window.createController = createController;
  window.createDirective = createDirective;
  window.provideMock = provideMock;
});



