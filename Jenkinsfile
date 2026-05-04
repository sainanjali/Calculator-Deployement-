pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main',
                url: 'https://github.com/sainanjali/Calculator-Deployement-.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('calculator') {
                    bat 'npm install'
                }
            }
        }

        stage('Run Test Cases') {
            steps {
                dir('calculator') {
                    bat 'npm test'
                }
            }
        }

        stage('Deploy Website') {
            steps {
                dir('calculator') {
                    bat 'npm run build'
                }
            }
        }
    }
}