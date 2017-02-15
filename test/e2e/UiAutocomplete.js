import IndexPage from './page-model';

const indexPage = new IndexPage();
const uiAutocompletePageContent = indexPage.content.uiAutocomplete;
const basicSection = uiAutocompletePageContent.basic;
const validationRequiredSection = uiAutocompletePageContent.validationRequired;

fixture `UiAutocomplete`
    .page('http://localhost:8080/docs/index.html#/ui-autocomplete');

test('basic', async t => {
    await t.typeText(basicSection.autocomplete.input, 'jan')
        .pressKey('enter')
        .expect(basicSection.autocomplete.input.value).eql('January');
});

test('validation required', async t => {
    await t.typeText(validationRequiredSection.autocomplete.input, 'jan')
        .pressKey('enter')
        .hover(validationRequiredSection.autocomplete.clear)
        .wait(5000)
        .click(validationRequiredSection.autocomplete.clear)
        .expect(validationRequiredSection.feedback.innerText).eql('This field is required');
});
