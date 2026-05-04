pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/sainanjali/Calculator-Deployement-.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Test Cases') {
            steps {
                bat 'npm test'
            }
        }

        stage('Deploy Website') {
            steps {
                bat '''
                xcopy index.html C:\\deploy\\calculator\\ /Y
                xcopy style.css C:\\deploy\\calculator\\ /Y
                xcopy script.js C:\\deploy\\calculator\\ /Y
                '''
            }
        }
    }
}