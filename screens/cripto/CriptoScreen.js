import React, { useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import axios from 'axios';
import { criptos } from '../../components/criptomoedas';
import { styles } from './CriptoStyle';

export default function CriptoScreen() {

  const [cripto, setCripto] = useState(null);
  const [textoBusca, setTextoBusca] = useState('');
  const scrollViewRef = useRef(null);
  const criptoBoxRef = useRef(null);
  const tickerSelecionado = useRef(null);

  const pegarDadosCripto = async ({ ticker, nome }, clicou = false) => {
    const endpoint = `https://www.mercadobitcoin.net/api/${ticker}/ticker`;

    try {
      const resposta = await axios.get(endpoint);
      const json = resposta.data;

      const valorFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(parseFloat(json.ticker.last));

      const dadosCripto = {
        nome: nome,
        ticker: ticker,
        valor: valorFormatado,
      };

      setCripto(dadosCripto);

      if (
        clicou &&
        tickerSelecionado.current !== ticker &&
        criptoBoxRef.current &&
        scrollViewRef.current
      ) {
        criptoBoxRef.current.measureLayout(
          scrollViewRef.current,
          (x, y) => {
            scrollViewRef.current.scrollTo({ y: y, animated: true });
          },
          (error) => {
            console.log('measureLayout error:', error);
          }
        );

        tickerSelecionado.current = ticker;
      }
    } catch (erro) {
      Alert.alert('Erro', 'Não foi possível carregar os dados da criptomoeda');
    }
  };

  const criptosFiltradas = criptos.filter(
    (item) =>
      item.nome.toLowerCase().includes(textoBusca.toLowerCase()) ||
      item.ticker.toLowerCase().includes(textoBusca.toLowerCase())
  );

  useEffect(() => {
    if (!cripto) return;

    const intervalo = setInterval(() => {
      pegarDadosCripto({ ticker: cripto.ticker, nome: cripto.nome }, false);
    }, 15000);

    return () => clearInterval(intervalo);
  }, [cripto]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView ref={scrollViewRef}>
        <View style={styles.topo}>
          <Text style={styles.topoTitulo}>ESCOLHA SUA CRIPTOMOEDA</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite o nome ou símbolo"
            value={textoBusca}
            onChangeText={setTextoBusca}
          />
        </View>

        {cripto && (
          <View style={styles.criptoBox} ref={criptoBoxRef}>
            <Text style={styles.criptoNome}>Nome: {cripto.nome}</Text>
            <Text style={styles.criptoValor}>Valor atual: {cripto.valor}</Text>
          </View>
        )}

        {criptosFiltradas.map((criptomoeda, index) => (
          <View key={index} style={styles.cardContainer}>
            <Text style={styles.cardTitle}>
              {criptomoeda.nome} ({criptomoeda.ticker})
            </Text>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => pegarDadosCripto(criptomoeda, true)}>
              <Text style={styles.botaoTexto}>Ver Cotação</Text>
            </TouchableOpacity>
          </View>
        ))}

        {criptosFiltradas.length === 0 && (
          <Text style={styles.naoEncontrado}>Nenhuma cripto encontrada</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

