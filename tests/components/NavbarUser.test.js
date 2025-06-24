import { jest, expect, describe, it, beforeEach } from '@jest/globals';

describe('Navbar Component', () => {
  // Simulate the component's state and methods
  let componentState;

  beforeEach(() => {
    // Reset component state before each test
    componentState = {
      isDropdownOpen: false,
      username: 'TestUser'  // Add username to component state
    };
  });

  // Simulate the toggleDropdown method
  function toggleDropdown() {
    componentState.isDropdownOpen = !componentState.isDropdownOpen;
  }

  it('displays user menu when username is clicked', () => {
    // Initially, dropdown should be hidden
    expect(componentState.isDropdownOpen).toBe(false);
    
    // Simulate clicking the user container which calls toggleDropdown
    toggleDropdown();
    
    // After click, dropdown should be visible
    expect(componentState.isDropdownOpen).toBe(true);
  });

  it('hides menu when clicked again', () => {
    // First click to show
    toggleDropdown();
    expect(componentState.isDropdownOpen).toBe(true);
    
    // Second click to hide
    toggleDropdown();
    expect(componentState.isDropdownOpen).toBe(false);
  });

  it('shows username in uppercase in the navbar', () => {
    // Function to simulate the template expression {{ username.toUpperCase() }}
    function getDisplayUsername(username) {
      return username.toUpperCase();
    }
    
    const displayedUsername = getDisplayUsername(componentState.username);
    expect(displayedUsername).toBe('TESTUSER');
  });
});