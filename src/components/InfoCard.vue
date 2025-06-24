<template>
  <div class="info-card">
    <div class="info-row">
      <div class="info-label">AuthInfo:</div>
      
      
      <button class="show-button" @click="toggleAuthInfo">SHOW</button>
    </div>
    
    <div class="info-row">
      <div class="info-label">Expires at:</div>
      <div class="info-value">{{ formatDate(expiresAt) }}</div>
    </div>
    
    <!-- Auth info details that appear when "SHOW" is clicked -->
    <transition name="reveal"><div v-if="showAuthInfo" class="auth-details">
      <div class="auth-content">
        <p>Authorization code: 12345</p>
      </div>
    </div></transition>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    expiresAt: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showAuthInfo: false
    }
  },
  methods: {
    toggleAuthInfo() {
      this.showAuthInfo = !this.showAuthInfo;
    },
    formatDate(timestamp) {
      if (!timestamp) return '';
      
      const date = new Date(timestamp);
      
      const month = new Intl.DateTimeFormat('en-US', { month: 'short', timeZone: 'UTC' }).format(date);
      const day = date.getUTCDate();
      const year = date.getUTCFullYear();
      
      let hours = date.getUTCHours();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      
      const minutes = String(date.getUTCMinutes()).padStart(2, '0');
      const seconds = String(date.getUTCSeconds()).padStart(2, '0');
      
      return `${month} ${day}, ${year} ${hours}:${minutes}:${seconds} ${ampm}`;
    }
  }
}
</script>

<style scoped>
.info-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  padding: 1rem;
  margin-bottom: 1rem;
}

.info-row {
  display: flex;
  justify-content: left;

  align-items: center;
margin-bottom: 10px;;

}

.info-row:last-child {
  border-bottom: none;
}

.info-label {
  font-weight: bold;
  color: #333;
  width: 120px;

}

.show-button {
  background-color: #4286f4;
  color: white;
  border: none;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  border-radius: 4px;
  padding: 8px 30px;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

.show-button:hover {
  background-color: #3a75d8;
}

.auth-details {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 4px;
}

.auth-content {
  line-height: 1.5;
}

.auth-content h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}



  /* Animation styles */
  .reveal-enter-active,
.reveal-leave-active {
  transition: all 0.3s ease;
  transform-origin: top center;
}

.reveal-enter-from {
  transform: scaleY(0);
  opacity: 0;
}

.reveal-enter-to {
  transform: scaleY(1);
  opacity: 1;
}

.reveal-leave-from {
  transform: scaleY(1);
  opacity: 1;
}

.reveal-leave-to {
  transform: scaleY(0);
  opacity: 0;
}
</style>