import Typography from "typography"
import githubTheme from "typography-theme-github"

const typography = new Typography(githubTheme)

typography.options.bodyFontFamily = ["Merriweather"]
typography.options.overrideThemeStyles = () => ({
  p: {
    letterSpacing: "normal",
  },
})

export const { scale, rhythm, options } = typography

export default typography
