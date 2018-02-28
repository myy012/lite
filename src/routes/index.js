'use strict';

import { StackNavigator } from 'react-navigation';
import { HomeTabs } from './HomeTabs';
import { router } from './MainStack';

export const App = StackNavigator(
    { 
        Home: {
            screen: HomeTabs,
            navigationOptions: {
                header: null
            }
        },
        ...router
    },{
        headerMode: 'screen'
    }
);

