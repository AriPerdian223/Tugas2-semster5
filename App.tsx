import { View, Text, Image, Button, StyleSheet, Alert, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';

// Tipe data untuk item produk
interface Produk {
  id: string;
  nama: string;
  harga: string;
  gambar: any;
}

const App = () => {
  const handleClick = () => {
    Alert.alert('Ari Perdian');
  };

  // Data produk contoh
  const dataProduk: Produk[] = [
    { id: '1', nama: 'Seblak', harga: 'Rp. 15.000', gambar: require('./src/assets/seblak.jpg') },
    { id: '2', nama: 'Nasi Goreng', harga: 'Rp. 18.000', gambar: require('./src/assets/nasgor.jpg') },
    { id: '3', nama: 'Bakso aci', harga: 'Rp. 10.000', gambar: require('./src/assets/cilok.jpg') },
    { id: '4', nama: 'Sosis Bakar', harga: 'Rp. 10.000', gambar: require('./src/assets/sosis.jpg') },
  ];

  // Render tiap kartu produk
  const renderProduk = ({ item }: { item: Produk }) => (
    <View style={styles.kartuProduk}>
      <Image source={item.gambar} style={styles.gambarProduk} />
      <Text style={styles.namaProduk}>{item.nama}</Text>
      <Text style={styles.hargaProduk}>{item.harga}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Scrollable content */}
      <ScrollView style={styles.scrollContainer}>
        
        {/* Header */}
        <View style={styles.header}>
          {/* Bagian Location */}
          <View style={styles.locationContainer}>
            <Text style={styles.locationLabel}>Nama</Text>
            <Text style={styles.namaLokasi}>Ari Perdian, 20220040072</Text>
          </View>

          {/* Bagian Avatar */}
          <Image source={require('./src/assets/avatar.png')} style={styles.avatar} />
        </View>

        {/* Pencarian */}
        <TextInput style={styles.pencarian} placeholder="Cari makanan" />

        {/* Banner Promo */}
        <View style={styles.bannerPromo}>
          <Image source={require('./src/assets/banner.jpg')} style={styles.gambarBanner} />
        </View>

        {/* Scroll Horizontal untuk Kategori Makanan */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollKategori}>
          <TouchableOpacity style={styles.tombolKategori}><Text style={styles.teksKategori}>Makanan Ringan</Text></TouchableOpacity>
          <TouchableOpacity style={styles.tombolKategori}><Text style={styles.teksKategori}>Makanan Berat</Text></TouchableOpacity>
          <TouchableOpacity style={styles.tombolKategori}><Text style={styles.teksKategori}>Minuman</Text></TouchableOpacity>
          <TouchableOpacity style={styles.tombolKategori}><Text style={styles.teksKategori}>Dessert</Text></TouchableOpacity>
        </ScrollView>

        {/* Daftar Produk dalam format grid menggunakan FlatList */}
        <FlatList
          data={dataProduk}
          renderItem={renderProduk}
          keyExtractor={item => item.id}
          numColumns={2}
          style={styles.daftarProduk}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    padding: 10,
  },
  scrollContainer: {
    flex: 1,
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: 'column',
  },
  locationLabel: {
    fontSize: 14,
    color: 'lightgray',
  },
  namaLokasi: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  avatar: {
    width: 50,
    height: 55,
    borderRadius: 10,
    marginBottom: 10,
  },
  pencarian: {
    height: 55,
    borderColor: '#f9f9f9',
    backgroundColor: '#f9f9f9',
    color: 'white',
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 20,
    marginBottom: 35,
  },
  bannerPromo: {
    position: 'relative',
    marginBottom: 20,
  },
  gambarBanner: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  teksPromo: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  scrollKategori: {
    marginBottom: 5,
  },
  tombolKategori: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    marginRight: 10,
  },
  teksKategori: {
    fontWeight: 'bold',
  },
  daftarProduk: {
    marginTop: 5,
  },
  kartuProduk: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 20,
    padding: 10,
  },
  gambarProduk: {
    width: 155,
    height: 170,
    marginBottom: 10,
    borderRadius: 25,
  },
  namaProduk: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  hargaProduk: {
    fontSize: 14,
    color: '#2F4B4E',
  },
});
