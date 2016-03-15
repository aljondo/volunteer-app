//match /-test\.js$/ in app if we choose to include our tests with our code
// versus in a separate test folder
var context = require.context('../test', true, /\.js$/);
context.keys().forEach(context);
