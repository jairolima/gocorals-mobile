/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import {Text, Alert} from 'react-native';

import {Container, SubmitButton} from './styles';

import api from '~/services/api';

export default function Payment({route}) {
  const {voucher_quantity} = route.params;
  const {slot} = route.params;

  async function handleSubmit() {
    await api.post(`/slots/${slot.id}/appointment`, {
      voucher_quantity,
    });
    Alert.alert('pagamento efetuado com sucesso');
  }

  return (
    <Container>
      <Text>Resumo {voucher_quantity}</Text>

      <SubmitButton onPress={handleSubmit}>PAGAR</SubmitButton>
    </Container>
  );
}
