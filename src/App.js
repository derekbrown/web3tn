import { React } from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import './App.css';
import { createClient, WagmiConfig } from 'wagmi';
import Content from './Content';

const queryClient = new QueryClient();
const wagmiClient = createClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig client={wagmiClient}>
        <Content/>
      </WagmiConfig>
    </QueryClientProvider>
  );
}

export default App;
