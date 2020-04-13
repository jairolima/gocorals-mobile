import React from 'react';
import {Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {signOut} from '~/store/modules/auth/actions';

import {Container, LogoutButton, SubmitButton} from './styles';

export default function Account() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const signed = useSelector((state) => state.auth.signed);

  function navigateToSignIn() {
    navigation.navigate('SignIn');
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      {signed && (
        <View>
          <Text>Meus Vouchers</Text>
          <Text>Meu Perfil</Text>
          <Text>Meus Cartões</Text>
          <LogoutButton onPress={handleLogout}>Sair</LogoutButton>
        </View>
      )}

      {!signed && (
        <SubmitButton onPress={navigateToSignIn}>Entrar</SubmitButton>
      )}
      <Text>Políticas de privacidade</Text>
      <Text>Atendimento</Text>
      <Text>Sobre o App</Text>
    </Container>
  );
}
