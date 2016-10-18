templateUrl = require "./contacts.template.html"


angular.module("GulpRailsApp").directive "grContacts", ->
  restrict: "E"
  bindToController: true
  controllerAs: "contactsVm"
  templateUrl: templateUrl
  controller: ->
    @.welcomeMessage = "Contacts Directive :: Welcome"

    return
