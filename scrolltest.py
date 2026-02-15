<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scroll Issue Test</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background: #f5f5f5;
    }

    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: white;
      padding: 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      z-index: 1000;
    }

    .content {
      margin-top: 100px;
      min-height: 200vh;
    }

    .spacer {
      height: 1000px;
      background: linear-gradient(to bottom, #fff, #f0f0f0);
      margin-bottom: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: #666;
    }

    .test-section {
      background: white;
      padding: 40px;
      margin-bottom: 40px;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }

    .section-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 20px;
      color: #333;
    }

    .cards-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }

    .card {
      background: white;
      border: 2px solid #e0e0e0;
      border-radius: 12px;
      padding: 30px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .card:hover {
      border-color: #2196F3;
      box-shadow: 0 4px 12px rgba(33, 150, 243, 0.2);
    }

    .card-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #333;
    }

    .card-desc {
      color: #666;
      font-size: 14px;
    }

    /* Modal Overlay */
    .modal-overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 9999;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .modal-overlay.active {
      display: flex;
    }

    .modal-content {
      background: white;
      padding: 40px;
      border-radius: 16px;
      max-width: 600px;
      width: 100%;
      max-height: 80vh;
      overflow-y: auto;
      position: relative;
    }

    .modal-close {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      border: none;
      background: #f0f0f0;
      border-radius: 50%;
      cursor: pointer;
      font-size: 20px;
    }

    .modal-close:hover {
      background: #e0e0e0;
    }

    .log-panel {
      position: fixed;
      top: 100px;
      right: 20px;
      width: 350px;
      max-height: 500px;
      background: rgba(0, 0, 0, 0.95);
      color: white;
      border-radius: 8px;
      padding: 20px;
      overflow-y: auto;
      z-index: 10000;
      font-family: monospace;
      font-size: 12px;
      border: 2px solid #00ff00;
    }

    .log-title {
      font-weight: bold;
      margin-bottom: 10px;
      color: #00ff00;
      font-size: 14px;
    }

    .log-entry {
      margin-bottom: 10px;
      padding: 8px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 4px;
      border-left: 3px solid;
    }

    .log-error { border-left-color: #ff4444; color: #ff4444; }
    .log-success { border-left-color: #44ff44; color: #44ff44; }
    .log-info { border-left-color: #4444ff; color: #4444ff; }

    .test-label {
      display: inline-block;
      padding: 4px 12px;
      background: #2196F3;
      color: white;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>

  <div class="header">
    <h1>🔍 Scroll Issue Diagnostic Test</h1>
    <p>Scroll down and click cards. Watch the log panel on the right.</p>
  </div>

  <div class="content">
    
    <!-- SPACER -->
    <div class="spacer">
      ⬇️ Scroll down to test sections ⬇️
    </div>

    <!-- TEST 1: Normal div with onClick -->
    <div class="test-section">
      <div class="section-title">TEST 1: Normal Div with onClick</div>
      <div class="test-label">Standard approach</div>
      <div class="cards-container">
        <div class="card" onclick="openModal1('Card 1')">
          <div class="card-title">Card 1</div>
          <div class="card-desc">Click to open modal</div>
        </div>
        <div class="card" onclick="openModal1('Card 2')">
          <div class="card-title">Card 2</div>
          <div class="card-desc">Click to open modal</div>
        </div>
        <div class="card" onclick="openModal1('Card 3')">
          <div class="card-title">Card 3</div>
          <div class="card-desc">Click to open modal</div>
        </div>
      </div>
    </div>

    <!-- TEST 2: Button elements -->
    <div class="test-section">
      <div class="section-title">TEST 2: Button Elements</div>
      <div class="test-label">Using button tags</div>
      <div class="cards-container">
        <button class="card" onclick="openModal2('Button 1')" style="border: 2px solid #e0e0e0;">
          <div class="card-title">Button 1</div>
          <div class="card-desc">Click to open modal</div>
        </button>
        <button class="card" onclick="openModal2('Button 2')" style="border: 2px solid #e0e0e0;">
          <div class="card-title">Button 2</div>
          <div class="card-desc">Click to open modal</div>
        </button>
        <button class="card" onclick="openModal2('Button 3')" style="border: 2px solid #e0e0e0;">
          <div class="card-title">Button 3</div>
          <div class="card-desc">Click to open modal</div>
        </button>
      </div>
    </div>

    <!-- TEST 3: With scroll position save/restore -->
    <div class="test-section">
      <div class="section-title">TEST 3: With Scroll Position Lock</div>
      <div class="test-label">Saves scroll before opening</div>
      <div class="cards-container">
        <div class="card" onclick="openModal3('Card A')">
          <div class="card-title">Card A</div>
          <div class="card-desc">Click to open modal</div>
        </div>
        <div class="card" onclick="openModal3('Card B')">
          <div class="card-title">Card B</div>
          <div class="card-desc">Click to open modal</div>
        </div>
        <div class="card" onclick="openModal3('Card C')">
          <div class="card-title">Card C</div>
          <div class="card-desc">Click to open modal</div>
        </div>
      </div>
    </div>

    <!-- TEST 4: With preventDefault -->
    <div class="test-section">
      <div class="section-title">TEST 4: With Event.preventDefault()</div>
      <div class="test-label">Prevents default behavior</div>
      <div class="cards-container">
        <div class="card" id="card4-1">
          <div class="card-title">Card X</div>
          <div class="card-desc">Click to open modal</div>
        </div>
        <div class="card" id="card4-2">
          <div class="card-title">Card Y</div>
          <div class="card-desc">Click to open modal</div>
        </div>
        <div class="card" id="card4-3">
          <div class="card-title">Card Z</div>
          <div class="card-desc">Click to open modal</div>
        </div>
      </div>
    </div>

  </div>

  <!-- Modals -->
  <div id="modal1" class="modal-overlay">
    <div class="modal-content">
      <button class="modal-close" onclick="closeModal('modal1')">✕</button>
      <h2 id="modal1-title">Modal Title</h2>
      <p>This is test modal 1 - Normal div with onClick</p>
    </div>
  </div>

  <div id="modal2" class="modal-overlay">
    <div class="modal-content">
      <button class="modal-close" onclick="closeModal('modal2')">✕</button>
      <h2 id="modal2-title">Modal Title</h2>
      <p>This is test modal 2 - Button elements</p>
    </div>
  </div>

  <div id="modal3" class="modal-overlay">
    <div class="modal-content">
      <button class="modal-close" onclick="closeModal('modal3')">✕</button>
      <h2 id="modal3-title">Modal Title</h2>
      <p>This is test modal 3 - With scroll position lock</p>
    </div>
  </div>

  <div id="modal4" class="modal-overlay">
    <div class="modal-content">
      <button class="modal-close" onclick="closeModal('modal4')">✕</button>
      <h2 id="modal4-title">Modal Title</h2>
      <p>This is test modal 4 - With preventDefault</p>
    </div>
  </div>

  <!-- Log Panel -->
  <div class="log-panel">
    <div class="log-title">📊 EVENT LOG</div>
    <div id="log-container"></div>
  </div>

  <script>
    let savedScrollPosition = 0;
    let logEntries = [];

    function addLog(message, type = 'info') {
      const time = new Date().toLocaleTimeString();
      logEntries.unshift({ message, type, time });
      if (logEntries.length > 15) logEntries.pop();
      
      const container = document.getElementById('log-container');
      container.innerHTML = logEntries.map(entry => `
        <div class="log-entry log-${entry.type}">
          <strong>${entry.message}</strong><br>
          <small style="color: #888">${entry.time}</small>
        </div>
      `).join('');

      console.log(`[${type.toUpperCase()}] ${message}`);
    }

    // TEST 1: Normal approach
    function openModal1(title) {
      const scrollBefore = window.scrollY;
      addLog(`TEST 1: Clicked "${title}" at scroll ${scrollBefore}px`, 'info');
      
      document.getElementById('modal1-title').textContent = title;
      document.getElementById('modal1').classList.add('active');
      
      setTimeout(() => {
        const scrollAfter = window.scrollY;
        const diff = scrollAfter - scrollBefore;
        
        if (diff !== 0) {
          addLog(`⚠️ TEST 1 SCROLLED ${diff}px! (${scrollBefore} → ${scrollAfter})`, 'error');
        } else {
          addLog(`✅ TEST 1 OK - No scroll`, 'success');
        }
      }, 100);
    }

    // TEST 2: Button elements
    function openModal2(title) {
      const scrollBefore = window.scrollY;
      addLog(`TEST 2: Clicked "${title}" at scroll ${scrollBefore}px`, 'info');
      
      document.getElementById('modal2-title').textContent = title;
      document.getElementById('modal2').classList.add('active');
      
      setTimeout(() => {
        const scrollAfter = window.scrollY;
        const diff = scrollAfter - scrollBefore;
        
        if (diff !== 0) {
          addLog(`⚠️ TEST 2 SCROLLED ${diff}px! (${scrollBefore} → ${scrollAfter})`, 'error');
        } else {
          addLog(`✅ TEST 2 OK - No scroll`, 'success');
        }
      }, 100);
    }

    // TEST 3: With scroll position save
    function openModal3(title) {
      const scrollBefore = window.scrollY;
      savedScrollPosition = scrollBefore;
      addLog(`TEST 3: Clicked "${title}" at scroll ${scrollBefore}px`, 'info');
      
      document.getElementById('modal3-title').textContent = title;
      document.getElementById('modal3').classList.add('active');
      
      // Immediately restore scroll
      requestAnimationFrame(() => {
        window.scrollTo(0, savedScrollPosition);
        
        setTimeout(() => {
          const scrollAfter = window.scrollY;
          const diff = scrollAfter - savedScrollPosition;
          
          if (diff !== 0) {
            addLog(`⚠️ TEST 3 SCROLLED ${diff}px! (${savedScrollPosition} → ${scrollAfter})`, 'error');
          } else {
            addLog(`✅ TEST 3 OK - No scroll (restored to ${savedScrollPosition})`, 'success');
          }
        }, 100);
      });
    }

    // TEST 4: With preventDefault
    document.getElementById('card4-1').addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const scrollBefore = window.scrollY;
      addLog(`TEST 4: Clicked "Card X" at scroll ${scrollBefore}px`, 'info');
      
      document.getElementById('modal4-title').textContent = 'Card X';
      document.getElementById('modal4').classList.add('active');
      
      setTimeout(() => {
        const scrollAfter = window.scrollY;
        const diff = scrollAfter - scrollBefore;
        
        if (diff !== 0) {
          addLog(`⚠️ TEST 4 SCROLLED ${diff}px! (${scrollBefore} → ${scrollAfter})`, 'error');
        } else {
          addLog(`✅ TEST 4 OK - No scroll`, 'success');
        }
      }, 100);
    });

    document.getElementById('card4-2').addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const scrollBefore = window.scrollY;
      addLog(`TEST 4: Clicked "Card Y" at scroll ${scrollBefore}px`, 'info');
      
      document.getElementById('modal4-title').textContent = 'Card Y';
      document.getElementById('modal4').classList.add('active');
      
      setTimeout(() => {
        const scrollAfter = window.scrollY;
        const diff = scrollAfter - scrollBefore;
        
        if (diff !== 0) {
          addLog(`⚠️ TEST 4 SCROLLED ${diff}px! (${scrollBefore} → ${scrollAfter})`, 'error');
        } else {
          addLog(`✅ TEST 4 OK - No scroll`, 'success');
        }
      }, 100);
    });

    document.getElementById('card4-3').addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const scrollBefore = window.scrollY;
      addLog(`TEST 4: Clicked "Card Z" at scroll ${scrollBefore}px`, 'info');
      
      document.getElementById('modal4-title').textContent = 'Card Z';
      document.getElementById('modal4').classList.add('active');
      
      setTimeout(() => {
        const scrollAfter = window.scrollY;
        const diff = scrollAfter - scrollBefore;
        
        if (diff !== 0) {
          addLog(`⚠️ TEST 4 SCROLLED ${diff}px! (${scrollBefore} → ${scrollAfter})`, 'error');
        } else {
          addLog(`✅ TEST 4 OK - No scroll`, 'success');
        }
      }, 100);
    });

    // Close modal
    function closeModal(modalId) {
      document.getElementById(modalId).classList.remove('active');
      addLog(`Closed modal: ${modalId}`, 'info');
    }

    // Click outside to close
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.addEventListener('click', function(e) {
        if (e.target === this) {
          closeModal(this.id);
        }
      });
    });

    // Initial log
    addLog('🔍 Diagnostic ready! Scroll down and click cards.', 'success');
  </script>

</body>
</html>