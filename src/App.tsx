import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import FormulaList from './components/FormulaList';
import FavoriteList from './components/FavoriteList';
import { formulas } from './data/formulas';
import { useFavorites } from './hooks/useFavorites';

function App() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path='/'
              element={
                <FormulaList
                  formulas={formulas}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                />
              }
            />
            <Route
              path='/favorites'
              element={
                <FavoriteList
                  formulas={formulas}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                />
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
