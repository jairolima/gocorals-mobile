import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text>
        AQUI LISTAR TODOS OS EVENTOS AVAILABLE, NAO PRECISA ESTAR LOGADO
      </Text>
    </View>
  );
}
