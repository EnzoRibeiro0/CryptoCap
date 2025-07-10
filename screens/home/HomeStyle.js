import { StyleSheet } from 'react-native';

export const homestyles = StyleSheet.create({
    fundo: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "#fff",
    },
    container: {
        paddingTop: 50,
        backgroundColor: "#fff",
        alignSelf: 'center'
    },
    containerInterno: {
        height: 300,
        width: 300,
        flexDirection: 'column',
        justifyContent: 'space-between',  
        marginBottom: 30,
    },
    imagem: {
        width: 200,
        height: 200,
        margin: 20,
        alignSelf: 'center',
    },
    botao:{
        backgroundColor: '#810CA8',
        height: 50,
        width: 300,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 80,
    },
    textobtn: {
        color: '#fff',
        alignSelf: 'center',
        fontFamily: 'Montserrat-Bold',
    },
    titulo:{
        fontFamily: 'Ubuntu-Bold',
        fontSize: 30,
        textAlign: 'center',
        color: '#000'
    },
    texto:{
        fontFamily: 'Ubuntu-Regular',
        marginBottom: 30,
        textAlign: 'justify',
        fontSize: 15,
        color: '#000'
    },
});
