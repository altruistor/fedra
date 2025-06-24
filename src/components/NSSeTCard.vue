<template>
    <div class="nsset-card">
      <h2>NSSet:</h2>
      <div class="nsset-content">
        <div class="nsset-row">
          <div class="label">Handle:</div>
          <div class="value">{{ nsset.handle }}</div>
        </div>
        
        <div class="nsset-row">
          <div class="label">Registrar:</div>
          <div class="value registar">{{ nsset.registrar }}</div>
        </div>
        
        <div class="nsset-row dns-section">
          <div class="label">DNS:</div>
          <div class="value dns-list">
            <div v-for="(dns, index) in nsset.dns" :key="index" class="dns-item">
              {{ dns.name }} ({{ dns.ip_address }})
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NSSeTCard',
    props: {
      nsset: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .nsset-card {
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
  
  .nsset-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .nsset-row {
    display: flex;
    align-items: center;
  }
  
  .nsset-row:last-child {
    border-bottom: none;
  }
  
  .label {
    font-weight: bold;
    width: 100px;
    flex-shrink: 0;
  }
  
  .value {
    color: #4994EC;
    flex-grow: 1;
  }
  
  .dns-list {
    color: black;
    display: flex;
    flex-direction: column;

  }
  

  </style>