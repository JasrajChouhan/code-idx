import { Socket } from 'socket.io-client';
import { create } from 'zustand';

export interface TerminalSocketStoreTypes {
  termianlSocket: null | Socket;
  setTerminalSocket: (incomingSocket: Socket) => void;
}

export const useTerminalSocketStore = create<TerminalSocketStoreTypes>(
  (set) => ({
    termianlSocket: null,
    setTerminalSocket: (incomingSocket: Socket) => {
      set({
        termianlSocket: incomingSocket,
      });
    },
  }),
);
