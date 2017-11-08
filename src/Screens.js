import React, { Component } from 'react';
import UserList from './component/UserList';
import AddUser from "./component/AddUser";
import { StackNavigator, TabNavigator } from "react-navigation";
import {
  AppRegistry,
} from "react-native";

export const Screens = StackNavigator({
  UserList: { screen: UserList },
  AddUser: { screen: AddUser },
});

export default Screens;