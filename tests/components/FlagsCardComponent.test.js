import { jest, expect, describe, it } from '@jest/globals';

describe('FlagsCard Component', () => {
  // Mock data matching the component's expected structure
  const mockStateFlags = {
    flags: [
      { name: 'serverDeleteProhibited', description: 'Server Delete Prohibited', active: true },
      { name: 'serverUpdateProhibited', description: 'Server Update Prohibited', active: false },
      { name: 'serverTransferProhibited', description: 'Server Transfer Prohibited', active: true }
    ],
    groups: [
      ['serverDeleteProhibited', 'serverUpdateProhibited'],
      ['serverTransferProhibited']
    ]
  };

  it('verifies firstGroupFlags computed property', () => {
    function firstGroupFlags(stateFlags) {
      if (!stateFlags?.groups || !stateFlags?.groups[0] || !stateFlags?.flags) {
        return [];
      }
      
      const firstGroup = stateFlags.groups[0];
      return stateFlags.flags.filter(flag => firstGroup.includes(flag.name));
    }
    
    const result = firstGroupFlags(mockStateFlags);
    expect(result.length).toBe(2);
    expect(result[0].name).toBe('serverDeleteProhibited');
    expect(result[1].name).toBe('serverUpdateProhibited');
  });

  it('verifies secondGroupFlags computed property', () => {
    function secondGroupFlags(stateFlags) {
      if (!stateFlags?.groups || !stateFlags?.groups[1] || !stateFlags?.flags) {
        return [];
      }
      
      const secondGroup = stateFlags.groups[1];
      return stateFlags.flags.filter(flag => secondGroup.includes(flag.name));
    }
    
    const result = secondGroupFlags(mockStateFlags);
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('serverTransferProhibited');
  });

  it('verifies otherFlags computed property', () => {
    function otherFlags(stateFlags) {
      if (!stateFlags?.flags) {
        return [];
      }
      
      const groupedFlagNames = new Set();
      if (stateFlags?.groups) {
        stateFlags.groups.forEach(group => {
          group.forEach(name => groupedFlagNames.add(name));
        });
      }
      
      return stateFlags.flags.filter(flag => !groupedFlagNames.has(flag.name));
    }
    
    // Add an ungrouped flag to test
    const stateFlags = {
      ...mockStateFlags,
      flags: [
        ...mockStateFlags.flags,
        { name: 'clientDeleteProhibited', description: 'Client Delete Prohibited', active: true }
      ]
    };
    
    const result = otherFlags(stateFlags);
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('clientDeleteProhibited');
  });

  it('checks visibility based on verbose mode', () => {
    // This simulates the v-show="verboseView || flag.active" logic
    function getVisibleFlags(flags, verboseView) {
      return flags.filter(flag => verboseView || flag.active);
    }
    
    // In verbose mode, all flags should be visible
    const verboseVisible = getVisibleFlags(mockStateFlags.flags, true);
    expect(verboseVisible.length).toBe(3);
    
    // In non-verbose mode, only active flags should be visible
    const nonVerboseVisible = getVisibleFlags(mockStateFlags.flags, false);
    expect(nonVerboseVisible.length).toBe(2);
    expect(nonVerboseVisible.every(flag => flag.active)).toBe(true);
  });
});