require "../stylesheets/global.scss"

angular = require "angular"
require "./welcomeHeaderUpdater"

# create a test module
angular.module "GulpRailsApp", []

require "./contacts"
