# react-testing-library-sample-app
Developed an application to unit test using 'testing-library/react'

Created an application which contains a "Increment" and "Decrement" button to increment/decrement the counter and display it in the div tag.
Also contains a text field and button. Button gets enabled only if user inputs "DELETE" into text field.
Above are the behaviour of the application.

To do the unit testing for the application developed, we used react testing library('@testing-library/react') and describe few test cases based on the application behaviour.
Scenarios covered:
render the click event of increment button and increment counter value
render the click event of decrement button and decrement counter value
text field onChange() is called upon changing the text field and button disabled/enabled check


To start with the application:
Download the source and run the "yarn install" command to get required package gets installed
To run the test run "yarn test" to execute the test cases writen using react-testing-library('@testing-library/react')
