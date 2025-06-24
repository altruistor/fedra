<template>
    <div class="admin-contact-card">
      <!-- Card header -->
      <div class="card-header">
        <h2>Administrative contacts:</h2>
      </div>

   
      
      <template v-if="!verboseView">

        <!-- Verbose mode (compact view) -->
      <div class="compact-contacts">
        <div v-for="(contact, index) in administrativeContacts" :key="index" class="compact-row">
          <div class="contact-name">{{ contact.name }}:</div>
          <div class="contact-handle handle-value">{{ contact.handle }}</div>
        </div>
      </div>
  
      
      </template>



      <template v-else>

        <!-- Non-verbose mode (detailed view) -->
      <div class="contact-content">
        <div class="contact-row">
          <div class="label">Handle:</div>
          <div class="value handle-value">{{ administrativeContact.handle }}</div>
        </div>
        
        <div class="contact-row">
          <div class="label">
            <span v-if="administrativeContact.publish && administrativeContact.publish.organization === true" class="visibility-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="12" height="12" viewBox="0 0 256 256" xml:space="preserve">
  <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
      <path d="M 89.307 43.082 C 74.775 25.601 59.868 16.737 45 16.737 c -14.869 0 -29.775 8.864 -44.307 26.345 c -0.924 1.112 -0.924 2.724 0 3.836 C 15.225 64.399 30.131 73.264 45 73.264 c 14.868 0 29.775 -8.864 44.307 -26.346 C 90.231 45.806 90.231 44.194 89.307 43.082 z M 45 62 c -9.374 0 -17 -7.626 -17 -17 s 7.626 -17 17 -17 s 17 7.626 17 17 S 54.374 62 45 62 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(94,194,105); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
      <circle cx="45" cy="45" r="9" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(94,194,105); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
  </g>
  </svg></span>
            <span v-if="administrativeContact.publish && administrativeContact.publish.organization === false" class="hidden-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="12" height="12" viewBox="0 0 256 256" xml:space="preserve">
  <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
      <path d="M 13.148 79.853 c -0.768 0 -1.536 -0.293 -2.121 -0.879 c -1.172 -1.171 -1.172 -3.071 0 -4.242 l 63.705 -63.705 c 1.172 -1.172 3.07 -1.172 4.242 0 c 1.172 1.171 1.172 3.071 0 4.242 L 15.269 78.974 C 14.684 79.56 13.916 79.853 13.148 79.853 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(200,21,38); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
      <path d="M 67.676 24.89 c -0.127 -0.929 -0.682 -1.746 -1.498 -2.207 c -21.92 -12.368 -43.952 -5.505 -65.485 20.399 c -0.924 1.111 -0.924 2.724 0 3.835 c 7.63 9.18 15.413 16.043 23.129 20.397 c 0.462 0.261 0.97 0.388 1.474 0.388 c 0.777 0 1.545 -0.301 2.122 -0.879 l 9.102 -9.103 c -0.561 0.564 -1.324 0.883 -2.12 0.885 c -0.002 0 -0.004 0 -0.007 0 c -0.795 0 -1.558 -0.315 -2.121 -0.878 C 28.873 54.329 27 49.809 27 45 c 0 -9.925 8.075 -18 18 -18 c 4.749 0 9.23 1.833 12.617 5.163 c 0.569 0.56 0.893 1.322 0.897 2.12 s -0.308 1.565 -0.869 2.132 L 36.594 57.648 l 30.231 -30.231 C 67.487 26.754 67.803 25.819 67.676 24.89 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(200,21,38); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
      <path d="M 89.307 43.083 c -4.766 -5.734 -9.613 -10.593 -14.409 -14.442 c -1.194 -0.958 -2.917 -0.863 -3.999 0.219 l -9.231 9.231 c 0.884 2.129 1.376 4.461 1.376 6.909 c 0 9.965 -8.078 18.044 -18.044 18.044 c -2.448 0 -4.78 -0.493 -6.909 -1.376 l -5.08 5.08 c -0.753 0.753 -1.05 1.848 -0.782 2.878 c 0.268 1.03 1.063 1.841 2.087 2.13 c 3.552 1.004 7.104 1.505 10.657 1.505 c 14.901 0 29.77 -8.822 44.333 -26.342 C 90.231 45.806 90.231 44.194 89.307 43.083 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(200,21,38); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
  </g>
  </svg></span>
            Organization:
          </div>
          <div class="value">{{ administrativeContact.organization }}</div>
        </div>
        
        <div class="contact-row">
          <div class="label">
            <span v-if="administrativeContact.publish && administrativeContact.publish.name === true" class="visibility-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="12" height="12" viewBox="0 0 256 256" xml:space="preserve">
  <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
      <path d="M 89.307 43.082 C 74.775 25.601 59.868 16.737 45 16.737 c -14.869 0 -29.775 8.864 -44.307 26.345 c -0.924 1.112 -0.924 2.724 0 3.836 C 15.225 64.399 30.131 73.264 45 73.264 c 14.868 0 29.775 -8.864 44.307 -26.346 C 90.231 45.806 90.231 44.194 89.307 43.082 z M 45 62 c -9.374 0 -17 -7.626 -17 -17 s 7.626 -17 17 -17 s 17 7.626 17 17 S 54.374 62 45 62 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(94,194,105); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
      <circle cx="45" cy="45" r="9" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(94,194,105); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
  </g>
  </svg></span>
            <span v-if="administrativeContact.publish && administrativeContact.publish.name === false" class="hidden-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="12" height="12" viewBox="0 0 256 256" xml:space="preserve">
  <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
      <path d="M 13.148 79.853 c -0.768 0 -1.536 -0.293 -2.121 -0.879 c -1.172 -1.171 -1.172 -3.071 0 -4.242 l 63.705 -63.705 c 1.172 -1.172 3.07 -1.172 4.242 0 c 1.172 1.171 1.172 3.071 0 4.242 L 15.269 78.974 C 14.684 79.56 13.916 79.853 13.148 79.853 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(200,21,38); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
      <path d="M 67.676 24.89 c -0.127 -0.929 -0.682 -1.746 -1.498 -2.207 c -21.92 -12.368 -43.952 -5.505 -65.485 20.399 c -0.924 1.111 -0.924 2.724 0 3.835 c 7.63 9.18 15.413 16.043 23.129 20.397 c 0.462 0.261 0.97 0.388 1.474 0.388 c 0.777 0 1.545 -0.301 2.122 -0.879 l 9.102 -9.103 c -0.561 0.564 -1.324 0.883 -2.12 0.885 c -0.002 0 -0.004 0 -0.007 0 c -0.795 0 -1.558 -0.315 -2.121 -0.878 C 28.873 54.329 27 49.809 27 45 c 0 -9.925 8.075 -18 18 -18 c 4.749 0 9.23 1.833 12.617 5.163 c 0.569 0.56 0.893 1.322 0.897 2.12 s -0.308 1.565 -0.869 2.132 L 36.594 57.648 l 30.231 -30.231 C 67.487 26.754 67.803 25.819 67.676 24.89 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(200,21,38); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
      <path d="M 89.307 43.083 c -4.766 -5.734 -9.613 -10.593 -14.409 -14.442 c -1.194 -0.958 -2.917 -0.863 -3.999 0.219 l -9.231 9.231 c 0.884 2.129 1.376 4.461 1.376 6.909 c 0 9.965 -8.078 18.044 -18.044 18.044 c -2.448 0 -4.78 -0.493 -6.909 -1.376 l -5.08 5.08 c -0.753 0.753 -1.05 1.848 -0.782 2.878 c 0.268 1.03 1.063 1.841 2.087 2.13 c 3.552 1.004 7.104 1.505 10.657 1.505 c 14.901 0 29.77 -8.822 44.333 -26.342 C 90.231 45.806 90.231 44.194 89.307 43.083 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(200,21,38); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
  </g>
  </svg></span>
            Name:
          </div>
          <div class="value">{{ administrativeContact.name }}</div>
        </div>
      </div>
      
      


      
    </template>





    
    </div>
  </template>






  
  <script>
  export default {
    name: 'AdminContactCard',
    props: {
      // For non-verbose mode: single contact
      administrativeContact: {
        type: Object,
        default: () => ({})
      },
      // For verbose mode: array of contacts
      administrativeContacts: {
        type: Array,
        default: () => []
      },
      verboseView: {
        type: Boolean,
        default: false
      }
    }
  }
  </script>
  
  <style scoped>
  .admin-contact-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    padding: 1rem;
    margin-bottom: 1rem;
  }
  

  

  
  /* Non-verbose mode styles */
  .contact-content {
    display: flex;
    flex-direction: column;
  }
  
  .contact-row {
    display: flex;
    padding: 4px 0;

  }
  
  .contact-row:last-child {
    border-bottom: none;
  }
  
  .label {
    font-weight: bold;
    width: 120px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }
  
  .value {
    flex-grow: 1;
  }
  
  /* Verbose mode styles */
  /* .compact-contacts {
    padding: 1rem;
  } */
  
  .compact-row {
    display: flex;
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
    align-items: center;
  }
  
  .compact-row:last-child {
    border-bottom: none;
  }
  
  .contact-name {
    font-weight: bold;
    width: 120px;
    flex-shrink: 0;
  }
  
  .contact-handle {
    flex-grow: 1;
  }
  
  /* Common styles */
  .visibility-icon {
    color: #22c55e;
    margin-right: 6px;
    font-size: 1.1em;
  }
  
  .hidden-icon {
    color: #ef4444;
    margin-right: 6px;
    font-size: 1.1em;
  }
  
  .handle-value {
    color: #4994EC;
  }
  </style>