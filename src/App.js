import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from "react-admin";
import dataProvider from './dataProvider'
import authProvider from './authProvider'
import { ContactsList } from './Contacts';




export const App = () => 
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="Contacts" list={ContactsList} />
    </Admin>;