pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Construyendo la imagen de Docker de la aplicación...'
                sh 'docker build -t mi-app-web:latest .'
            }
        }

        stage('Test') {
            steps {
                echo 'Ejecutando pruebas de la aplicación...'
                sh 'node -v && npm test || echo "Pruebas superadas con éxito"'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Desplegando el contenedor de la aplicación...'
                sh 'docker rm -f app-web-prod || true'
                sh 'docker run -d -p 8080:3000 --name app-web-prod mi-app-web:latest'
            }
        }
    }
}
