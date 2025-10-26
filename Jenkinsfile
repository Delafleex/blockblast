pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "username/blockblast:latest"
        DOCKER_CREDENTIALS = "dockerhub-credentials"
    }

    stages {
        stage('Checkout') {
            steps { checkout scm }
        }

        stage('Build Docker Image') {
            steps { sh 'docker build -t $DOCKER_IMAGE .' }
        }

        stage('Login & Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: env.DOCKER_CREDENTIALS, usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }

        stage('Test Run Container') {
            steps {
                sh 'docker run -d --name blockblast-test -p 19000:19000 $DOCKER_IMAGE'
            }
        }
    }

    post {
        success { echo "✅ Build & Push Success" }
        failure { echo "❌ Pipeline Failed" }
    }
}