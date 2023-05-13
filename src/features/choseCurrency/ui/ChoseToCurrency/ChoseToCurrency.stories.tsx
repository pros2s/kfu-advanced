import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';

import { ChoseToCurrencyReducer } from '../../model/slice/ChoseToCurrencySlice';

import { ChoseToCurrency } from './ChoseToCurrency';

export default {
  title: 'Features/ChoseToCurrency',
  component: ChoseToCurrency,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ChoseToCurrency>;

const Template: ComponentStory<typeof ChoseToCurrency> = (args) => (
  <ChoseToCurrency {...args} />
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
      choseToCurrency: {
        currentCurrency: { abbr: 'rub', description: 'Russian ruble' },
      },
    },
    { choseToCurrency: ChoseToCurrencyReducer },
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
      choseToCurrency: {
        currentCurrency: { abbr: 'rub', description: 'Russian ruble' },
      },
    },
    { choseToCurrency: ChoseToCurrencyReducer },
  ),
  ThemeDecorator(Themes.DARK),
];
