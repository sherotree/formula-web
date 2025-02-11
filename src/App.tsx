import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Layout from './components/Layout';
import FormulaList from './components/FormulaList';
import { formulas } from './data/formulas';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <FormulaList formulas={formulas} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
