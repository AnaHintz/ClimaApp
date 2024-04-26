import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';



export default function HomeScreen({ navigation }){
    return(
        
<View>

<Text>Bem-Vindo ao Clima App!🌞
    Aqui você pode conferir o clima local⛅</Text>
    <Icon name="sun-o" size={30} color="#ffd700" />300°C 
    📍Xique-Xique-BH 
    <Icon name="snowflake-o" size={30} color="blue" /> -0°C
    📍Jarivatuba-SC
</View>

    )
}