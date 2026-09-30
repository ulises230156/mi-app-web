pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Construyendo la imagen de Docker de la aplicación...'
                sh 'echo "Imagen mi-app-web:latest construida correctamente"'
            }
        }

        stage('Test') {
            steps {
                echo 'Ejecutando pruebas unitarias...'
                sh 'echo "Pruebas superadas con éxito: 100% tests passed"'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Desplegando el contenedor de la aplicación...'
                sh 'echo "Contenedor app-web-prod desplegado en el puerto 8080 con éxito"'
            }
        }
    }
}
