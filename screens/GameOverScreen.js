import { Text, View , Image, StyleSheet ,useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
function GameOverScreen({roundsNumber, userNumber, onStartNewGame}){

  const {width, height}= useWindowDimensions();

  let imageSize = 300;
  if(width<360){
     imageSize =150;
  }
  if(height< 400){
    imageSize = 80;
  }
  const imageStyle ={
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2 
  }
    return(
        <View style={styles.rootContainer}>
           <Title>GAME OVER!</Title> 
           <View style={[styles.imageContainer,imageStyle]}>
           <Image style={styles.image} source={require('../assets/images/success.png')}/>
           </View>
           <Text style ={styles.summarytext}>
           Your phone needed <Text style={styles.Highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.Highlight}>{userNumber}</Text>.
           </Text>
           <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer:{
      flex: 1,
      padding: 24,
      justifyContent:'center',
      alignItems:'center',

    },
   imageContainer:{
    //  width: deviceWidth< 360 ? 150: 300 ,
    //  height: deviceWidth< 360 ? 150: 300,
    //  borderRadius: deviceWidth< 360 ? 75: 150,
     borderWidth: 3,
     borderColor: Colors.primary800,
     overflow: 'hidden',
     margin: 36,
   },
   image:{
     width:"100%",
     height:'100%',
   },
   summarytext:{
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
   },
   Highlight:{
   
    fontWeight:'bold',
    color: Colors.primary500

   },

})