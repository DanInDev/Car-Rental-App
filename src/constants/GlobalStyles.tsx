import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
    
  container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    },

    button: {
      backgroundColor: "777",
      borderWidth: 1,
      borderColor: '#777',
      borderRadius:15,
      alignItems: 'center',
      padding: 8,
      margin: 10,
      width: 200,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },

  imageFormatting:{
    width: '100%',
  },
  
});