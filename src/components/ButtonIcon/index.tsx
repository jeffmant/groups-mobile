import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeProps, Container, Icon } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap,
  type?: ButtonIconTypeProps
}

export function ButtonIcon ({ icon, type = 'PRIMARY', ...rest }: ButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  )
}