export function LoopVisual() {
  return (
    <div className="product-visual loop-visual" aria-hidden="true">
      <div className="visual-window-bar">
        <span />
        <span />
        <span />
        <p>LOOP / Operations</p>
      </div>
      <div className="loop-dashboard">
        <div className="loop-sidebar">
          <strong>L.</strong>
          <span className="sidebar-active" />
          <span />
          <span />
          <span />
        </div>
        <div className="loop-content">
          <div className="loop-metrics">
            <div>
              <span>Active routes</span>
              <strong>24</strong>
              <em>+8.2%</em>
            </div>
            <div>
              <span>On-time rate</span>
              <strong>96%</strong>
              <em>Live</em>
            </div>
            <div>
              <span>In transit</span>
              <strong>138</strong>
              <em>Orders</em>
            </div>
          </div>
          <div className="loop-map">
            <div className="route route-one" />
            <div className="route route-two" />
            <span className="map-node node-one" />
            <span className="map-node node-two" />
            <span className="map-node node-three" />
            <span className="courier-dot courier-one" />
            <span className="courier-dot courier-two" />
            <div className="map-label">
              <span>Courier 018</span>
              <strong>En route</strong>
            </div>
          </div>
          <div className="loop-orders">
            <div>
              <span className="order-icon" />
              <p>
                <strong>#LP-2048</strong>
                <span>Kadıköy → Beşiktaş</span>
              </p>
              <em>In transit</em>
            </div>
            <div>
              <span className="order-icon" />
              <p>
                <strong>#LP-2049</strong>
                <span>Şişli → Üsküdar</span>
              </p>
              <em>Assigned</em>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function UrbanPulseVisual() {
  return (
    <div className="product-visual urban-visual" aria-hidden="true">
      <div className="visual-window-bar">
        <span />
        <span />
        <span />
        <p>UrbanPulse / City overview</p>
      </div>
      <div className="urban-dashboard">
        <div className="urban-map">
          <div className="city-road road-one" />
          <div className="city-road road-two" />
          <div className="city-road road-three" />
          <div className="city-road road-four" />
          <span className="issue issue-one">3</span>
          <span className="issue issue-two">8</span>
          <span className="issue issue-three">2</span>
          <div className="map-key">
            <span>City scan</span>
            <strong>42 active issues</strong>
          </div>
        </div>
        <div className="urban-queue">
          <div className="queue-heading">
            <span>Priority queue</span>
            <em>Live</em>
          </div>
          <div className="queue-item">
            <span className="priority priority-high">P1</span>
            <p>
              <strong>Road surface</strong>
              <span>District 04 · 8 min</span>
            </p>
          </div>
          <div className="queue-item">
            <span className="priority">P2</span>
            <p>
              <strong>Signage issue</strong>
              <span>District 12 · 18 min</span>
            </p>
          </div>
          <div className="queue-item">
            <span className="priority">P2</span>
            <p>
              <strong>Street light</strong>
              <span>District 08 · 24 min</span>
            </p>
          </div>
          <div className="privacy-chip">
            <span />
            Data minimized
          </div>
        </div>
      </div>
    </div>
  );
}
