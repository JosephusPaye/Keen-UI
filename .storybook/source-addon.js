import React from 'react';
import { addons, types } from '@storybook/addons';
import { useParameter } from '@storybook/api';
import { AddonPanel } from '@storybook/components';
import { SyntaxHighlighter } from '@storybook/components';

const ADDON_ID = 'vueStorySource';
const PARAM_KEY = 'source';
const PANEL_ID = `${ADDON_ID}/panel`;

const SourcePanel = ({ active }) => {
    const source = useParameter(PARAM_KEY, null);
    return active && source
        ? React.createElement(
              SyntaxHighlighter,
              {
                  language: 'html',
                  showLineNumbers: false,
                  copyable: true,
                  padded: true,
                  format: false,
              },
              source
          )
        : null;
};

addons.register(ADDON_ID, api => {
    const render = ({ active, key }) =>
        React.createElement(
            AddonPanel,
            { active, key },
            React.createElement(SourcePanel, { active })
        );

    addons.add(PANEL_ID, {
        type: types.PANEL,
        title: 'Source',
        render,
        paramKey: PARAM_KEY,
    });
});
