import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { ChoseBaseCurrencyReducer } from '../../model/slice/ChoseBaseCurrencySlice';

import { ChoseBaseCurrency } from './ChoseBaseCurrency';

export default {
  title: 'Features/ChoseBaseCurrency',
  component: ChoseBaseCurrency,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ChoseBaseCurrency>;

const Template: ComponentStory<typeof ChoseBaseCurrency> = (args) => (
  <ChoseBaseCurrency {...args} />
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
  currentCurrency: { abbr: 'rus', description: 'Russian Ruble' },
};
Light.decorators = [
  StoreDecorator({}, { choseBaseCurrency: ChoseBaseCurrencyReducer }),
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
  currentCurrency: { abbr: 'rus', description: 'Russian Ruble' },
};
Dark.decorators = [
  StoreDecorator({}, { choseBaseCurrency: ChoseBaseCurrencyReducer }),
  ThemeDecorator(Themes.DARK),
];
