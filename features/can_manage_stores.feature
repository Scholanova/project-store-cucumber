Feature: Can manage stores
  One can get, create, update and delete stores on the server

  Background:
    Given the server url is "https://project-store-gomvui.osc-fr1.scalingo.io"

  Scenario: Create a store with valid data
    When I create a store
    Then the response status should be 200
    And the response contains a store with the data I provided
    And the response contains an id

  Scenario: Get an existing store
    Given I have a store
    When I get that store by id
    Then the response status should be 200
    And the response contains that store

  Scenario: Get a non existing store
    When I get a store by id with a random id
    Then the response status should be 404

  Scenario: Delete an existing store
    Given I have a store
    When I delete that store
    Then the response status should be 204
    And store does not exist anymore