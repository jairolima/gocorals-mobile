import React from 'react';
import {Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {signOut} from '~/store/modules/auth/actions';


import {Container, LogoutButton, SubmitButton, ProfileButton, Header} from './styles';
import Background from '~/components/Background';

export default function Account() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const signed = useSelector((state) => state.auth.signed);
  // const auth = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user.profile);


  function navigateToSignIn() {
    navigation.navigate('SignIn');
  }

  function navigateToVouchers() {
    navigation.navigate('Vouchers');
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
      {signed && (
        <View>
          <Text>Olá {user.username},</Text>
          <ProfileButton onPress={navigateToVouchers}>Meus Vouchers</ProfileButton>
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
    </Background>
  );
}
