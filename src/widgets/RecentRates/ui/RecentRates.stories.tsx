import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';

import { ResentRatesReducer } from '../model/slice/ResentRatesSlice';

import { RecentRates } from './RecentRates';

export default {
  title: 'Widgets/RecentRates',
  component: RecentRates,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RecentRates>;

const Template: ComponentStory<typeof RecentRates> = () => <RecentRates />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({}, { recentRates: ResentRatesReducer })];

export const Dark = Template.bind({});
Dark.decorators = [
  StoreDecorator({}, { recentRates: ResentRatesReducer }),
  ThemeDecorator(Themes.DARK),
];
