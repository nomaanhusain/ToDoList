import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function Tasks(props) {
    return (
        <View style={styles.items}>
            <View style={styles.itemLeft}>
            <TouchableOpacity style={styles.square}></TouchableOpacity>
            <Text style={styles.itemsText}>{props.note}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles=StyleSheet.create({
    items:{
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    square:{
        height:24,
        width:24,
        backgroundColor:'#f5b400',
        opacity:0.4,
        borderRadius:5,
        marginRight:15
    },
    itemsText:{
        maxHeight:'80%'
    },
    circular:{
        width:12,
        height:12,
        borderColor:'#8a6500',
        borderWidth:2,
        borderRadius:5
    }
});
