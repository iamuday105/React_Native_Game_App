
import {Text, StyleSheet, Platform } from "react-native";


function Title({children}){

return <Text style={styles.tittle}>{children}</Text>;

}

export default Title;


const styles = StyleSheet.create({
    tittle:{
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        // fontWeight: 'bold',
        color: 'white',
        textAlign:'center',
        // borderWidth: Platform.OS === 'android'? 2 : 0,
        borderWidth: Platform.select({ios:0, android: 2}),
        borderColor: 'white',
        padding: 12,
        maxWidth:"100%",
        width:300,
    }
});