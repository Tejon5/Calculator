import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container1:{
        flex:1,
        backgroundColor:'black'
    },
    calculadoraContainer:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:10,
        paddingVertical:5
    },
    littleResult:{
        fontSize:20,
        color:'rgba(255,255,255,0.8)',
        textAlign:'right',
    },
    result:{
        fontSize:50,
        color:'white',
        textAlign:'right',
    },
    rows:{
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap'      
    },
    button:{
        width:82,
        height:82,
        borderRadius:100,
        borderWidth:10,
        backgroundColor:'#2D2D2D',
        justifyContent:'center',
    },
    buttonText:{
        color:'white',
        fontSize:25,
        fontWeight:'300',
        textAlign:'center'
    },
    orangeButton:{
        backgroundColor:'#FF9427'
    },
    greyButton:{
        backgroundColor:'#9B9B9B',
        color:'black'
    },
    goldButton:{
        backgroundColor:'gold',
        //borderColor:'rgb(14, 70, 203)',
    },
    buttonBokeText:{
        color: 'rgb(14, 70, 203)',
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center'
    },
    buttonCero:{
        width:160,
        height:80,
        borderRadius:100,
        borderWidth:10,
    }
})