import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { ChoseFromCurrencyReducer } from '../../model/slice/ChoseFromCurrencySlice';

import { ChoseFromCurrency } from './ChoseFromCurrency';

export default {
  title: 'Features/ChoseFromCurrency',
  component: ChoseFromCurrency,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ChoseFromCurrency>;

const Template: ComponentStory<typeof ChoseFromCurrency> = (args) => (
  <ChoseFromCurrency {...args} />
);

// Default
export const Light = Template.bind({});
Light.args = {
  currencyList: [
    { abbr: 'rub', description: 'Russian ruble' },
    { abbr: 'usd', description: 'United States Dollar' },
    { abbr: 'eur', description: 'Euro' },
    { abbr: 'gbp', description: 'Pound Sterling' },
    { abbr: 'ada', description: 'Cardano' },
  ],
};
Light.decorators = [
  StoreDecorator(
    {
      choseFromCurrency: {
        currentCurrency: { abbr: 'rub', description: 'Russian ruble' },
      },
    },
    { choseFromCurrency: ChoseFromCurrencyReducer },
  ),
];

export const Dark = Template.bind({});
Dark.args = {
  currencyList: [
    { abbr: 'rub', description: 'Russian ruble' },
    { abbr: 'usd', description: 'United States Dollar' },
    { abbr: 'eur', description: 'Euro' },
    { abbr: 'gbp', description: 'Pound Sterling' },
    { abbr: 'ada', description: 'Cardano' },
  ],
};
Dark.decorators = [
  StoreDecorator(
    {
      choseFromCurrency: {
        currentCurrency: { abbr: 'rub', description: 'Russian ruble' },
      },
    },
    { choseFromCurrency: ChoseFromCurrencyReducer },
  ),
  ThemeDecorator(Themes.DARK),
];
