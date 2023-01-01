import { useState } from "react";
import {Button, TextField, type SxProps, Box, Link, Typography, CssBaseline } from '@mui/material';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import reactLogo from "./assets/react.svg";
import {Image} from './components/atoms/Image';
import {Heading} from './components/atoms/Heading';
import { invoke } from "@tauri-apps/api/tauri";
import { Row } from "./components/atoms/Row";

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const LogoStyle: SxProps = {
  height: '6em',
  padding: '1.5em',
  willChange: 'filter',
  transition: '0.75s',
}

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{
        margin: 0,
        paddingTop: '10vh',
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        textAlign: 'center',
      }}>
        <Heading level={1}>Welcome to Tauri!</Heading>

        <Row>
          <Link href="https://vitejs.dev" target="_blank">
            <Image src="/vite.svg" alt="Vite logo" sx={{
              ...LogoStyle,
              ':hover': {
                filter: 'drop-shadow(0 0 2em #747bff)'
              }
            }} />
          </Link>
          <Link href="https://tauri.app" target="_blank">
            <Image src="/tauri.svg" alt="Tauri logo" sx={{
              ...LogoStyle,
              ':hover': {
                filter: 'drop-shadow(0 0 2em #24c8db)'
              }
            }} />
          </Link>
          <Link href="https://reactjs.org" target="_blank">
            <Image src={reactLogo} alt="React logo" sx={{
              ...LogoStyle,
              ':hover': {
                filter: 'drop-shadow(0 0 2em #61dafb)'
              }
            }} />
          </Link>
        </Row>

        <Typography>Click on the Tauri, Vite, and React logos to learn more.</Typography>

        <Row sx= {{
          alignItems: 'center',
        }}>
            <TextField onChange={(e) => setName(e.currentTarget.value)} label="name" placeholder="Enter a name..." variant="filled" sx={{
              marginRight: '8px',
            }} />
            <Button type="button" onClick={() => greet()}>Greet</Button>
        </Row>
        <Typography>{greetMsg}</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
