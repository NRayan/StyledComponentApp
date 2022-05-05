import { AntDesign, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from 'react';
import { DeviceEventEmitter } from "react-native";
import { useTheme } from "styled-components";
import { datas } from "../data";
import { Button, Buttons, ButtonsContainer, Container, ContentContainer, Description, HeaderContainer, IconContainer, ThemeButton, Title } from "./styles";

const data = datas;

export function Home() {

    const theme = useTheme();

    const [currentData, setCurrentData] = useState(data[0]);
    const [darkTheme, setDarkTheme] = useState(true);

    function handleNextPress() {
        if (currentData.index === 2) return;
        const nextData = data[currentData.index + 1]
        setCurrentData(nextData);
    }

    function handlePreviousPress() {
        if (currentData.index === 0) return;
        const previousData = data[currentData.index - 1]
        setCurrentData(previousData);
    }

    function handleChangeThemePress() {
        setDarkTheme(!darkTheme);
        DeviceEventEmitter.emit("@CHANGE_THEME", !darkTheme);
    }

    return (
        <Container>

            <HeaderContainer>
                <IconContainer>
                    <MaterialCommunityIcons size={64} color={theme.COLORS.TEXT1} name={currentData.index === 0 ? "cards-club" : currentData.index === 1 ? "cards-heart" : "cards-diamond"} />
                </IconContainer>
            </HeaderContainer>

            <ContentContainer>
                <Title>{currentData.title}</Title>
                <Description>{currentData.description}</Description>
            </ContentContainer>

            <ButtonsContainer>
                <Buttons>
                    <Button onPress={handlePreviousPress} disabled={currentData.index == 0}>
                        <AntDesign size={32} color={theme.NAME === "Dark" ? theme.COLORS.BACKGROUND : theme.COLORS.PRIMARY} name="arrowleft" />
                    </Button>
                    <Button onPress={handleNextPress} disabled={currentData.index == 2}>
                        <AntDesign size={32} color={theme.NAME === "Dark" ? theme.COLORS.BACKGROUND : theme.COLORS.PRIMARY} name="arrowright" />
                    </Button>
                </Buttons>
            </ButtonsContainer>

            <ThemeButton onPress={handleChangeThemePress}>
                <Ionicons size={24} color={theme.COLORS.TEXT1} name="ios-color-fill" />
            </ThemeButton>

        </Container>
    )
}