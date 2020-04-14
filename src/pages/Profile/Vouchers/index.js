import React, {useEffect, useState} from 'react';
import { Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import api from '~/services/api';
import {useSelector} from 'react-redux';


import {Container, VoucherList, Voucher, Name} from './styles';

export default function Vouchers() {

  const navigation = useNavigation();
  const [vouchers, setVouchers] = useState([]);
  const token = useSelector((state) => state.auth.token.token);
  
  useEffect(() => {
    async function loadVouchers() {

      const response = await api.get('vouchers',{headers: {"Authorization" : `Bearer ${token}`}});

      setVouchers(response.data);
    }

    loadVouchers();
  }, []);

  function navigateBack() {
    navigation.goBack();
  }
  return (
    <Container>
    <TouchableOpacity onPress={navigateBack}>
          <FontAwesome
            reverseColor
            name="chevron-left"
            color="#3cf0c5"
            type="font-awesome"
            size={26}
          />
    </TouchableOpacity>
    <VoucherList
        data={vouchers}
        keyExtractor={(voucher) => String(voucher.id)}
        renderItem={({item: voucher}) => (
          <Voucher>
            <Name>{voucher.slot_id}</Name>
            <Name>{voucher.voucher_quantity}</Name>
            <Name>{voucher.slot.date}</Name>
          </Voucher>
        )}
      />
    </Container>
  );
}
