import { ButtonTypeProps, Container, Title } from "./styles";

type ButtonProps = {
  title: string;
  type?: ButtonTypeProps
}

export function Button ({ title, type = 'PRIMARY', ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}