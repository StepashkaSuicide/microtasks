import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Button} from './Button';
import {AddItemForm} from '../AddItemForm';
import {action} from '@storybook/addon-actions';
import {Task} from '../Task';
import {TaskType} from '../Todolist';
import AppWithRedux from '../AppWithRedux';
import {Provider} from 'react-redux';
import {store} from '../state/store';
import {ReduxStoreProviderDecorator} from '../state/ReduxStoreProviderDecorator';

export default {
    title: 'TODOLISTS/AppWithRedux',
    component: AppWithRedux,
    decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof AppWithRedux> = (args) => <AppWithRedux/>;
export const AppWithReduxStory = Template.bind({});

