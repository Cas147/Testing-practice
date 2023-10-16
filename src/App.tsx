import { Box, Typography } from "@mui/material";
/* import { LoginForm } from './pages'; */
import "./App.css";
import { LoginForm } from "./pages/Login";


function App() {
  return (
    <Box
      className="App"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography variant="h2" mb="20px" textAlign="center">
        Testing - Practice
      </Typography>
      <LoginForm />
    </Box>
  );
}

export default App;
