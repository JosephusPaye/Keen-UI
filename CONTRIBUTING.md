# Contributing Guidelines

Please take care to observe the following when you contribute code to Keen UI:

1. **Before** you do a lot of work that could potentially be rejected, create an issue with your proposal for discussion. You don't have to do this if an issue already exists and has been marked for inclusion (i.e., it has a milestone assigned).

2. For Javascript, follow the [Airbnb JS Styleguide](https://github.com/airbnb/javascript), with a few tweaks, the important parts being:
    - Indent with 4 spaces
    - Use semicolons
    - Use camel casing
    - Use lowercase for keywords such as `if`, `for`, `while`, etc.
    - Use `let` and `const` where possible in place of `var`
    - Use the ES6 method shorthand syntax where possible
    - Keep lines no more than 100 characters long (check the ruler setting for your editor)
    - Remove all whitespace at the end of lines
    - Have a single final newline in all files
    - Have open braces on the same line as control statements. Example:
        ```js
        if ( ... ) {

        } else {
            ...
        }
        ```

3. For HTML, use the following guide:

    For tags that cross the max line limit (100 characters), open the tag, then drop down to an indented line and place attributes until you run out of space, then drop to a new indented line.

    After all attributes, drop down to a new line with same indent as opening tag, add closing > and then close the tag. Have a look at any of the component's source to see this in practice.

    **Note**: This doesn't apply to content (e.g. text inside `div`, `p`, `span`, etc.) and tags that don't cross the 100 character per line limit

    ![Example image of HTML formatting](https://i.imgur.com/byQbxZn.png)
