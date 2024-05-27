Scenario: Plant Moisture information is displayed
  Given I am on a plant information page for a specific plant variety
  When new data is received from the plant subsystem
  Then I should see a section titled "Plant Health"
  And within the "Plant Health" section, I should see information about Moisture

Scenario: Plant Temperature is displayed
  Given I am on a plant information page for a specific plant variety
  When new data is received from the plant subsystem
  Then I should see a section titled "Plant Health"
  And within the "Plant Health" section, I should see information about: Temperature
