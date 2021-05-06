import React from 'react';

import { HelloName } from './HelloName';

export default {
    title: 'Components/HelloName',
    component: HelloName
};

const Template = (args) => <HelloName {...args} />;

export const World = Template.bind({});
World.args = {
    name: 'World'
};

export const America = Template.bind({});
America.args = {
    name: 'America',
};

export const California = Template.bind({});
California.args = {
    name: 'California'
};
