# simple test file to demonstrate fast js updates with watch.
message = require './message'

$ ->
  $('.test-button').click ->
    alert message
