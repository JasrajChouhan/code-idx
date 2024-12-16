import { Terminal } from '@xterm/xterm';
import { create } from 'zustand';
import { Socket } from 'socket.io-client';

interface TerminalStore {
  terminal: Terminal | null;
  setTerminal: (terminal: Terminal | null) => void;
  socket: Socket | null;
  setSocket: (socket: Socket | null) => void;
}

export const useTerminalStore = create<TerminalStore>((set) => ({
  terminal: null,
  setTerminal: (terminal) => set({ terminal }),
  socket: null,
  setSocket: (socket) => set({ socket }),
}));
