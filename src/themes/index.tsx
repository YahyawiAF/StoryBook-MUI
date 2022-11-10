import React from "react"
import { ThemeProvider, CssBaseline } from "@mui/material"
import { createTheme } from "@mui/material/styles"

const FONT_PRIMARY = "Plus Jakarta Sans"
export const theme = createTheme({
  typography: {
    fontFamily: FONT_PRIMARY
  },
  palette: {
    primary: {
      light: "#63b8ff",
      main: "#21B6A8",
      dark: "#005db0",
      contrastText: "#000"
    },
    secondary: {
      main: "#0989e3",
      light: "#82e9de",
      dark: "#00867d",
      contrastText: "#000"
    }
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          width: "18.5px",
          height: "18.5px",
          padding: "0px",
          marginRight: "10.25px"
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false
      },
      styleOverrides: {
        root: {
          borderRadius: 6
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: "0px"
        },
        label: {
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "0",
          letterSpacing: "0.17px"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#FFFFFF",
          border: "1px solid #EFEFEF",
          borderRadius: "10px",
          boxShadow: "unset",
          "&:hover": {
            boxShadow: "0px 0px 0px 2px #65E9D9"
          }
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "0px",
          "&:last-child": {
            padding: "0px"
          }
        }
      }
    }
  }
})

interface Props {
  children: React.ReactNode
}

const ThemeProviderWrapper: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default ThemeProviderWrapper
