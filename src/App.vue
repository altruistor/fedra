<template>
  <div class="app">
    <Navbar companyName="Fedra" username="Jan Mulísek" />
    <div class="main-container">
      <Sidebar />
      <main class="content">
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">{{ error }}</div>
        <div v-else>
        
        <div class="title-verbose-button">  
          <!-- Domain-title -->
          <h1 class="domain-title">{{ domainData.fqdn }}</h1>

          <!-- Toggle switch for verbose view -->
          <div class="toggle-container">
            <label class="toggle-switch">
              <input type="checkbox" v-model="verboseView">
              <span class="toggle-track">
                <span class="toggle-indicator"></span>
              </span>
            </label>
            <span class="toggle-label">Verbose view</span>
          </div>
        </div>

        <div class="cards-container two-column-layout">
          <div class="column left-column"> 
            <InfoCard 
              v-if="domainData" 
              :expiresAt="domainData.expires_at"
            />
            <EventsCard
              v-if="domainData && domainData.events"
              :events="domainData.events"
            />
            <FlagsCard
              v-if="domainData && domainData.state_flags"
              :stateFlags="domainData.state_flags"
              :verboseView="verboseView"
            />
          </div>
          <div class="column right-column">
            <OwnerCard
              v-if="domainData && domainData.owner"
              :owner="domainData.owner"
            />
            <!-- For non-verbose mode (SINGLE card with all contacts) -->
            <div v-if="!verboseView">
              <AdminContactCard 
                :administrativeContacts="domainData.administrative_contacts"
                :verboseView="verboseView"
              />
            </div>

            <!-- For verbose mode (INDIVIDUAL cards with details) -->
            <div v-else>
              <AdminContactCard 
                v-for="contact in domainData.administrative_contacts" 
                :key="contact.handle" 
                :administrativeContact="contact"
                :verboseView="verboseView"
              />
            </div>

            <NSSeTCard
              v-if="domainData && domainData.nsset"
              :nsset="domainData.nsset"
            /> 

            <KeySetCard
              v-if="domainData && domainData.keyset"
              :keyset="domainData.keyset"
            /> 
          </div>
        </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import InfoCard from './components/InfoCard.vue'
import EventsCard from './components/EventsCard.vue'
import FlagsCard from './components/FlagsCard.vue'
import OwnerCard from './components/OwnerCard.vue'
import AdminContactCard from './components/AdminContactCard.vue'
import NSSeTCard from './components/NSSeTCard.vue'
import KeySetCard from './components/KeySetCard.vue'
import { fetchDomainData } from './services/domainService'

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
    InfoCard,
    EventsCard,
    FlagsCard,
    OwnerCard,
    AdminContactCard,
    NSSeTCard,
    KeySetCard
  },
  data() {
    return {
      domainData: null,
      domainName: "fedra",
      loading: true,
      error: null,
      verboseView: false
    }
  },
  mounted() {
    this.fetchDomainData()
  },
  methods: {
    async fetchDomainData() {
      try {
        this.loading = true;
        this.domainData = await fetchDomainData(this.domainName); // Pass domain name
        this.loading = false;
      } catch (err) {
        this.error = `Error loading domain data: ${err.message}`;
        this.loading = false;
        console.error('Error fetching domain data:', err);
      }
    }
  },
  computed: {
    // Contacts that should always be visible
    alwaysVisible() {
      if (!this.domainData?.administrative_contacts) return [];
      
      return this.domainData.administrative_contacts.filter(contact => 
        contact.publish && contact.publish.organization === true
      );
    },
    
    // Contacts that should only show in verbose mode
    verboseOnly() {
      if (!this.domainData?.administrative_contacts) return [];
      
      return this.domainData.administrative_contacts.filter(contact => 
        !contact.publish || contact.publish.organization !== true
      );
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html body {
  font-family: 'Open Sans', Arial, sans-serif !important; 
  font-weight: 400 !important;
  font-size: 12px !important; 
  line-height: 1.2 !important;
  color: #333 !important;
}

body {
  font-family: 'Open-sans', sans-serif;
  font-weight: 400;
  line-height: 1.2;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 100%;
}

.main-container {
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

.domain-title {
  margin-bottom: 15px;
  font-weight: bold;
}

.content {
  flex-grow: 1;
  padding: 1.5rem;
  overflow-y: auto;
  width: 100%;
  max-width: 100%;
  background-color: #FAFAFA;
}

.cards-container {
  width: 100%;
  max-width: 100%;
}

.two-column-layout {
  display: flex;
  gap: 1.5rem;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
}

.left-column {
  width: 60%;
  min-width: 600px;
  flex-shrink: 0;
}

/* Right column takes remaining space */
.right-column {
  flex: 1;
  min-width: 0;
}

/* Responsive adjustment */
@media (max-width: 1080px) {
  .two-column-layout {
    flex-direction: column;
  }
  
  .left-column, .right-column {
    width: 100%;
    min-width: 0;
  }
}

.toggle-container {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.toggle-label {
  margin-left: 10px;
  font-size: 1rem;
  color: #666;
}

.toggle-switch {
  position: relative;
  display: inline-block;
}

.toggle-track {
  display: block;
  width: 50px;
  height: 24px;
  background-color: #e0e0e0;
  border-radius: 12px;
  transition: background-color 0.3s;
  padding: 2px;
}

input:checked + .toggle-track {
  background-color: #cee8d7;
}

.toggle-indicator {
  display: block;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: transform 0.3s;
}

input:checked + .toggle-track .toggle-indicator {
  transform: translateX(26px);
  background-color: #4CAF50;
}

.toggle-switch input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* Global card header style to be added to App.vue */
.info-card h2,
.events-card h2,
.flags-card h2,
.owner-card h2,
.admin-contact-card h2,
.nsset-card h2,
.keyset-card h2 {
  margin: -1rem -1rem 1rem -1rem;
  padding: 0.75rem 1rem;
  background-color: #EEEE;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-weight: bold;
  border-bottom: none;
  font-size: 14px;
}
</style>