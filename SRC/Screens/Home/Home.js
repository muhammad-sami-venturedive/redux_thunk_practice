import React from 'react'
import { Button, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { QuoteAction } from '../../Redux/Action/QuoteAction/QuoteAction'
import { LOAD_QUOTES } from '../../Redux/Action Types/ActionTypes'

const Home = ({ quote, isLoading, loadQuotes, isError }) => {
    console.log("quote ", quote)
    console.log("isLoading", isLoading)
    console.log("isError ", isError)
    return (
        <View style={styles.mainCont} >
            {isLoading ? <ActivityIndicator /> : <Text>load finsih</Text>}
            <Text style={{ color: 'red' }}>{quote}</Text>
            <Button title='Click To Fetch The Quote' onPress={() => loadQuotes()} />
            {isError ? <Text>Error While Fetching Quote</Text> : <Text>No Error</Text>}

        </View>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadQuotes: () => dispatch(QuoteAction())
    }
}

const mapStateToProps = (state) => {
    return {
        quote: state.QuoteReducer.quote,
        isLoading: state.QuoteReducer.isLoading,
        isError: state.QuoteReducer.isError,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
    mainCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'row',
    },
})