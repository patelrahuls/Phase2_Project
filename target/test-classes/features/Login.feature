@LoginFeature
Feature: Login Feature Scenarios 
  Description: This feature will be validate login feauture to SwagLabs Application

  @PositiveLogin
  Scenario Outline: Verify Login Functionality with correct username and password
    Given User has opened the SwagLabs application
    When User enters "<UserName>" & "<Password>"
    And User clicks on Login button
    Then User should be landed on the Products Page

    Examples: 
      | UserName      | Password     |
      | standard_user | secret_sauce |
      
  @NegativeLogin
  Scenario Outline: Verify Login Functionality with incorrect username and password
    Given User has opened the SwagLabs application
    When User enters "<UserName>" & "<Password>"
    And User clicks on Login button
    Then User should be able to see error "<ErrorMsg>"

    Examples: 
      | UserName      | Password   | ErrorMsg																																				|
      | negative_user | saucesauce | Epic sadface: Username and password do not match any user in this service  |
