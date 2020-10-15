import React from 'react';
import './App.css';
import HookMouse from './components/UseEffectHook/HookMouse';
import IntervalHookCounter from './components/UseEffectHook/IntervalHookCounter';
import MouseContainer from './components/UseEffectHook/MouseContainer';
import UsEffCounter1 from './components/UseEffectHook/UsEffCounter1';

function App() {

  return (
    <div className="App">
      <IntervalHookCounter />
    </div>
  );

}

export default App;
