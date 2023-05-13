import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';

import { CurrencyConverterReducer } from '../model/slice/CurrencyConverterSlice';

import { CurrencyConverter } from './CurrencyConverter';

export default {
  title: 'Widgets/CurrencyConverter',
  component: CurrencyConverter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CurrencyConverter>;

const Template: ComponentStory<typeof CurrencyConverter> = () => (
  <CurrencyConverter />
);

// Default
export const Light = Template.bind({});
Light.decorators = [
  StoreDecorator(
    {
      currencyConverter: { inputValue: '2.3' },
    },
    { currencyConverter: CurrencyConverterReducer },
  ),
];

export const Dark = Template.bind({});
Dark.decorators = [
  StoreDecorator({}, { currencyConverter: CurrencyConverterReducer }),
  ThemeDecorator(Themes.DARK),
];

// Error
export const ErrorLight = Template.bind({});
ErrorLight.decorators = [
  StoreDecorator(
    {
      currencyConverter: { errorMessage: 'error' },
    },
    { currencyConverter: CurrencyConverterReducer },
  ),
];

export const ErrorDark = Template.bind({});
ErrorDark.decorators = [
  StoreDecorator(
    {
      currencyConverter: { errorMessage: 'error' },
    },
    { currencyConverter: CurrencyConverterReducer },
  ),
  ThemeDecorator(Themes.DARK),
];

// Loading
export const LoadingLight = Template.bind({});
LoadingLight.decorators = [
  StoreDecorator(
    {
      currencyConverter: { isLoading: true },
    },
    { currencyConverter: CurrencyConverterReducer },
  ),
];

export const LoadingDark = Template.bind({});
LoadingDark.decorators = [
  StoreDecorator(
    {
      currencyConverter: {},
    },
    { currencyConverter: CurrencyConverterReducer },
  ),
  ThemeDecorator(Themes.DARK),
];
