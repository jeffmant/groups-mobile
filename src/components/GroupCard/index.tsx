import { TouchableOpacityProps } from "react-native"
import { Container, Icon, Title } from "./styles"
import { ButtonIcon } from "@components/ButtonIcon"

type GroupCardProps = TouchableOpacityProps & {
  title: string,
  onRemove: () => void
}

export function GroupCard ({ title, onRemove, ...rest }: GroupCardProps) {
  return(
      <Container {...rest}>
        <Icon />
        <Title>{title}</Title>
        <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
      </Container>
  )
}