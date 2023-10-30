import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Icon, Name } from "./styles";

type UserCardProps = {
  name: string
  onRemove: () => void
}

export function UserCard ({ name, onRemove }: UserCardProps) {
  return (
    <Container>
      <Icon name='person' />

      <Name>
        {name}
      </Name>

      <ButtonIcon 
        icon='close'
        type="SECONDARY"
        onPress={onRemove}
      />

    </Container>
  )
}