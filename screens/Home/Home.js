import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
} from 'react-native';

import {
    FONTS,
    SIZES,
    COLORS,
    icons,
    dummyData,
    images,
} from "../../constants";



const Home = () => {
    function renderSearch(){
        return(
            <View
                style={{
                    flexDirection:'row',
                    height: 40,
                    alignItems:'center',
                    marginHorizontal: SIZES.padding,
                    marginVertical: SIZES.base,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                {/* Icon */}
                <Image
                    source={icons.search}
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: COLORS.black
                    }}
                />
                {/* Text Input */}
                <TextInput
                    style={{
                        flex: 1,
                        marginLeft:SIZES.radius,
                        ...FONTS.body3,
                        // top: 1,
                    }}
                    placeholder='search food'
                />
                {/* Filter Button */}
                <TouchableOpacity
                    // onPress={}
                >
                    <Image
                        source={icons.filter}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.black
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {/* Search */}
            {renderSearch()}

            
            {/* List */}

        </View>
    )
}

export default Home;