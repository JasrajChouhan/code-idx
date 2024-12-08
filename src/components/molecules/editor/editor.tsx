import Editor from '@monaco-editor/react';

const options = {
  autoIndent: 'full',
  contextmenu: true,
  fontFamily: 'monospace',
  fontSize: 13,
  lineHeight: 24,
  hideCursorInOverviewRuler: true,
  matchBrackets: 'always',
  minimap: {
    enabled: true,
  },
  scrollbar: {
    horizontalSliderSize: 4,
    verticalSliderSize: 18,
  },
  selectOnLineNumbers: true,
  roundedSelection: false,
  readOnly: false,
  automaticLayout: true,
};

export const EditorComponent = () => {
  return (
    <div>
      <Editor
        height="80vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
    </div>
  );
};
