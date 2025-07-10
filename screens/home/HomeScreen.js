import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { homestyles } from './HomeStyle';

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={homestyles.fundo}>

            <View style={homestyles.container}>
                <View style={homestyles.containerInterno}>
                    <Text style={homestyles.titulo}>Bem-vindo ao CryptoCap</Text>
                    <Image
                        source={require('../../assets/icon.png')}
                        style={homestyles.imagem}
                    />
                    <Text style={homestyles.texto}>Este é um aplicativo para conferir as cotações atuais de todas as criptomoedas</Text>
                </View>



                <TouchableOpacity onPress={() => navigation.navigate('Criptomoedas')} style={homestyles.botao}> 
                    <Text style={homestyles.textobtn}>Ir para as criptomoedas</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

