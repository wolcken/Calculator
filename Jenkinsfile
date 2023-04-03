pipeline {
    agent any

    tools {
        nodejs "node"
    }

    parameters {
        string(name: 'container_name', defaultValue: 'pagina_web', description: 'Nombre del contenedor de docker.')
        string(name: 'image_name', defaultValue: 'pagina_img', description: 'Nombre de la imagen docker.')
        string(name: 'tag_image', defaultValue: 'lts', description: 'Tag de la imagen de la pagina')
        string(name: 'container_port', defaultValue: '80', description: 'Puerto que usa el contenedor')
    }

    stages {
        stage('install') {
            steps {
                git 'https://github.com/wolcken/Calculator.git'
                sh 'npm install'
            }
        }

        stage('build') {
            steps {
                script {
                    try {
                        sh 'docker stop ${container_name}'
                        sh 'docker rm ${container_name}'
                        sh 'docker rmi ${imagen_name}:${tag_image}'
                    } catch (Exception e) {
                        echo 'Exception occurred: ' + e.toString()
                    }
                }
                sh 'npm run build'
                sh 'docker build -t ${image_name}:${tag_image} .'
            }
        }

        stage('deploy') {
            steps {
                sh 'docker run -d -p ${container_port}:80 --name ${container_name} ${image_name}:${tag_image}'
            }
        }
    }
}