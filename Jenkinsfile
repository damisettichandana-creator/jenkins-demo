pipeline {
agent any


stages {

    stage('Build Docker Image') {
        steps {
            sh 'docker build -t my-node-app .'
        }
    }
    stage('Run Container') {
        steps {
            sh 'docker rm -f my-node-app || true'
            sh 'docker run -d -p 3000:3000 --name my-node-app my-node-app'
        }

    }

}
          
    
}



