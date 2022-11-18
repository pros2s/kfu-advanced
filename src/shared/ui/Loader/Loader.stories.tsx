import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';

import { Loader } from './Loader';

export default {
  title: 'Shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Light = Template.bind({});
Light.args = { borderWidth: '5px', size: '30px' };

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Themes.DARK)];
Dark.args = { borderWidth: '5px', size: '30px' };

export const LargeLight = Template.bind({});
LargeLight.args = { borderWidth: '15px', size: '100px' };

export const LargeDark = Template.bind({});
LargeDark.decorators = [ThemeDecorator(Themes.DARK)];
LargeDark.args = { borderWidth: '15px', size: '100px' };
