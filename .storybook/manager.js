import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
    theme: create({
        base: 'light',
        brandTitle: 'Custom Notion Blocks',
        brandUrl: 'https://customnotionblocks.com',
        brandTarget: '_self',
    }),
});