<template>
    <div class="keyset-card">
      <h2>KeySet:</h2>
      <div class="keyset-content">
        <div class="keyset-row">
          <div class="label">Handle:</div>
          <div class="value">{{ keyset.handle }}</div>
        </div>
        
        <div class="keyset-row">
          <div class="label">Registrar:</div>
          <div class="value">{{ keyset.registrar }}</div>
        </div>
        
        <div class="keyset-row dns-keys-section">
          <div class="label">DNS keys:</div>
          <div class="value dns-keys-list">
            <div v-for="(dnsKey, index) in keyset.dns_keys" :key="index" class="dns-key-item">
              {{ dnsKey }}
            </div>
            <div v-if="keyset.dns_keys.length === 0" class="no-keys">
              No DNS keys available
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'KeySetCard',
    props: {
      keyset: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .keyset-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    padding: 1rem;
    margin-bottom: 1rem;
  }
  
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }
  
  .keyset-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .keyset-row {
    display: flex;
    align-items: center;
  }
  
  .keyset-row:last-child {
    border-bottom: none;
  }
  
  .label {
    font-weight: bold;
    width: 100px;
    flex-shrink: 0;
  }
  
  .value {
    flex-grow: 1;
    color: #4994EC;
  }
  
  .dns-keys-list {
    color:black;
    display: flex;
    flex-direction: column;
  }
  
  .dns-key-item {
    margin-bottom: 3px;
    word-break: break-all;
    font-family: monospace;
  }
  
  .no-keys {
    color: #888;
    font-style: italic;
  }
  </style>