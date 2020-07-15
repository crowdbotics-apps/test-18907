import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile78611Navigator from '../features/UserProfile78611/navigator';
import Settings78610Navigator from '../features/Settings78610/navigator';
import Settings78608Navigator from '../features/Settings78608/navigator';
import SignIn278606Navigator from '../features/SignIn278606/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile78611: { screen: UserProfile78611Navigator },
Settings78610: { screen: Settings78610Navigator },
Settings78608: { screen: Settings78608Navigator },
SignIn278606: { screen: SignIn278606Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
