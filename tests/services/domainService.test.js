import { jest, expect, describe, beforeEach, afterAll, it } from '@jest/globals';
import { fetchDomainData } from '../../src/services/domainService.js';

// Mock fetch
const originalFetch = global.fetch;
global.fetch = jest.fn();

console.log('Test setup: Mocked global fetch function');

// Reset mocks between tests
beforeEach(() => {
  console.log('\nStarting new test, clearing previous mock data');
  fetch.mockClear();
});

// Restore original fetch after tests
afterAll(() => {
  console.log('\n Test cleanup: Restoring original fetch function');
  global.fetch = originalFetch;
});

describe('fetchDomainData', () => {
  it('successfully fetches data from JSON file', async () => {
    console.log('Testing successful data fetching');
    
    // Simple mock data
    const mockData = {
      fqdn: 'fedra.cz',
      expires_at: '2025-06-23'
    };
    console.log('Prepared mock data:', mockData);

    // Mock successful response
    console.log('Setting up mock to return successful response');
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData
    });

    // Call the function
    console.log('Calling fetchDomainData function');
    const result = await fetchDomainData('any-domain');
    console.log('Function returned data:', result);
    
    // Verify fetch was called correctly
    console.log('Verifying fetch was called correctly');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('/data/domain-detail.json');
    
    // Verify the returned data
    console.log('Verifying returned data matches expected data');
    expect(result).toEqual(mockData);
    console.log('Success test passed!');
  });

  it('throws error when fetch fails', async () => {
    console.log('Testing error handling');
    
    // Mock failed response - using mockResolvedValue instead of mockResolvedValueOnce
    console.log('Setting up mock to return error response (404)');
    fetch.mockResolvedValue({  // Use mockResolvedValue to handle multiple calls
      ok: false,
      status: 404
    });
  
    // Verify error is thrown
    console.log('Attempting to call fetchDomainData (expecting error)');
    try {
      await fetchDomainData('any-domain');
      console.log('Test should not reach here - function did not throw!');
    } catch (error) {
      console.log('Function correctly threw error:', error.message);
    }
    
    // Using Jest's expect for proper test assertion
    console.log('Verifying error with Jest assertions');
    await expect(fetchDomainData('any-domain')).rejects.toThrow('Failed to fetch data: 404');
    expect(fetch).toHaveBeenCalledTimes(2); // Called once in try/catch and once in expect
    console.log('Error handling test passed!');
  });
});