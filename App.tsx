import React from 'react';
import { View, Text, TextInput, Image, Button, ScrollView } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>toko elektronik</Text>
      <TextInput placeholder="Cari produk..." />
      <ScrollView>
        <Image
        source={{uri:'https://res.cloudinary.com/ruparupa-com/image/upload/w_500,h_500,f_auto,q_auto/v1630076931/Products/10431107_1.jpg'}}style={{width:200,height:200}}/>
        <Image
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_C46MiVfbScwUbf2DUHQxiFTdTdNNrCBfM-gJ4HyIBg&s'}}style={{width:200,height:200}}/>
        <Image
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDDd_0P7sjC5tIZ2c-tIqlfzr8ajeFlLSxhabuo9AgPw&s'}}style={{width:200,height:200}}/>
      </ScrollView>
      <Button title="Beli" onPress={() => ('Produk telah ditambahkan ke keranjang belanja')} />
    </View>
  );
};

export default App;