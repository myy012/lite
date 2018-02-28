'use strict';

import { titleOption } from './titleConfig';
import Second from '../view/Second';
import H5 from '../view/H5';

export const router = {
    second: {
        screen: Second,
        navigationOptions: ({navigation}) => titleOption(navigation,'二级页面')
    },
    h5: {
        screen: H5,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    }
};

