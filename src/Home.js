import React, { useEffect } from "react"
import { View, Image, Button, Text } from "react-native";




export const Home = ({ navigation }) => {

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>

            <Image source={require("../assets/kasco-logo.png")} style={{ width: 400, height: 400, alignSelf: 'center' }} resizeMode="contain" />
            <Text style={{ fontWeight: 'bold', alignSelf: 'center', marginHorizontal: 10, fontSize: 20 }}>Bem vindo ao teste de Inteligência Artificial, selecione um dos tipos abaixo</Text>

            <View style={{ backgroundColor: '#4aafff', width: '90%', alignSelf: 'center', marginTop: 80, borderRadius: 4 }}>
                <Button
                    color="white"
                    title="Foto"
                    onPress={() => navigation.navigate("ModelPhoto")}
                />
            </View>
            <View style={{ backgroundColor: '#800000', width: '90%', alignSelf: 'center', marginTop: 40, borderRadius: 4 }}>
                <Button
                    color="white"
                    title="Câmera"
                    onPress={() => navigation.navigate("ModelCam")}
                />
            </View>
        </View>
    )
}