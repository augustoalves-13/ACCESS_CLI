import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { Image, Text, View } from "react-native"

const CheckInRealized = ({ route }) => {
  const { typeMethod } = route.params
  const navigation = useNavigation()
  
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('GateMenuScreen')
    },10000)
  },[])

  return (
    <View style={{flex: 1, backgroundColor: '#151515', justifyContent: 'flex-end'}}>
      <View style={{ height:'97%', borderTopEndRadius:80, borderTopStartRadius: 80,backgroundColor: '#47B520', alignItems: "center", justifyContent: "space-between", padding: 15 }} >
        <Text style={{ fontSize: 25, fontWeight: '700', color: '#fff' }}>{typeMethod} Realizado</Text>
        <Image style={{ height: '30%', objectFit: "contain" }} source={require('../../../../assets/images/check.png')} />
        <Image style={{ width: 130, objectFit: "contain" }} source={require('../../../../assets/images/logoUget.png')} />
      </View>
    </View>
  )
}

export default CheckInRealized