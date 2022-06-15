import { React } from 'react';
import { useAccount,
         useConnect,
         useEnsName } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected'

function Content() {
  const account = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  console.log(account);

  if (account && account.data && account.data.address) return <div>Connected to {account.data.address}</div>;
  return <button onClick={() => connect()}>Connect Wallet</button>;
}

export default Content;
