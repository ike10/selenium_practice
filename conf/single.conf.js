LT_USERNAME = process.env.LT_USERNAME || "<LambdaTest_username>";
LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "<LambdaTest_accesskey>";

exports.capabilities = {
  'build': 'Mocha-Selenium-Sample',
  'name': 'Your Test Name',
  'platform':'Windows 10',
  'browserName': 'chrome',
  'version': 'latest',
  'visual': false,
  'network':false,
  'console':false,
  'tunnel': false
  };