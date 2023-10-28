import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
    
  container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingTop: 50,
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
    borderRadius: 12,
    marginTop: 6
  },

  carTitle:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10
  },

  rentalContainer:{
    flex: 1,
    backgroundColor: 'white',
    padding: 15
  },

  listingsInput: {
    borderWidth: 1,
    borderColor: '#777',
    paddingLeft: 6,
    width: '100%',
    marginVertical: 4
}

});