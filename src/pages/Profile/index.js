import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/Background';

export default function Profile() {
  return <Background />;
}

Profile.navigationOptions = {
  tabBarLabe: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
