import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import GetSvg from '../../../components/GetSvg';
import { Link, Stack } from 'expo-router';
import Swiper from 'react-native-swiper';
import WaterfallFlow from 'react-native-waterfall-flow';

const menuList = [
  {
    title: '推荐品类',
    path: '/',
    icon: 'https://m.360buyimg.com/babel/jfs/t1/141957/16/35147/3699/64b0e61dF726bcd44/016f82305167967a.png',
  },
  {
    title: '办公用品',
    path: '/',
    icon: 'https://m.360buyimg.com/babel/jfs/t1/141957/16/35147/3699/64b0e61dF726bcd44/016f82305167967a.png',
  },
  {
    title: '电子产品',
    path: '/',
    icon: 'https://m.360buyimg.com/babel/jfs/t1/141957/16/35147/3699/64b0e61dF726bcd44/016f82305167967a.png',
  },
  {
    title: '食品粮油',
    path: '/',
    icon: 'https://m.360buyimg.com/babel/jfs/t1/141957/16/35147/3699/64b0e61dF726bcd44/016f82305167967a.png',
  },
  {
    title: '服装配饰',
    path: '/',
    icon: 'https://m.360buyimg.com/babel/jfs/t1/141957/16/35147/3699/64b0e61dF726bcd44/016f82305167967a.png',
  },
  {
    title: '奢品珠宝',
    path: '/',
    icon: 'https://m.360buyimg.com/babel/jfs/t1/141957/16/35147/3699/64b0e61dF726bcd44/016f82305167967a.png',
  },
  ,
  {
    title: '古玩黄金',
    path: '/',
    icon: 'https://m.360buyimg.com/babel/jfs/t1/141957/16/35147/3699/64b0e61dF726bcd44/016f82305167967a.png',
  },
  ,
  {
    title: '名车豪宅',
    path: '/',
    icon: 'https://m.360buyimg.com/babel/jfs/t1/141957/16/35147/3699/64b0e61dF726bcd44/016f82305167967a.png',
  },
  ,
  {
    title: '大宗商品',
    path: '/',
    icon: 'https://m.360buyimg.com/babel/jfs/t1/141957/16/35147/3699/64b0e61dF726bcd44/016f82305167967a.png',
  },
  ,
  {
    title: '全部分类',
    path: '/',
    icon: 'https://m.360buyimg.com/babel/jfs/t1/141957/16/35147/3699/64b0e61dF726bcd44/016f82305167967a.png',
  },
];
const swiperList = [
  {
    url: 'https://bpic.588ku.com//back_origin_min_pic/21/08/27/89fb7710ac85f32ab84acc2052dd0318.jpg%21/fw/750/quality/99/unsharp/true/compress/true',
    path: '',
  },
  {
    url: 'https://bpic.588ku.com//back_origin_min_pic/21/08/27/89fb7710ac85f32ab84acc2052dd0318.jpg%21/fw/750/quality/99/unsharp/true/compress/true',
    path: '',
  },
  {
    url: 'https://bpic.588ku.com//back_origin_min_pic/21/08/27/89fb7710ac85f32ab84acc2052dd0318.jpg%21/fw/750/quality/99/unsharp/true/compress/true',
    path: '',
  },
];
const goodsList = [
  {
    url: '',
    title: '',
    price: '',
    total: '',
  },
  {
    url: 'https://bpic.588ku.com//back_origin_min_pic/21/08/27/89fb7710ac85f32ab84acc2052dd0318.jpg%21/fw/750/quality/99/unsharp/true/compress/true',
    title: 'ROLEX18K黄金潜航者型系列瑞士机械男士...',
    price: '12,569',
    total: '10万+',
  },
  {
    url: 'https://bpic.588ku.com//back_origin_min_pic/21/08/27/89fb7710ac85f32ab84acc2052dd0318.jpg%21/fw/750/quality/99/unsharp/true/compress/true',
    title: 'ROLEX18K黄金潜航者型系列瑞士机械男士...',
    price: '12,569',
    total: '10万+',
  },
  {
    url: 'https://bpic.588ku.com//back_origin_min_pic/21/08/27/89fb7710ac85f32ab84acc2052dd0318.jpg%21/fw/750/quality/99/unsharp/true/compress/true',
    title: 'ROLEX18K黄金潜航者型系列瑞士机械男士...',
    price: '12,569',
    total: '10万+',
  },
];
const styles = StyleSheet.create({
  topContainer: {
    height: 226,
    backgroundColor: '#fff',
    borderRadius: 16,
    width: '100%',
    boxSizing: 'border-box',
    padding: 16,
  },
  topSearch: {
    height: 32,
    backgroundColor: '#F4F5F7',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
  },
  searchText: {
    color: '#C8C9CC',
    fontSize: 14,
    paddingLeft: 6,
  },
  menuWrap: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  menuList: {
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 16,
  },
  menuText: {
    color: '#646566',
    fontSize: 12,
    paddingTop: 6,
  },
  swiperWrap: {
    height: 150,
    borderRadius: 16,
    padding: 8,
    overflow: 'hidden',
  },
  goodWrap: {
    padding: 8,
  },
  goodItem: {
    height: 278,
    backgroundColor: '#fff',
    borderRadius: 16,
  },
  goodPadding: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  goodTitle: {
    fontSize: 14,
    color: '#000',
    lineHeight: 24,
  },
  goodPrice: {
    color: '#FA6E20',
    fontWeight: '700',
    paddingTop: 16,
  },
  goodSales: {
    color: '#999',
    fontSize: 10,
    paddingTop: 4,
  },
});

const Top = () => {
  return (
    <View style={styles.topContainer}>
      <View style={styles.topSearch}>
        <GetSvg name="search" />
        <Text style={styles.searchText}>搜索</Text>
      </View>
      <View style={styles.menuWrap}>
        {menuList.map((menu) => (
          <Link href={'/'} style={styles.menuList} key={menu?.title}>
            <Image
              source={{
                uri: menu?.icon,
              }}
              style={{
                width: 40,
                height: 40,
              }}
            />
            <Text style={styles.menuText}>{menu?.title}</Text>
          </Link>
        ))}
      </View>
    </View>
  );
};

const SwiperView = () => {
  return (
    <View style={styles.swiperWrap}>
      <Swiper autoplay={true}>
        {swiperList.map((item, index) => (
          <View key={index}>
            <Image
              source={{
                uri: item?.url,
              }}
              style={{
                width: '100%',
                height: 150,
              }}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const GoodsView = () => {
  return (
    <WaterfallFlow
      renderItem={({ item, index }) => {
        return index > 0 ? (
          <View style={styles.goodWrap}>
            <View style={styles.goodItem}>
              <Image
                source={{
                  uri: item?.url,
                }}
                style={{
                  width: '100%',
                  height: 165,
                }}
              />
              <View style={styles.goodPadding}>
                <Text style={styles.goodTitle}>{item.title}</Text>
                <Text style={styles.goodPrice}>$ {item.price}</Text>
                <Text style={styles.goodSales}>已交易：{item.total}件</Text>
              </View>
            </View>
          </View>
        ) : (
          <SwiperView />
        );
      }}
      data={goodsList}
      numColumns={2}
    ></WaterfallFlow>
  );
};

const index = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Top />
      {/* <SwiperView /> */}
      <GoodsView />
    </>
  );
};

export default index;
