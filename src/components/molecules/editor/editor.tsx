import Editor, { Monaco } from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import { useEffect, useState } from 'react';
import { editoroptions } from '../../../types/editor.types';

interface EditorTheme {
  base: 'vs' | 'vs-dark' | 'hc-black' | 'hc-light';
  inherit: boolean;
  rules: Array<{ background?: string; token: string; foreground?: string }>;
  colors: Record<string, string>;
}

export const EditorComponent = () => {
  const [theme, setTheme] = useState<EditorTheme | null>(null);
  function handleEditorTheme(
    _editor: editor.IStandaloneCodeEditor,
    monaco: Monaco,
  ) {
    console.log(theme);

    if (theme) {
      monaco.editor.defineTheme('dracula', theme);
      monaco.editor.setTheme('dracula');
    }
  }

  const downloadTheme = async () => {
    // download the theme
    try {
      const response = await fetch('/Dracula.json');
      const theme = await response.json();
      setTheme(theme);
    } catch (error) {
      console.log('Editor theme error : ', error);
    }
  };

  useEffect(() => {
    if (theme) console.log(theme);
    downloadTheme();
  }, []);

  return (
    <div>
      {theme && (
        <Editor
          height="80vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          options={editoroptions}
          onMount={handleEditorTheme}
        />
      )}
    </div>
  );
};
