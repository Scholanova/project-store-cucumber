Feature: Is the server up ?
  Verify the server is up, and accessible.

  Background:
    Given the server url is "http://localhost:8080"

  Scenario: The server is up
    When I ping the server
    Then the response status should be 200