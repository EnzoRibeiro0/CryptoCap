import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  topo: { 
    padding: 16, 
    alignItems: 'center' 
  },
  topoTitulo: { 
    fontSize: 18, 
    marginBottom: 8, 
    fontFamily: 'Ubuntu-Bold',
    color: '#000'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
    backgroundColor: '',
    color: '#000',
  },
  criptoBox: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    borderColor: '#C147E9',
    borderWidth: 1,
  },
  criptoNome: { 
    fontSize: 16, 
    fontFamily: 'Montserrat-Bold',
    color: '#000'
  },
  criptoValor: { 
    fontSize: 16, 
    marginTop: 4,
    fontFamily: 'Montserrat-Regular',
    color: '#000'
  },
  cardContainer: {
    margin: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  cardTitle: { 
    fontSize: 18, 
    marginBottom: 8,
    fontFamily: 'Ubuntu-Regular', 
    color: '#000'
  },
  botao: {
    backgroundColor: '#810CA8',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  botaoTexto: { 
    color: '#fff', 
    fontSize: 16, 
    fontFamily: 'Ubuntu-Bold',
  },
  naoEncontrado: { 
    textAlign: 'center', 
    marginTop: 16, 
    color: '#000' 
  },
});
