import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './control-panel.css'

export default function ControlPanelPage() {
  const [relays, setRelays] = useState({ R1: false, R2: false, R3: false, R4: false })

  const toggleRelay = (key) => {
    setRelays((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <>
      <Navbar />
      <main className="control-panel-page">
        <div className="control-panel-inner">
          <h1 className="control-panel-title">Control Panel</h1>
          <p className="control-panel-subtitle">Monitor voltage and control relays</p>

          <section className="control-panel-status">
            <div className="status-card status-phase">
              <span className="status-value">220V</span>
              <span className="status-label">Phase</span>
            </div>
            <div className="status-card status-battery">
              <span className="status-value">48</span>
              <span className="status-label">Battery</span>
            </div>
            <div className="status-card status-phase">
              <span className="status-value">220V</span>
              <span className="status-label">Phase</span>
            </div>
          </section>

          <section className="control-panel-relays">
            <h2 className="relays-heading">Relay Controls</h2>
            <div className="relays-grid">
              {['R1', 'R2', 'R3', 'R4'].map((key, i) => (
                <button
                  key={key}
                  type="button"
                  className={`relay-btn ${relays[key] ? 'on' : 'off'}`}
                  onClick={() => toggleRelay(key)}
                >
                  <span className="relay-btn-label">BTN{i + 1}</span>
                  <span className="relay-status">
                    {key}:{relays[key] ? 'ON' : 'OFF'}
                  </span>
                </button>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
