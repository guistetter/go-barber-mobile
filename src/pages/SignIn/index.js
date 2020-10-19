import React from 'react';
import { Text } from 'react-native';
import Background from '../../components/Background';
import Input from '../../components/Input';

export default function SignIn() {
  return (
    <Background>
      <Text>SignIn</Text>
      <Input icon="call" placeholder="Digite seu nome" />
    </Background>
  );
}
