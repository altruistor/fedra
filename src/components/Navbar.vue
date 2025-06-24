<template>
    <nav class="navbar">
      <div class="navbar-left">
        <button class="burger-button">
          <span class="burger-icon"></span>
          <span class="burger-icon"></span>
          <span class="burger-icon"></span>
        </button>
        
        <h1 class="fedra">{{ companyName }}</h1>
      </div>
      
      <div class="navbar-right">
      <div class="user-container" @click="toggleDropdown">
        <div class="user-icon-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 90 90" xml:space="preserve">
            <g transform="translate(0 0) scale(1 1)">
              <path d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 45 22.007 c 8.899 0 16.14 7.241 16.14 16.14 c 0 8.9 -7.241 16.14 -16.14 16.14 c -8.9 0 -16.14 -7.24 -16.14 -16.14 C 28.86 29.248 36.1 22.007 45 22.007 z M 45 83.843 c -11.135 0 -21.123 -4.885 -27.957 -12.623 c 3.177 -5.75 8.144 -10.476 14.05 -13.341 c 2.009 -0.974 4.354 -0.958 6.435 0.041 c 2.343 1.126 4.857 1.696 7.473 1.696 c 2.615 0 5.13 -0.571 7.473 -1.696 c 2.083 -1 4.428 -1.015 6.435 -0.041 c 5.906 2.864 10.872 7.591 14.049 13.341 C 66.123 78.957 56.135 83.843 45 83.843 z" fill="white" />
            </g>
          </svg>
        </div>
        <span class="username">{{ username.toUpperCase() }}</span>
      </div>

      <!-- Dropdown menu -->
      <transition name="reveal">
      <div v-if="isDropdownOpen" class="dropdown-menu">
        <div class="dropdown-item dropdown-username"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 90 90" xml:space="preserve">
            <g transform="translate(0 0) scale(1 1)">
              <path d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 45 22.007 c 8.899 0 16.14 7.241 16.14 16.14 c 0 8.9 -7.241 16.14 -16.14 16.14 c -8.9 0 -16.14 -7.24 -16.14 -16.14 C 28.86 29.248 36.1 22.007 45 22.007 z M 45 83.843 c -11.135 0 -21.123 -4.885 -27.957 -12.623 c 3.177 -5.75 8.144 -10.476 14.05 -13.341 c 2.009 -0.974 4.354 -0.958 6.435 0.041 c 2.343 1.126 4.857 1.696 7.473 1.696 c 2.615 0 5.13 -0.571 7.473 -1.696 c 2.083 -1 4.428 -1.015 6.435 -0.041 c 5.906 2.864 10.872 7.591 14.049 13.341 C 66.123 78.957 56.135 83.843 45 83.843 z" fill="gray" />
            </g>
          </svg><div class="username-details"> <h3 class="dropdown-username-title">{{ username }}</h3><p>admin</p></div></div>
        <div class="dropdown-item dropdow-logout" @click="logout"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 256 256" xml:space="preserve">
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
	<path d="M 89.618 46.911 c 0.067 -0.162 0.105 -0.33 0.154 -0.497 c 0.043 -0.146 0.099 -0.285 0.129 -0.436 C 89.966 45.656 90 45.329 90 45.001 c 0 0 0 -0.001 0 -0.001 l 0 0 c 0 -0.328 -0.034 -0.656 -0.099 -0.979 c -0.029 -0.148 -0.085 -0.285 -0.127 -0.428 c -0.05 -0.169 -0.089 -0.341 -0.157 -0.505 c -0.07 -0.169 -0.166 -0.322 -0.253 -0.481 c -0.069 -0.127 -0.125 -0.258 -0.206 -0.38 c -0.184 -0.275 -0.392 -0.532 -0.625 -0.764 L 69.815 22.745 c -1.951 -1.952 -5.119 -1.952 -7.07 0 c -1.953 1.953 -1.953 5.119 0 7.071 L 72.929 40 h -43.35 c -2.761 0 -5 2.239 -5 5 c 0 2.762 2.239 5 5 5 h 43.35 L 62.745 60.185 c -1.953 1.952 -1.953 5.118 0 7.07 c 0.976 0.977 2.256 1.465 3.535 1.465 s 2.56 -0.488 3.535 -1.465 L 88.53 48.54 c 0.235 -0.234 0.445 -0.492 0.629 -0.769 c 0.077 -0.116 0.13 -0.241 0.196 -0.362 C 89.447 47.245 89.546 47.086 89.618 46.911 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(119,119,119); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
	<path d="M 85 90 H 5 c -2.761 0 -5 -2.238 -5 -5 V 5 c 0 -2.761 2.239 -5 5 -5 h 80 c 2.762 0 5 2.239 5 5 v 14.395 c 0 2.761 -2.238 5 -5 5 s -5 -2.239 -5 -5 V 10 H 10 v 70 h 70 v -9.395 c 0 -2.762 2.238 -5 5 -5 s 5 2.238 5 5 V 85 C 90 87.762 87.762 90 85 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(119,119,119); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
</g>
</svg>Logout</div>
      </div></transition>
    </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    props: {
      companyName: {
        type: String,
        default: 'Company Name'
      },
      username: {
        type: String,
        default: 'User'
      }
    },

    data() {
    return {
      isDropdownOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
   
  },
  mounted() {
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.isDropdownOpen = false;
      }
    });
  },
  beforeUnmount() {
    // Clean up event listener
    document.removeEventListener('click', this.closeDropdown);
  }
  }
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #4994EC;
    color: white;
    padding: 0 1rem;
    height: 64px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    position: relative;
  }
  
  .navbar-left {
    display: flex;
    align-items: center;
  }
  
  .burger-button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 18px;
    padding: 0;
    margin-right: 20px;
  }
  
  .burger-icon {
    width: 24px;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease;
  }
  
  .company-name {
    font-size: 1.2rem;
    margin: 0;
    font-weight: 500;
  }
  
  .navbar-right {
    display: flex;
    align-items: center;
  }
  
  .user-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 6px 12px;
  border-radius: 4px;
}

.user-icon-circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.username {
  font-weight: 500;
  letter-spacing: 0.5px;
}

.user-container {
  position: relative;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 20px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  border-radius: 4px;
  width: 300px;
  margin-top: 8px;
  z-index: 100;
}

.dropdown-item {
  padding: 10px 15px;
  color: #333;
  transition: background-color 0.2s;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f5c344;
}

.dropdown-item:first-child {
  border-bottom: 1px solid #eee;
}

.dropdown-username {
  display: flex;
  align-items: center;
  gap: 30px;
}

.dropdow-logout {
  display: flex;
  align-items: center;
  gap: 30px;
}

.dropdown-username-title {
  font-weight: bold;}


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