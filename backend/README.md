# dehet

This application was generated using the [NodeJS blueprint](https://github.com/jhipster/generator-jhipster-nodejs) of JHipster 6.8.0, you can find documentation and help at [https://www.jhipster.tech/documentation-archive/v6.8.0](https://www.jhipster.tech/documentation-archive/v6.8.0). For any questions you can refer to the stream lead: [Angelo Manganiello](https://github.com/amanganiello90).

## Development

To start your application in the dev profile, simply run:

    cd server && npm install
    npm run start:app

For further instructions on how to develop with JHipster, have a look at [Using JHipster in development][].

### Using NestJS CLI

You can also use [NestJS CLI][] to generate some custom server code.

For example, the following command:

    nest generate module my-module

will generate the file:

    create server/src/my-component/my-component.module.ts

## Building and running

#### Running

```bash
npm run start:app
```

#### Building

```bash
npm build:app
```

The build folder with all compiled sources will be **server/dist**.

> For more explanation about full stack server/client build refer to [server/README.md](server/README.md)

### Code quality

Sonar is used to analyse code quality. You can start a local Sonar server (accessible on http://localhost:9001) with:

```
docker-compose -f src/main/docker/sonar.yml up -d
```

You can run a Sonar analysis with using the [sonar-scanner](https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner).
Then, run a Sonar analysis in the server folder:

    npm run sonar:scanner

For more information, refer to the [Code quality page][].

[jhipster homepage and latest documentation]: https://www.jhipster.tech
[jhipster 6.8.0 archive]: https://www.jhipster.tech/documentation-archive/v6.8.0
[using jhipster in development]: https://www.jhipster.tech/documentation-archive/v6.8.0/development/
[using docker and docker-compose]: https://www.jhipster.tech/documentation-archive/v6.8.0/docker-compose
[using jhipster in production]: https://www.jhipster.tech/documentation-archive/v6.8.0/production/
[running tests page]: https://www.jhipster.tech/documentation-archive/v6.8.0/running-tests/
[code quality page]: https://www.jhipster.tech/documentation-archive/v6.8.0/code-quality/
[setting up continuous integration]: https://www.jhipster.tech/documentation-archive/v6.8.0/setting-up-ci/
