const scanner = require("sonarqube-scanner");
scanner(
  {
    login: "admin",
    password: "$~K#j63;_YRW*'3",
    token: "sqa_78ca888609e0dbbc712335bff103bc81f2e15ed4",
    projectKey :"thunder-library",
    options: {
      "sonar.sources": "./src",
      "sonar.sourceEncoding": "UTF-8",
        "sonar.projectKey": "thunderL",
        "sonar.projectName": "thunder library",
        "sonar.projectVersion":"1.0",
        "sonar.sources":"thunder-library",
        "sonar.language":"js",
        "sonar.host.url" :"http://localhost:9000",
        "sonar.login" : "sqa_78ca888609e0dbbc712335bff103bc81f2e15ed4"
    },
  },
  () => process.exit()
);