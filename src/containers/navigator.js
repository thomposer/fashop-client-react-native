import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { ThemeStyle } from "../utils/PublicStyleModule";
import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';

// public 
import IndexView from "../pages/index";


// home


// category


// shopCart


// user
import UserLogin from "../pages/user/login";
import UserRegister from "../pages/user/register";


// CardStackStyleInterpolator.forVertical
const modalStyleStackNames = [
    // 'UserLogin',
]


const indexNavigationOptions = ({ navigation})=>({
    'Home': {
        title:'首页',
    },
    'Category': {
        title: '分类'
    },
    'ShopCart': {
        title: '购物车',
    },
    'User': {
        title: '我的',
    },
})

export default createStackNavigator(
    {
        IndexView: {
            screen: IndexView,
            navigationOptions:({ navigation }) => {
                const options = indexNavigationOptions({navigation})[navigation.state.routes[navigation.state.index].routeName]
                return options
            }
        },
        UserLogin: {
            screen: UserLogin,
        },
        UserRegister: {
            screen: UserRegister,
            navigationOptions: {
                title: '注册'
            }
        },
    }, {
        navigationOptions: ({ navigation })=>({
            headerTintColor: ThemeStyle.ThemeColor,
            headerBackTitle: null,
            gesturesEnabled : true,
            headerStyle : {
                backgroundColor: "#fff",
                elevation: 0,//去掉安卓阴影
                borderBottomWidth:0.5,
                borderBottomColor:'#dcdcdc',
            },
            headerTintColor: '#000',
        }),
        headerTransitionPreset: 'uikit',
        mode: "card",
        // ...Platform.select({
        //     ios: {
        //         headerMode: 'screen',
        //     },
        //     android: {
        //         headerMode: 'screen',
        //     },
        // }),
        transitionConfig:(e) => ({
            screenInterpolator: (sceneProps) => {
                const { scene } = sceneProps;
                const { route } = scene;
                if(modalStyleStackNames.includes(route.routeName)){
                    return CardStackStyleInterpolator.forVertical(sceneProps);
                }
                return CardStackStyleInterpolator.forHorizontal(sceneProps);
            }
        })
    }
)
