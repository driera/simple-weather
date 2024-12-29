import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";

import "./theme/reset.css";
import "./theme/variables.css";
import "./theme/default.css";


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
