pipeline {
agent any
stages {
    stage('Build Docker Image') {
        steps {
            sh '/usr/bin/docker build -t my-node-app .'
        }
    }
    stage('Run Container') {
        steps {
            sh '/usr/bin/docker rm -f my-node-app || true'
            sh '/usr/bin/docker run -d -p 3000:3000 --name my-node-app my-node-app'
        }
    }
}
}

