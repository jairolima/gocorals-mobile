import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {signOut} from '~/store/modules/auth/actions';

import {Container, LogoutButton} from './styles';

export default function Account() {
  const navigation = useNavigation();

  const token = useSelector((state) => state.auth.token);

  function navigateToSignIn() {
    navigation.navigate('SignIn');
  }

  function handleLogout() {
    dispatchEvent(signOut());
  }

  return (
    <Container>
      <Text>Olá {token || 'Visitante'}, acesse ou crie uma conta</Text>
      <TouchableOpacity onPress={navigateToSignIn}>
        <Text>ENTRAR</Text>
      </TouchableOpacity>
      <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
    </Container>
  );
}
