Feature: Is the server up ?
  Verify the server is up, and accessible.

  Background:
    Given the server url is "https://project-store-gomvui.osc-fr1.scalingo.io"

  Scenario: The server is up
    When I ping the server
    Then the response status should be 200