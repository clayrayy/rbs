import React from 'react'
import {
  Container,
  Title,
  Input,
  Base,
  Error,
  Text,
  Submit,
  TypeSelector,
  TypeButtonContainer,
  TypeSelectorFrame,
  TitleContainer,
} from './styles/additemform'

export default function AddItemForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

AddItemForm.Title = function AddItemFormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

AddItemForm.Input = function AddItemFormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>
}

AddItemForm.Error = function AddItemFormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>
}

AddItemForm.Base = function AddItemFormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>
}
AddItemForm.Text = function AddItemFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

AddItemForm.TitleContainer = function AddItemTitleContainer({
  children,
  ...restProps
}) {
  return <TitleContainer {...restProps}>{children}</TitleContainer>
}

AddItemForm.Submit = function AddItemFormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>
}

AddItemForm.TypeSelector = function AddItemFormTypeSelector({
  children,
  ...restProps
}) {
  return (
    <TypeSelector name='type' type='radio' {...restProps}>
      {children}
    </TypeSelector>
  )
}

AddItemForm.TypeSelectorFrame = function AddItemFormTypeSelectorFrame({
  children,
  ...restProps
}) {
  return (
    <TypeSelectorFrame name='type' type='radio' {...restProps}>
      {children}
    </TypeSelectorFrame>
  )
}

AddItemForm.TypeButtonContainer = function AddItemFormTypeButtonContainer({
  children,
  ...restProps
}) {
  return <TypeButtonContainer {...restProps}>{children}</TypeButtonContainer>
}
