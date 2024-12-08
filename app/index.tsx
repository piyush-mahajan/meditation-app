import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomePage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Meditation App</Text>
            <Text style={styles.subtitle}>Find your peace and tranquility</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
});

export default HomePage; 