Feature: Can manage stocks
  One can get, create, update and delete stocks on the server

  Background:
    Given the server url is "https://project-store-gomvui.osc-fr1.scalingo.io"
    And I have a store

  Scenario: Create a stock for the store with valid data
    When I create a stock for the store
    Then the response status should be 200
    And the response contains a stock with the data I provided
    And the response contains an id

#  Scenario: Get an existing store
#    Given I have a store
#    When I get that store by id
#    Then the response status should be 200
#    And the response contains that store
#
#  Scenario: Get a non existing store
#    When I get a store by id with a random id
#    Then the response status should be 404
#
#  Scenario: Delete an existing store
#    Given I have a store
#    When I delete that store
#    Then the response status should be 204
#    And store does not exist anymore