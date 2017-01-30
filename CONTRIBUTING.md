# Contributing Guidelines

Please take care to observe the following when you contribute code to Keen UI:

1. **No new components will be accepted**. If you think there's an essential component Keen UI is missing, create an issue for discussion.

2. **Before** you put a lot of work into a pull request that could be rejected, create an issue with your proposal for discussion.

3. All Javascript code must pass the ESlint check. Run `npm run lint` to check your code.

4. For HTML, use the following formatting guide:

    For tags that cross the max line limit (100 characters), open the tag, then drop down to an indented line and place each attribute on a new line, sorted alphabetically and grouped (new line separating groups) according to the following order:

    - normal attributes
    - `v-bind` attributes (`:` shorthand only)
    - `v-on` attributes (`@` shorthand only)
    - directives

    After all attributes, drop down to a new line with the same indent as opening tag, add the closing `>` and then close the tag.

    **Note**: This doesn't apply to content (e.g. text inside `div`, `p`, `span`, etc.) and tags that don't cross the 100 character per line limit.

    **Example**:

    ![Example of HTML formatting](https://i.imgur.com/8v4vkRK.png)

5. For CSS, all selectors must follow the [BEM naming guidelines](http://getbem.com/naming/).
