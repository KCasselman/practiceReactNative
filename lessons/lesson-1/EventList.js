import React, { Component } from 'react';
import { FlatList,Text, StyleSheet } from 'react-native';

import EventCard from './EventCard';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3'
    },
});

class EventList extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                events: this.state.events.map(evt => ({ // we want events on state to be overridden
                    ...evt,
                    timer: Date.now(), // additional attribute to each event object (it's basically a time stamp that updates every second for each event)
                })),
            });
        }, 1000);

        const events = require('./db.json').events.map(e => ({
            ...e,
            date: new Date(e.date),
        }));
        this.setState({ events }); // setting events state to the array of objects within the db.json file (normally, you would have an api to link to)
    }

    render() {
        return(
            <FlatList
                style={styles.list}
                // data={[{ name: 'a' }, { name: 'b' }]}
                data={this.state.events} // pulling data from our db.json file
                renderItem={({ item }) => <EventCard event={item} />} // .title comes from the db.json file
                keyExtractor={item => item.id} // using the id attribute of each individual object within the events array as a key
            />
        );
    }
}

export default EventList;