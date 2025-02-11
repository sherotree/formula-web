import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import Layout from './components/Layout';
import FormulaList from './components/FormulaList';
import { formulas } from './data/formulas';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Layout>
        <FormulaList formulas={formulas} />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
