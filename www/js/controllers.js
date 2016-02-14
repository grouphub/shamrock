angular.module('benefitsApp.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('DashboardCtrl', function($scope) {
  $scope.cards = [
    { title: 'Alerts', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Activity', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Recommend', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' }
  ];
})

.controller('CompanyCtrl', function($scope) {
  $scope.cards = [
    { title: 'Alerts', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Activity', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Recommend', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' }
  ];
})

.controller('ServicesCtrl', function($scope) {
  $scope.cards = [
    { title: 'Alerts', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Activity', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Recommend', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' }
  ];
})

.controller('BenefitsCtrl', function($scope) {
  $scope.cards = [
    { title: 'Alerts', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Activity', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Recommend', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' }
  ];
})

.controller('EmployeesCtrl', function($scope) {
  $scope.cards = [
    { title: 'Alerts', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Activity', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Recommend', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' }
  ];
})

.controller('ComplianceCtrl', function($scope) {
  $scope.cards = [
    { title: 'Alerts', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Activity', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Recommend', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' }
  ];
})

.controller('SettingsCtrl', function($scope) {
  $scope.cards = [
    { title: 'Alerts', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Activity', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Recommend', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' }
  ];
})

.controller('HelpCtrl', function($scope) {
  $scope.cards = [
    { title: 'Alerts', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Activity', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Recommend', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' }
  ];
})

.controller('LogoutCtrl', function($scope) {
})