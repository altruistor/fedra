<template>
    <div class="owner-card">
      <h2>Owner:</h2>
      <div class="owner-content">
        <div class="owner-row">
          <div class="label">Handle:</div>
          <div class="value handle-value">{{ owner.handle }}</div>
        </div>
        
        <div class="owner-row">
          <div class="label">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="12" height="12" viewBox="0 0 256 256" xml:space="preserve">
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
	<path d="M 89.307 43.082 C 74.775 25.601 59.868 16.737 45 16.737 c -14.869 0 -29.775 8.864 -44.307 26.345 c -0.924 1.112 -0.924 2.724 0 3.836 C 15.225 64.399 30.131 73.264 45 73.264 c 14.868 0 29.775 -8.864 44.307 -26.346 C 90.231 45.806 90.231 44.194 89.307 43.082 z M 45 62 c -9.374 0 -17 -7.626 -17 -17 s 7.626 -17 17 -17 s 17 7.626 17 17 S 54.374 62 45 62 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(94,194,105); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
	<circle cx="45" cy="45" r="9" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(94,194,105); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
</g>
</svg>

            Organization:
          </div>
          <div class="value">{{ owner.organization }}</div>
        </div>
        
        <div class="owner-row">
          <div class="label">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="12" height="12" viewBox="0 0 256 256" xml:space="preserve">
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
	<path d="M 89.307 43.082 C 74.775 25.601 59.868 16.737 45 16.737 c -14.869 0 -29.775 8.864 -44.307 26.345 c -0.924 1.112 -0.924 2.724 0 3.836 C 15.225 64.399 30.131 73.264 45 73.264 c 14.868 0 29.775 -8.864 44.307 -26.346 C 90.231 45.806 90.231 44.194 89.307 43.082 z M 45 62 c -9.374 0 -17 -7.626 -17 -17 s 7.626 -17 17 -17 s 17 7.626 17 17 S 54.374 62 45 62 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(94,194,105); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
	<circle cx="45" cy="45" r="9" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(94,194,105); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
</g>
</svg>

            Name:
          </div>
          <div class="value">{{ owner.name }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OwnerCard',
    props: {
      owner: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .owner-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    padding: 1rem;
    margin-bottom: 1rem;
  }
  
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }
  
  .owner-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .owner-row {
    display: flex;
    gap: 10px;

  }
  
  .owner-row:last-child {
    border-bottom: none;
  }
  
  .label {

    font-weight: bold;
    width: 100px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  
  .value {
    flex-grow: 1;
  }
  
  .visibility-icon {
    color: #22c55e; /* Green color */
    margin-right: 6px;
    font-size: 1.1em;
  }

  .handle-value {
    color: #4994EC; 
}
  </style>