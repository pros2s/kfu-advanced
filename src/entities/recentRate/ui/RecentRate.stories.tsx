import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { ChoseBaseCurrencyReducer } from 'features/choseCurrency';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { ResentRatesReducer } from 'widgets/RecentRates';

import { RecentRate } from './RecentRate';

export default {
  title: 'Entities/RecentRate',
  component: RecentRate,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RecentRate>;

const Template: ComponentStory<typeof RecentRate> = (args) => (
  <RecentRate {...args} />
);

// Positive
export const Positive = Template.bind({});
Positive.args = {
  currencyName: { abbr: 'rub', description: 'Russian ruble' },
  currencyRecentRate: 40,
  currencyYesterdayRate: 30,
};
Positive.decorators = [
  StoreDecorator(
    {
      choseBaseCurrency: {
        currentCurrency: { abbr: 'usd', description: 'United States Dollar' },
      },
    },
    {
      recentRates: ResentRatesReducer,
      choseBaseCurrency: ChoseBaseCurrencyReducer,
    },
  ),
];

export const PositiveDark = Template.bind({});
PositiveDark.args = {
  currencyName: { abbr: 'rub', description: 'Russian ruble' },
  currencyRecentRate: 40,
  currencyYesterdayRate: 30,
};
PositiveDark.decorators = [
  StoreDecorator(
    {
      choseBaseCurrency: {
        currentCurrency: { abbr: 'usd', description: 'United States Dollar' },
      },
    },
    {
      recentRates: ResentRatesReducer,
      choseBaseCurrency: ChoseBaseCurrencyReducer,
    },
  ),
  ThemeDecorator(Themes.DARK),
];

// Negative
export const Negative = Template.bind({});
Negative.args = {
  currencyName: { abbr: 'rub', description: 'Russian ruble' },
  currencyRecentRate: 20,
  currencyYesterdayRate: 30,
};
Negative.decorators = [
  StoreDecorator(
    {
      choseBaseCurrency: {
        currentCurrency: { abbr: 'usd', description: 'United States Dollar' },
      },
    },
    {
      recentRates: ResentRatesReducer,
      choseBaseCurrency: ChoseBaseCurrencyReducer,
    },
  ),
];

export const NegativeDark = Template.bind({});
NegativeDark.args = {
  currencyName: { abbr: 'rub', description: 'Russian ruble' },
  currencyRecentRate: 20,
  currencyYesterdayRate: 30,
};
NegativeDark.decorators = [
  StoreDecorator(
    {
      choseBaseCurrency: {
        currentCurrency: { abbr: 'usd', description: 'United States Dollar' },
      },
    },
    {
      recentRates: ResentRatesReducer,
      choseBaseCurrency: ChoseBaseCurrencyReducer,
    },
  ),
  ThemeDecorator(Themes.DARK),
];
