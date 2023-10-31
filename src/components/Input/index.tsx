import { TextInputProps } from "react-native";
import { Container } from "./styles";
import { TextInput } from "react-native";
import { Ref } from "react";

type InputProps = TextInputProps & {
  inputRef?: Ref<TextInput>
}

export function Input ({ inputRef, ...rest}: InputProps) {
  return (
    <Container ref={inputRef} {...rest} />
  )
}