import React, { useState, useEffect, useCallback } from 'react';
import { ConnectionProvider, WalletProvider, useWallet, } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton, } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter, } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl, Connection } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';

function WalletConnection() {
    const [connectionError, setConnectionError] = useState(null);
    const [balance, setBalance] = useState(null);
    const [network, setNetwork] = useState(clusterApiUrl('mainnet-beta'));
    const wallet = useWallet();

    const wallets = [
        new PhantomWalletAdapter(),
        new SolflareWalletAdapter({ network }),
        new TorusWalletAdapter(),
    ];

    const connectWallet = useCallback(async () => {
        try {
            await wallet.connect();
            setConnectionError(null);
        } catch (error) {
            console.error('Wallet connection error:', error);
            setConnectionError('Failed to connect wallet. Please try again.');
        }
    }, [wallet]);

    const disconnectWallet = useCallback(async () => {
        try {
            await wallet.disconnect();
            setBalance(null);
            setConnectionError(null);
        } catch (error) {
            console.error('Wallet disconnection error:', error);
            setConnectionError('Failed to disconnect wallet. Please try again.');
        }
    }, [wallet]);

    const fetchBalance = useCallback(async () => {
        if (wallet.connected) {
            try {
                const connection = new Connection(network);
                const balance = await connection.getBalance(wallet.publicKey);
                setBalance(balance / 1e9); // Convert lamports to SOL
            } catch (error) {
                console.error('Failed to fetch balance:', error);
                setConnectionError('Failed to fetch balance. Please try again.');
            }
        }
    }, [wallet.connected, wallet.publicKey, network]);

    useEffect(() => {
        if (wallet.connected) {
            console.log('Wallet connected:', wallet.publicKey.toString());
            fetchBalance();
        }
    }, [wallet.connected, fetchBalance]);

    return (
        <div className="wallet-section">
            <WalletMultiButton />
            {wallet.connected && (
                <div className="wallet-info">
                    <p>Address: {wallet.publicKey.toString()}</p>
                    <p>Balance: {balance !== null ? `${balance} SOL` : 'Loading...'}</p>
                    <button className="disconnect-button" onClick={disconnectWallet}>
                        Disconnect
                    </button>
                </div>
            )}
            {connectionError && <p className="error-message">{connectionError}</p>}
        </div>
    );
}

export function WalletProviderWrapper({ children }) {
    const [network, setNetwork] = useState('mainnet-beta');

    const wallets = [
        new PhantomWalletAdapter(),
        new SolflareWalletAdapter({ network }),
        new TorusWalletAdapter(),
    ];

    return (
        <ConnectionProvider endpoint={clusterApiUrl(network)}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default WalletConnection;