<template>
    <div class="flags-card">
      <h2>State Flags:</h2>
      
      <div class="flags-container" :class="{ 'verbose-mode': verboseView }">
        <!-- First group -->
        <div class="flags-column">

          <div 
            v-for="flag in firstGroupFlags" 
            :key="flag.name"
            class="flag-item"
            :class="{ 'active': flag.active, 'inactive': !flag.active }"
            v-show="verboseView || flag.active"
          >
            <span class="flag-icon" v-if="flag.active">✓</span>
            <span class="flag-icon" v-else>✕</span>
            <span class="flag-description">{{ flag.description }}</span>
          </div>
        </div>
        
        <!-- Second and Third groups -->
        <div class="flags-column">

          <div 
            v-for="flag in secondGroupFlags" 
            :key="flag.name"
            class="flag-item"
            :class="{ 'active': flag.active, 'inactive': !flag.active }"
            v-show="verboseView || flag.active"
          >
            <span class="flag-icon" v-if="flag.active">✓</span>
            <span class="flag-icon" v-else>✕</span>
            <span class="flag-description">{{ flag.description }}</span>
          </div>
        </div>
        
        <div class="flags-column">

          <div 
            v-for="flag in otherFlags" 
            :key="flag.name"
            class="flag-item"
            :class="{ 'active': flag.active, 'inactive': !flag.active }"
            v-show="verboseView || flag.active"
          >
            <span class="flag-icon" v-if="flag.active">✓</span>
            <span class="flag-icon" v-else>✕</span>
            <span class="flag-description">{{ flag.description }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FlagsCard',
    props: {
      stateFlags: {
        type: Object,
        required: true
        },

        verboseView: {
      type: Boolean,
      default: true
    }


        
    },
    computed: {
      firstGroupFlags() {
        if (!this.stateFlags?.groups || !this.stateFlags?.groups[0] || !this.stateFlags?.flags) {
          return [];
        }
        
        const firstGroup = this.stateFlags.groups[0];
        return this.stateFlags.flags.filter(flag => firstGroup.includes(flag.name));
      },
      
      secondGroupFlags() {
        if (!this.stateFlags?.groups || !this.stateFlags?.groups[1] || !this.stateFlags?.flags) {
          return [];
        }
        
        const secondGroup = this.stateFlags.groups[1];
        return this.stateFlags.flags.filter(flag => secondGroup.includes(flag.name));
      },
      
      otherFlags() {
        if (!this.stateFlags?.flags) {
          return [];
        }
        
        const groupedFlagNames = new Set();
        if (this.stateFlags?.groups) {
          this.stateFlags.groups.forEach(group => {
            group.forEach(name => groupedFlagNames.add(name));
          });
        }
        
        return this.stateFlags.flags.filter(flag => !groupedFlagNames.has(flag.name));
      },
      
      hasAnyFlags() {
        return this.firstGroupFlags.length > 0 || 
               this.secondGroupFlags.length > 0 || 
               this.otherFlags.length > 0;
      }
    }
  }
  </script>
  
  <style scoped>
  .flags-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    padding: 1rem;
    margin-bottom: 1rem;
  }

  /* When verbose mode is on, hide inactive flags */
.flags-card.verbose-mode .flag-item.inactive {
  display: none;
}


  
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;

  }
  
  h3 {

    margin-bottom: 0.5rem;
    color: #4b5563;
  }
  
  .flags-container {
    display: block;
    gap: 1.5rem;
  }


  
  .flags-column {
    flex: 1;
    min-width: 0;
  }
  
  .flag-item {
    padding: 0.1rem;

    border-radius: 4px;
    display: flex;
    align-items: center;
  }
  
  .flag-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
    border-radius: 50%;
    flex-shrink: 0;
  }
  
  .active {
    color: #22c55e;
  }
  
  .active .flag-icon {
    background-color: #dcfce7;
    color: #16a34a;
  }
  
  .inactive {
    color: #ef4444;
  }
  
  .inactive .flag-icon {
    background-color: #fee2e2;
    color: #dc2626;
  }
  
  .flag-description {

    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .no-flags {
    color: #6b7280;
    font-style: italic;
    text-align: center;
    padding: 1rem 0;
  }
  
  /* Responsive adjustment */
  @media (max-width: 768px) {
    .flags-container {
      flex-direction: column;
    }
  }

  .flags-container.verbose-mode {
  display: flex;
}
  </style>