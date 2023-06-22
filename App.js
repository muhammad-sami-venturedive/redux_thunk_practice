import React from 'react'
import Store from './SRC/Redux/Store/Store'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import Home from './SRC/Screens/Home/Home'

const App = () => {
    return (
        <Provider store={Store}>
            <Home />
        </Provider>
    )
}

export default App

const styles = StyleSheet.create({})