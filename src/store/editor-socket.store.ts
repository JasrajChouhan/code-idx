import { Socket } from 'socket.io-client';
import { create } from 'zustand';

export interface EditorSocketTypes {
  editorSocket: Socket | null;
  setEditorSocket: (incomingSocket: Socket) => void;
}

export const useEditorSocket = create<EditorSocketTypes>((set) => ({
  editorSocket: null,
  setEditorSocket: (incomingSocket: Socket) => {
    set({ editorSocket: incomingSocket });
  },
}));
