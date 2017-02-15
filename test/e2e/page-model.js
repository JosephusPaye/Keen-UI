import { Selector } from 'testcafe';

class UIAutocomplete {
    constructor(selector) {
        this.container = selector;

        this.label = this.container.find('.ui-autocomplete__label-text');
        this.clear = this.container.find('.ui-autocomplete__clear-button');
        this.input = this.container.find('.ui-autocomplete__input');
    }
}

class UIAutocompleSection {
    constructor(title) {
        this.title = Selector('.page__demo-title').withText(title);
        this.container = this.title.nextSibling();
        this.autocomplete = new UIAutocomplete(this.container.find('.ui-autocomplete__label'));
        this.feedback = this.container.find('.ui-autocomplete__feedback-text');
    }
}

export default class IndexPage {
    constructor() {
        const leftSidebarSelector = Selector('.keen-docs-sidebar');

        this.leftSidebarMenu = {
            components: {
                uiAutocomplete: leftSidebarSelector.find('a').withText('UiAutocomplete')
            }
        };
        this.content = {
            uiAutocomplete: {
                basic: new UIAutocompleSection('Basic'),
                validationRequired: new UIAutocompleSection('Validation: required')
            }
        };
    }
}
