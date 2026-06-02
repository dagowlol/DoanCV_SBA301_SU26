import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import './CounterCSS.css'

function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount((prev) => prev + 1)
  const decrement = () => setCount((prev) => Math.max(prev - 1, 0))
  const reset = () => setCount(0)

  return (
    <div className="counter-card shadow-sm rounded-4">
      <div className="counter-header">
        <span className="counter-chip">React Bootstrap</span>
        <h1 className="counter-title">Bộ đếm số</h1>
      </div>

      <div className="counter-display">
        <span className="counter-value">{count}</span>
      </div>

      <div className="counter-actions">
        <Button variant="danger" onClick={decrement} disabled={count === 0}>
          Giảm
        </Button>
        <Button variant="secondary" onClick={reset}>
          Reset
        </Button>
        <Button variant="success" onClick={increment}>
          Tăng
        </Button>
      </div>

      <p className="counter-note">Không cho phép đếm xuống dưới 0.</p>
    </div>
  )
}

export default Counter;
