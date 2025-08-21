import { Image, ImageSourcePropType, Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  url: ImageSourcePropType;
  nome: string;
  idade: string;
  minibio: string;
};

export default function Profile({ url, nome, idade, minibio }: Props) {
  return (
    <View>
      <Image style={styles.image} source={url} />

      <View>
        <Text>{nome}</Text>
        <Text>{idade}</Text>
        <Text>{minibio}</Text>
      </View>
    </View>
  );
}
