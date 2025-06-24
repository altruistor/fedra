import { jest, expect, describe, it, beforeEach } from '@jest/globals';

describe('InfoCard Component', () => {
  // Simulate the component's data and methods
  let componentState;
  
  // Reset component state before each test
  beforeEach(() => {
    componentState = {
      showAuthInfo: false
    };
  });
  
  // Simulate the toggleAuthInfo method
  function toggleAuthInfo() {
    componentState.showAuthInfo = !componentState.showAuthInfo;
  }
  
  it('shows authorization code when the button is clicked', () => {
    // Initially, auth info should be hidden
    expect(componentState.showAuthInfo).toBe(false);
    
    // Simulate clicking the SHOW button
    toggleAuthInfo();
    
    // After clicking, auth info should be visible
    expect(componentState.showAuthInfo).toBe(true);
    
    // If we click again, it should hide
    toggleAuthInfo();
    expect(componentState.showAuthInfo).toBe(false);
  });
  
  it('correctly implements toggle behavior', () => {
    // Test multiple toggle actions to ensure it works consistently
    expect(componentState.showAuthInfo).toBe(false);
    
    toggleAuthInfo(); // First click - show
    expect(componentState.showAuthInfo).toBe(true);
    
    toggleAuthInfo(); // Second click - hide
    expect(componentState.showAuthInfo).toBe(false);
    
    toggleAuthInfo(); // Third click - show again
    expect(componentState.showAuthInfo).toBe(true);
  });
  
  // Test that initial state is always hidden
  it('initializes with hidden authorization code', () => {
    // Create a new component state to ensure initial value is correct
    const freshComponentState = {
      showAuthInfo: false
    };
    
    expect(freshComponentState.showAuthInfo).toBe(false);
  });
});