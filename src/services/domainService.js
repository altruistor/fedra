export const fetchDomainData = async (domainName) => {

      const response = await fetch('/data/domain-detail.json');
      if (!response.ok) throw new Error(`Failed to fetch data: ${response.status}`);
      return response.json();
    
  };