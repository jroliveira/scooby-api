# Scooby (api)

[![Code Climate](https://codeclimate.com/github/jroliveira/scooby-api/badges/gpa.svg)](https://codeclimate.com/github/jroliveira/scooby-api)
[![bitHound Overall Score](https://www.bithound.io/github/jroliveira/scooby-api/badges/score.svg)](https://www.bithound.io/github/jroliveira/scooby-api)
[![bitHound Code](https://www.bithound.io/github/jroliveira/scooby-api/badges/code.svg)](https://www.bithound.io/github/jroliveira/scooby-api)
[![bitHound Dependencies](https://www.bithound.io/github/jroliveira/scooby-api/badges/dependencies.svg)](https://www.bithound.io/github/jroliveira/scooby-api/master/dependencies/npm)
[![Build Status](https://travis-ci.org/jroliveira/scooby-api.svg?branch=master)](https://travis-ci.org/jroliveira/scooby-api)

### Pre requirements

* [Node.js](https://nodejs.org/en/)
* [Docker Compose](https://docs.docker.com/compose/install/)

### Installing

``` bash
$ git clone https://github.com/jroliveira/scooby-api.git
```

### Configuration

Verificar a issue [Configurar primeiro acesso do Neo4j](https://github.com/jroliveira/scooby-api/issues/1) para configurar o primeiro acesso a aplicação.
Assim que a issue for resolvida, acredito que este passo não existirá mais.

### Building

``` bash
$ docker-compose rm --all &&
>  docker-compose pull &&
>  docker-compose build --no-cache &&
>  docker-compose up -d --force-recreate
```

### How to use it

``` bash
$ docker-compose up
```

### Contributions

1. Fork it
2. git checkout -b <branch-name>
3. git add --all && git commit -m "feature description"
4. git push origin <branch-name>
5. Create a pull request
