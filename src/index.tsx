import { createRoot } from "react-dom/client"
import { App } from "./App"
import './styles/global.styles.scss'

const container = document.getElementById("root")
if (container === null)
  throw new Error('Is necessary, select a id of existing element')

const root = createRoot(container)
root.render(<App />)
