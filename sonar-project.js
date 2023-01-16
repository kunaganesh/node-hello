const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
   serverUrl: 'http://52.39.121.30/',
       options : {
	        'sonar.projectDescription': 'This is nodejs application',
			'sonar.projectName': 'node-hello',
			'sonar.login': 'admin',
			'sonar.password': 'admin',
			'sonar.projectVersion': '1.0',
			'sonar.language': 'js',
			'sonar.sourceEncoding': 'UTF-8',
			'sonar.sources': '.',
			
	   },
   }, () => {});
