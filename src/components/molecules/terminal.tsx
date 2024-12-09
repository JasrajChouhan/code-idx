import { FitAddon } from '@xterm/addon-fit';
import { useEffect } from 'react';
import { useXTerm } from 'react-xtermjs';

const OPTIONS_TERM = {
  useStyle: true,
  screenKeys: true,
  cursorBlink: true,
  cols: 200,
  theme: {
    background: 'black',
  },
};

export const TerminalComponent = () => {
  const { instance, ref } = useXTerm({ options: OPTIONS_TERM });
  const fitAddon = new FitAddon();

  useEffect(() => {
    // Load the fit addon
    instance?.loadAddon(fitAddon);

    const handleResize = () => fitAddon.fit();

    // Write custom message on your terminal
    instance?.writeln('Welcome react-xtermjs!');
    instance?.writeln('This is a simple example using an addon.');

    instance?.onData((data) => console.log(data));

    // Handle resize event
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref, instance]);

  return <div ref={ref} style={{ height: '100%', width: '100%' }} />;
};
