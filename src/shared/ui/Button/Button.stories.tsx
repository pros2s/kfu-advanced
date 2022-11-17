import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';

import { Button, ButtonSizes, ButtonThemes } from './Button';

export default {
  title: 'Shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Default
export const Default = Template.bind({});
Default.args = {
  children: 'text',
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Themes.DARK)];
DefaultDark.args = {
  children: 'text',
};

// Clear
export const Clear = Template.bind({});
Clear.args = {
  children: 'text',
  theme: ButtonThemes.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.decorators = [ThemeDecorator(Themes.DARK)];
ClearDark.args = {
  children: 'text',
  theme: ButtonThemes.CLEAR,
};

// With border
export const Outline = Template.bind({});
Outline.args = {
  children: 'text',
  theme: ButtonThemes.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.decorators = [ThemeDecorator(Themes.DARK)];
OutlineDark.args = {
  children: 'text',
  theme: ButtonThemes.OUTLINE,
};

// Sizes
export const S = Template.bind({});
S.args = {
  children: 'text',
  size: ButtonSizes.S,
};

export const M = Template.bind({});
M.args = {
  children: 'text',
  size: ButtonSizes.M,
};

export const L = Template.bind({});
L.args = {
  children: 'text',
  size: ButtonSizes.L,
};

export const XL = Template.bind({});
XL.args = {
  children: 'text',
  size: ButtonSizes.XL,
};

// Disabled
export const Disabled = Template.bind({});
Disabled.args = {
  children: 'text',
  theme: ButtonThemes.OUTLINE,
  isDisabled: true,
};

export const DarkDisabled = Template.bind({});
DarkDisabled.decorators = [ThemeDecorator(Themes.DARK)];
DarkDisabled.args = {
  children: 'text',
  theme: ButtonThemes.OUTLINE,
  isDisabled: true,
};
