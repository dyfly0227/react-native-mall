import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Stack} from 'expo-router';
import {SafeAreaView} from "react-native-safe-area-context";
import {LinearGradient} from "expo-linear-gradient";

export default function TabOneScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView>
        <SafeAreaView style={{backgroundColor: '#0f358e'}} />
        <View style={styles.header}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 8,
              paddingHorizontal: 16
            }}
          >
            <View style={{flex: 1}}>
              <Image
                source={{uri: "https://picsum.photos/88/88"}}
                style={{width: 44, height: 44, borderRadius: 44, overflow: 'hidden'}}
              />
            </View>
            <Text style={styles.header.title}>易全球.跨境电商</Text>
            <View style={{flex: 1}} />
          </View>

          <View style={{marginTop: 24, alignItems: "center"}}>
            <Text style={styles.header.bannerText}>EASY CROSS-BORDER E-COMMERCE</Text>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.myShop}>
            <Text style={styles.myShopTitle}>我的云店铺- 48P</Text>
            <Text style={styles.myShopPoints}>30</Text>
            <Text style={styles.myShopPointsLabel}>现有云单数</Text>
            <View style={styles.myShopPointsTrends}>
              <View>
                <Text style={styles.myShopPointsTrendsCount}>0</Text>
                <Text style={styles.myShopPointsTrendsLabel}>今日新增云单</Text>
              </View>
              <View style={styles.myShopPointsTrendsDivider} />
              <View>
                <Text style={styles.myShopPointsTrendsCount}>0</Text>
                <Text style={styles.myShopPointsTrendsLabel}>昨日释放云单</Text>
              </View>
            </View>
            <View style={styles.myShopPointsBtnWrap}>
              <LinearGradient
                colors={["#f8c679", "#eea22d"]}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.myShopPointsBtn}
              >
                <Text style={styles.myShopPointsBtnText}>租赁云店铺</Text>
              </LinearGradient>
            </View>
          </View>
          <View style={[styles.smallCardGroup, {marginTop: 16}]}>
            <View style={styles.smallCard}>
              <Image source={require("../home/images/1.png")} style={{width: 47, height: 47}} />
              <Text style={{marginTop: 14, color: "#969799"}}>申请成为</Text>
              <Text style={styles.applyTitle}>供应商</Text>
            </View>
            <View style={styles.smallCard}>
              <Image source={require("../home/images/2.png")} style={{width: 40, height: 40}} />
              <Text style={{marginTop: 16, color: "#969799"}}>申请成为</Text>
              <Text style={styles.applyTitle}>线下门店</Text>
            </View>
          </View>
          <View style={[styles.smallCardGroup, {marginTop: 24}]}>
            <View style={styles.smallCard}>
              <View style={styles.myCardHeader}>
                <Image
                  source={require("../home/images/mall.png")}
                  style={{width: 13, height: 13}}
                />
                <Text style={[styles.myCardText, styles.myCardHeaderText]}>我的易货</Text>
                <Image source={require("../home/images/arrow.png")} style={styles.myCardArrow} />
              </View>
              <Text style={{marginTop: 14, color: "#969799"}}>申请成为</Text>
              <Text style={styles.applyTitle}>供应商</Text>
            </View>
            <View style={styles.smallCard}>
              <Image source={require("../home/images/2.png")} style={{width: 40, height: 40}} />
              <Text style={{marginTop: 16, color: "#969799"}}>申请成为</Text>
              <Text style={styles.applyTitle}>线下门店</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    minHeight: 300,
    backgroundColor: "#0f358e",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    title: {
      flex: 2,
      textAlign: "center",
      fontSize: 17,
      color: '#fff'
    },
    bannerText: {
      width: 240,
      fontFamily: "BM",
      fontSize: 20,
      color: "white",
      textAlign: "center",
    }
  },
  main: {
    paddingHorizontal: 16,
  },
  myShop: {
    position: "relative",
    marginTop: -110,
    paddingTop: 30,
    paddingHorizontal: 24,
    paddingBottom: 52,
    borderRadius: 32,
    backgroundColor: "white"
  },
  myShopTitle: {
    textAlign: "center",
    color: "#646566"
  },
  myShopPoints: {
    marginTop: 8,
    textAlign: "center",
    fontFamily: "BMB",
    fontSize: 70,
    color: "#0f358e"
  },
  myShopPointsLabel: {
    textAlign: "center",
    fontSize: 15,
    color: "#969799",
  },
  myShopPointsTrends: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32
  },
  myShopPointsTrendsDivider: {
    width: 1,
    height: 24,
    marginHorizontal: 26,
    backgroundColor: "#ccc"
  },
  myShopPointsTrendsCount: {
    fontFamily: "DINM",
    fontSize: 28,
    color: "#646566",
    textAlign: "center"
  },
  myShopPointsTrendsLabel: {
    fontSize: 12,
    color: "#969799"
  },
  myShopPointsBtnWrap: {
    marginTop: 32,
    borderRadius: 100,
    shadowColor: "#fcdca9",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 1,
    shadowRadius: 12,
  },
  myShopPointsBtn: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 100,
  },
  myShopPointsBtnText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white"
  },
  smallCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 24,
    borderRadius: 32,
    backgroundColor: "white"
  },
  smallCardGroup: {
    flexDirection: "row",
    gap: 16
  },
  applyTitle: {
    fontWeight: "600",
    fontSize: 18,
    color: "#646566"
  },
  myCardHeader: {flexDirection: "row", alignItems: "center"},
  myCardHeaderText: {marginLeft: 4, marginRight: 11},
  myCardArrow: {width: 4.5, height: 9},
  myCardText: {fontSize: 12, color: "#969799"}
});
