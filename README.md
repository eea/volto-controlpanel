# volto-controlpanel

[![Releases](https://img.shields.io/github/v/release/eea/volto-controlpanel)](https://github.com/eea/volto-controlpanel/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-controlpanel%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-controlpanel/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-controlpanel-master&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-controlpanel-master)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-controlpanel-master&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-controlpanel-master)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-controlpanel-master&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-controlpanel-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-controlpanel-master&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-controlpanel-master)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-controlpanel%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-controlpanel/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-controlpanel-develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-controlpanel-develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-controlpanel-develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-controlpanel-develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-controlpanel-develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-controlpanel-develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-controlpanel-develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-controlpanel-develop)


[Volto](https://github.com/plone/volto) add-on

## Features

Volto-cotrolpanel presents an overview of all frontend and backend packages used and their versions

![Volto Control Panel](https://raw.githubusercontent.com/eea/volto-controlpanel/master/docs/volto-controlpanel.gif)

## Getting started

### Try volto-controlpanel with Docker

      git clone https://github.com/eea/volto-controlpanel.git
      cd volto-controlpanel
      make
      make start

Go to http://localhost:3000

### Add volto-controlpanel to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@eeacms/volto-controlpanel"
   ],

   "dependencies": {
       "@eeacms/volto-controlpanel": "*"
   }
   ```

* If not, create one:

   ```
   npm install -g yo @plone/generator-volto
   yo @plone/volto my-volto-project --canary --addon @eeacms/volto-controlpanel
   cd my-volto-project
   ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-controlpanel/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-controlpanel/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-controlpanel/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
Funding

[European Environment Agency (EU)](http://eea.europa.eu)
