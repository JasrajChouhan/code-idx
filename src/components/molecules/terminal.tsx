import { FitAddon } from '@xterm/addon-fit';
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';
import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

import { useTerminalStore } from '../../store/terminal-socket.store';
import { useParams } from 'react-router';

export const TerminalComponent = () => {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);

  const { setTerminal, setSocket } = useTerminalStore();

  const { projectId } = useParams();
  console.log(projectId);

  useEffect(() => {
    const term = new Terminal({
      cursorBlink: true,
      theme: {
        background: '#383838',
        foreground: '#f8f8f3',
        cursor: '#f8f8f3',
        cursorAccent: '#282a37',
        red: '#ff5544',
        green: '#50fa7c',
        yellow: '#f1fa8c',
        cyan: '#8be9fd',
      },
      fontSize: 16,
      fontFamily: 'Ubuntu Mono',
      convertEol: true, // Convert CRLF to LF
    });

    // Open terminal in the container
    if (terminalRef.current) {
      term.open(terminalRef.current);
    }

    // Attach FitAddon and fit the terminal
    const fitAddon = new FitAddon();
    fitAddonRef.current = fitAddon;
    term.loadAddon(fitAddon);
    fitAddon.fit();

    setTerminal(term);

    // Initialize WebSocket connection
    const socketConnection = io(
      `${import.meta.env.VITE_BACKEND_URL}/terminal`,
      {
        query: {
          projectId,
        },
      },
    );
    setSocket(socketConnection);

    socketConnection.on('terminal:output', (data: string) => {
      console.log(data);
      term.write(data);
    });

    // Handle terminal input and emit shell input to the server
    term.onData((data) => {
      socketConnection.emit('terminal:input', data);
    });

    // Clean up on unmount
    return () => {
      term.dispose();
      socketConnection.disconnect();
      setTerminal(null);
      setSocket(null);
    };
  }, [setTerminal, setSocket]);

  useEffect(() => {
    // Refitting terminal on window resize
    const handleResize = () => {
      fitAddonRef.current?.fit();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={terminalRef}
      style={{
        height: '25vh',
        overflow: 'auto',
      }}
      className="terminal"
      id="terminal-container"
    ></div>
  );
};
