import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Button} from './Button';
import {AddItemForm} from '../AddItemForm';
import {action} from '@storybook/addon-actions';
import {Task} from '../Task';
import {TaskType} from '../Todolist';
import { ReduxStoreProviderDecorator } from '../state/ReduxStoreProviderDecorator';

export default {
    title: 'TODOLISTS/Task',
    component: Task,
    args: {
        changeTaskStatus: action('changeTaskStatus'),
        changeTaskTitle: action('changeTaskTitle'),
        removeTask: action('removeTask'),
        todolistId: 'aaa',
    },
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDone = Template.bind({});

TaskIsDone.args = {
    task: {id: '1', title: 'JS', isDone: true},
};

export const TaskNotIsDone = Template.bind({});

TaskNotIsDone.args = {
    task: {id: '2', title: 'HTML', isDone: false},
};

