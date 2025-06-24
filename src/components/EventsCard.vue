<template>
  <div class="events-card">
    <h2>Events:</h2>
    
    <div class="events-grid">
      <!-- Create Date Row -->
      <div class="event-label">Create date:</div>
      <div class="event-value">{{ formatDate(events.registered?.timestamp) }}</div>
      <div class="registrar-label">Registrar:</div>
      <div class="registrar-value">{{ events.registered?.registrar_handle || '' }}</div>
      
      <!-- Update Date Row -->
      <div class="event-label">Update date:</div>
      <div class="event-value">{{ formatDate(events.updated?.timestamp) }}</div>
      <div class="registrar-label">Registrar:</div>
      <div class="registrar-value">{{ events.updated?.registrar_handle || '' }}</div>
      
      <!-- Transfer Date Row -->
      <div class="event-label">Transfer date:</div>
      <div class="event-value">{{ formatDate(events.transferred?.timestamp) }}</div>
      <div class="registrar-label">Registrar:</div>
      <div class="registrar-value">{{ events.transferred?.registrar_handle || '' }}</div>
      
      <!-- Delete Date Row -->
      <div class="event-label">Delete date:</div>
      <div class="event-value">{{ formatDate(events.unregistered?.timestamp) }}</div>

      <div class="registrar-value">{{ events.unregistered?.registrar_handle || '' }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventsCard',
  props: {
    events: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(timestamp) {
      if (!timestamp) return '';
      
      const date = new Date(timestamp);
      
      // Use UTC methods to prevent timezone conversion
      const month = new Intl.DateTimeFormat('en-US', { month: 'short', timeZone: 'UTC' }).format(date);
      const day = date.getUTCDate();
      const year = date.getUTCFullYear();
      
      // Get hours in 12-hour format in UTC
      let hours = date.getUTCHours();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      
      // Format minutes and seconds with leading zeros
      const minutes = String(date.getUTCMinutes()).padStart(2, '0');
      const seconds = String(date.getUTCSeconds()).padStart(2, '0');
      
      return `${month} ${day}, ${year} ${hours}:${minutes}:${seconds} ${ampm}`;
    }
  }
}
</script>

<style scoped>
.events-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  padding: 1rem;
  margin-bottom: 1rem;
}



.events-grid {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 4px;
}

.event-label {
  font-weight: bold;

}



.registrar-label {
  font-weight: bold;

}

.registrar-value {

  color: #4286f4;
}


</style>