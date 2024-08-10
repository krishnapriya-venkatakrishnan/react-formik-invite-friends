## React- Invite friends using Formik

### Overview
The Friends Invitation Form is a simple yet powerful form application that allows users to dynamically add and remove friends' names and email addresses. 
The form is validated using Yup, ensuring that each friend's information is correctly formatted before submission. 
Once the form is submitted, the data is displayed in a JSON format via an alert.

### Components and its usage
- App Component
  The App component is the main component that sets up the form using Formik and Yup. It handles the form's initial values, validation schema, and submission behavior.

- Key Parts:
  - Initial Values: The form starts with a single friend object containing empty name and email fields.
  - Validation Schema: Uses Yup to enforce rules on each friend's name and email.
  - FieldArray: Manages the dynamic addition and removal of friends.

- Formik Integration
  The form is managed using Formik, which simplifies form handling in React. Formik provides the following features:
  - Initial Values: Defined in fInitialValues, these are the default values when the form loads.
  - Validation Schema: Formik uses Yup for validation, which is defined in the validationSchema prop.
      Friends Array:
        Must contain at least one friend.
        Each friend must have a name (max 15 characters) and an email (must be a valid email address).
        If these conditions are not met, corresponding error messages are shown.
  - Form Submission: Handled by the onSubmit function, which triggers when the form is submitted.

- FieldArray Usage
  The FieldArray component is used to dynamically add and remove friends.
  - push: Adds a friend to the end of the list.
  - remove: Removes a friend at a specific index.
  
  This dynamic handling of form fields is ideal for situations where the number of inputs might vary.

### Live Demo
(https://scrimba-krishna-v-react-formik-invite.netlify.app/)

