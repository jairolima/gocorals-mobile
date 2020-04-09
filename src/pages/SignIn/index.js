import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

export default function SignIn() {
  const navigation = useNavigation();
  function navigateToSignUp() {
    navigation.navigate('SignUp');
  }
  return (
    <View styles={styles.container}>
      <View styles={styles.header}>
        <Text>SignIn PAGE</Text>
        <TouchableOpacity onPress={navigateToSignUp}>
          <Text>Criar Conta SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
