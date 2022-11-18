import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { SearchBaseCurrencyReducer } from 'entities/searchCurrency/model/slice/SearchBaseCurrencySlice';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';

import { CurrencyBaseMenu } from './CurrencyBaseMenu';

export default {
  title: 'Entities/CurrencyMenu',
  component: CurrencyBaseMenu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CurrencyBaseMenu>;

const Template: ComponentStory<typeof CurrencyBaseMenu> = (args) => (
  <CurrencyBaseMenu {...args} />
);

// Default
export const Default = Template.bind({});
Default.args = {
  currencyList: [
    { abbr: 'rub', description: 'Russian ruble' },
    { abbr: 'usd', description: 'United States Dollar' },
    { abbr: 'eur', description: 'Euro' },
    { abbr: 'gbp', description: 'Pound Sterling' },
    { abbr: 'ada', description: 'Cardano' },
    { abbr: 'ada', description: 'Cardano' },
    { abbr: 'ada', description: 'Cardano' },
    { abbr: 'ada', description: 'Cardano' },
    { abbr: 'ada', description: 'Cardano' },
    { abbr: 'ada', description: 'Cardano' },
  ],
  isCurMenu: true,
};
Default.decorators = [
  StoreDecorator(
    {},
    {
      searchBaseCurrency: SearchBaseCurrencyReducer,
    },
  ),
];

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  currencyList: [
    { abbr: 'rub', description: 'Russian ruble' },
    { abbr: 'usd', description: 'United States Dollar' },
    { abbr: 'eur', description: 'Euro' },
    { abbr: 'gbp', description: 'Pound Sterling' },
    { abbr: 'ada', description: 'Cardano' },
    { abbr: 'ada', description: 'Cardano' },
    { abbr: 'ada', description: 'Cardano' },
    { abbr: 'ada', description: 'Cardano' },
    { abbr: 'ada', description: 'Cardano' },
    { abbr: 'ada', description: 'Cardano' },
    { abbr: 'ada', description: 'Cardano' },
  ],
  isCurMenu: true,
};
DefaultDark.decorators = [
  StoreDecorator(
    {},
    {
      searchBaseCurrency: SearchBaseCurrencyReducer,
    },
  ),
  ThemeDecorator(Themes.DARK),
];
