import React from 'react';
import { 
    View,
    Text
 } from "react-native";

 import { FONTS } from "../constants";

 const Header = ({ containerStyele, title, leftComponent, rightComponent}) =>{
     return(
         <View
            style={{
                flexDirection:'row',
                ...containerStyele
            }}
         >
            {/* Left */}
            {leftComponent}
            {/* Title */}
            <View
                style={{
                    flex: 1,
                    alignItems:'center',
                    justifyContent:'center'
                }}
            >
                <Text
                    style={{...FONTS.h3}}
                >
                    {title}
                </Text>
            </View>
            {/* Right */}
            {rightComponent}
         </View>
     )
 }

 export default Header;