import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { CurrencyConverterReducer } from 'widgets/CurrencyConverter/model/slice/CurrencyConverterSlice';
import MainPage from './MainPage';

export default {
  title: 'Pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
  StoreDecorator(
    {
      currencyConverter: {},
    },
    { currencyConverter: CurrencyConverterReducer },
  ),
];

export const DefaultDark = Template.bind({});
DefaultDark.args = {};
DefaultDark.decorators = [
  StoreDecorator(
    {
      currencyConverter: {},
    },
    { currencyConverter: CurrencyConverterReducer },
  ),
  ThemeDecorator(Themes.DARK),
];
