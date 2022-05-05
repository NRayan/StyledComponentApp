import { TouchableOpacityProps } from "react-native"
import styled, { css } from "styled-components/native"

export const Container = styled.View`
    flex: 1;
    background:${({ theme }) => theme.COLORS.BACKGROUND};
    padding: 0 20px;
    `

export const HeaderContainer = styled.View`
    flex:2;
    justify-content: center;
    align-items: center;
    `

export const IconContainer = styled.View`
    border: 2px;
    border-color: ${({ theme }) => theme.COLORS.TEXT1};
    border-radius: 10px;
    padding: 40px;
    `
export const ContentContainer = styled.View`
    flex:2;
    align-items: center;
    `
export const Title = styled.Text`
    font-size: 32px;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.COLORS.TEXT1};
    font-weight: bold;
    `

export const Description = styled.Text`
font-size: 16px;
color: ${({ theme }) => theme.COLORS.TEXT2};
    `

export const ButtonsContainer = styled.View`
flex:1;
justify-content: center;
align-items: center;
`

export const Buttons = styled.View`
flex-direction: row;
`

export const Button = styled.TouchableOpacity.attrs(props => ({
    disabled: props.disabled,
    activeOpacity: .5,
})) <TouchableOpacityProps>`
padding: 15px;
opacity: ${({ disabled }) => disabled ? .5 : 1};
border-radius: 100px;
margin: 0 10px;

${({ theme }) =>
        theme.NAME === "Dark" ? css`
background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    `:
            css`
border: 2px solid ${({ theme }) => theme.COLORS.PRIMARY};
    `
    };
`

export const ThemeButton = styled.TouchableOpacity`
position: absolute;
padding: 10px;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
border: 1px ${({ theme }) => theme.COLORS.TEXT1};
border-radius: 100px;
top: 50px;
right: 20px;
`
