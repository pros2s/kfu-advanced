import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { Input } from './Input';

export default {
  title: 'Shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Value = Template.bind({});
Value.args = {
  value: 'value',
};

export const ValueDark = Template.bind({});
ValueDark.args = {
  value: 'value',
};
ValueDark.decorators = [ThemeDecorator(Themes.DARK)];

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'placeholder',
};

export const PlaceholderDark = Template.bind({});
PlaceholderDark.args = {
  placeholder: 'placeholder',
};
PlaceholderDark.decorators = [ThemeDecorator(Themes.DARK)];
