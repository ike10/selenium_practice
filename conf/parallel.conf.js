LT_USERNAME = process.env.LT_USERNAME || "<LambdaTest_username>";
LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "<LambdaTest_accesskey>";

var config = {
  commanCapabilities: {
    build: "selenium-node-automation-project",
    tunnel: false
  },
  multiCapabilities: [
    {
      name: "parallel test case",
      platform: "Windows 10",
      browserName: "firefox",
      version: "latest",
      visual: false,
      network: false,
      console: false
    },
    {
      name: "Your Test Name",
      platform: "Windows 10",
      browserName: "chrome",
      version: "latest",
      visual: false,
      network: false,
      console: false
    }
  ]
};

exports.capabilities = [];
// Code to support common capabilities
config.multiCapabilities.forEach(function(caps) {
  var temp_caps = JSON.parse(JSON.stringify(config.commanCapabilities));
  for (var i in caps) temp_caps[i] = caps[i];
  exports.capabilities.push(temp_caps);
});