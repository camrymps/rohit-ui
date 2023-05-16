def getColorSettings(color, isDark=False, isVeryDark=False):
    return dict(
        color=f"@{color};",
        light=f"@light{color.capitalize()};",
        border=f"@{color}BorderColor;",
        background=f"@{color}Background;",
        header=f"@{color}HeaderColor;",
        boxShadow=f"@{color}BoxShadow;",
        boxFloatShadow=f"@{color}BoxFloatingShadow;",
        text=f"@{color}TextColor;",
        lightText=f"@light{color.capitalize()}TextColor;",
        hoverText=f"@{color}HoverTextColor;",
        focus=f"@{color}Focus;",
        lightFocus=f"@light{color.capitalize()}Focus;",
        down=f"@{color}Down;",
        lightDown=f"@light{color.capitalize()}Down;",
        active=f"@{color}Active;",
        lightActive=f"@light{color.capitalize()}Active;",
        shadow=f"@{color}TextShadow;",
        lightShadow=f"@light{color.capitalize()}TextShadow;",
        hover=f"@{color}Hover;",
        lightHover=f"@light{color.capitalize()}Hover;",
        ribbon=f"@{color}RibbonShadow;",
        invertedRibbon=f"@{color}InvertedRibbonShadow;",
        tertiary=f"@{color}TertiaryColor;",
        tertiaryHover=f"@{color}TertiaryColorHover;",
        tertiaryFocus=f"@{color}TertiaryColorFocus;",
        tertiaryActive=f"@{color}TertiaryColorActive;",
        bright=f"@{color}Bright;",
        brightHover=f"@{color}BrightHover;",
        isDark=f"{str(isDark).lower()};",
        isVeryDark=f"{str(isVeryDark).lower()};",
    )


def getColorValues(color, colorValue, lightColorValue):
    colorValues = dict()

    colorValues[f"@{color}"] = f"{colorValue};"
    colorValues[f"@light{color.capitalize()}"] = f"{lightColorValue};"
    colorValues[f"@{color}BorderColor"] = f"@{color}TextColor;"
    colorValues[f"@{color}Background"] = f"{colorValue};"
    colorValues[f"@{color}HeaderColor"] = f"darken(@{color}TextColor, 5);"
    colorValues[
        f"@{color}BoxShadow"
    ] = f"0 0 0 @borderWidth @{color}BorderColor inset, @shadowShadow;"
    colorValues[
        f"@{color}BoxFloatingShadow"
    ] = f"0 0 0 @borderWidth @{color}BorderColor inset, @floatingShadow;"
    colorValues[f"@{color}TextColor"] = f"@{color};"
    colorValues[f"@light{color.capitalize()}TextColor"] = f"@light{color.capitalize()};"
    # Hover text
    colorValues[f"@{color}Focus"] = f"saturate(darken(@{color}, 8), 20, relative);"
    colorValues[
        f"@light{color.capitalize()}Focus"
    ] = f"saturate(darken(@light{color.capitalize()}, 8), 20, relative);"
    colorValues[f"@{color}Down"] = f"darken(@{color}, 10);"
    colorValues[f"@light{color.capitalize()}Down"] = f"darken(@{color}, 10);"
    colorValues[f"@{color}Active"] = f"saturate(darken(@{color}, 5), 15, relative);"
    colorValues[
        f"@light{color.capitalize()}Active"
    ] = f"saturate(darken(@light{color.capitalize()}, 5), 15, relative);"
    colorValues[f"@{color}TextShadow"] = "@invertedTextShadow;"
    colorValues[f"@light{color.capitalize()}TextShadow"] = "@invertedTextShadow;"
    colorValues[f"@{color}Hover"] = f"saturate(darken(@{color}, 5), 10, relative);"
    colorValues[
        f"@light{color.capitalize()}Hover"
    ] = f"saturate(darken(@light{color.capitalize()}, 10), 10, relative);"
    colorValues[f"@{color}HoverTextColor"] = f"@{color}TextColor;"
    colorValues[f"@{color}RibbonShadow"] = f"darken(@{color}, 10);"
    colorValues[
        f"@{color}InvertedRibbonShadow"
    ] = f"darken(@light{color.capitalize()}, 10);"
    colorValues[f"@{color}TertiaryColor"] = f"saturate(@{color}, 20%);"
    colorValues[f"@{color}TertiaryColorHover"] = f"desaturate(@{color}Hover, 20%);"
    colorValues[f"@{color}TertiaryColorFocus"] = f"desaturate(@{color}Focus, 20%);"
    colorValues[f"@{color}TertiaryColorActive"] = f"saturate(@{color}Active, 20%);"
    colorValues[
        f"@{color}Bright"
    ] = f"screen(@light{color.capitalize()}, @blendingBaseColor);"
    colorValues[
        f"@{color}BrightHover"
    ] = f"screen(@light{color.capitalize()}Hover, @blendingBaseColor);"

    return colorValues


for k, v in getColorSettings("lexusblue").items():
    print(f"{k}: {v}")
print("\n\n")
for k, v in getColorValues("lexusblue", "#0d2475", "#0d2ea3").items():
    print(f"{k}: {v}")
