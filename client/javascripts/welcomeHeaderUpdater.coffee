# simple test file to demonstrate fast js updates with watch.
message = require './message'

$ ->
  $('#welcome').text message
