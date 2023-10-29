import { StyleSheet } from "react-native";

export const Header = StyleSheet.create({
    header: {
        flex: 1,
        height: 80,
        allignItems: 'center',
        backgroundColor: '#1857CB',
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignContent: 'center',
        color:"white",
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 30,
        textShadowRadius: 2,
        textShadowOffset: {
        width: 1,
        height: 1,
        },
    },
})