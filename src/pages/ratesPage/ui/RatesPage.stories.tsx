import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { ResentRatesReducer } from 'widgets/RecentRates/model/slice/ResentRatesSlice';

import RatesPage from './RatesPage';

export default {
  title: 'Pages/RatesPage',
  component: RatesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RatesPage>;

const Template: ComponentStory<typeof RatesPage> = () => <RatesPage />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({}, { recentRates: ResentRatesReducer })];

export const DefaultDark = Template.bind({});
DefaultDark.args = {};
DefaultDark.decorators = [
  StoreDecorator({}, { recentRates: ResentRatesReducer }),
  ThemeDecorator(Themes.DARK),
];
