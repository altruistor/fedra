# neviditelna-univerzita

The project was implemented according to the technical specification provided by CZ.NIC z. s. p. o. – Javascript task, specifically:

1. A web page for the fictional organization neviditelna-univerzita.cz was created using the Vue.js framework, version 3.5.13, in compliance with the recommendations from Essential Rules (Priority A), Strongly Recommended (Priority B), and Recommended (Priority C), namely:
   -Multi-word component names,
   -Component data as a function,
   -Prop definitions,
   -v-for with key,
   -Scoped component styles,
   -PascalCase component names,
   -Component name matches filename,
   -Computed property naming,
   -SFC structure order,
   -Spacing in templates

2. According to a technical specification application uses a dedicated service module (`domainService.js`) to handle data retrieval. The implementation:
   -Provides an asynchronous `fetchDomainData` function that retrieves domain information,
   -Fetches data from a local JSON file (`/data/domain-detail.json`) for demonstration purposes,
   -Implements proper error handling for failed requests,
   -Returns structured domain data,
   -Follows the separation of concerns principle by isolating data fetching logic from components
   Components consume this service using async/await pattern, allowing for clean data retrieval and error handling in the UI layer.

3. Comprehensive testing was implemented using Jest, including:
   -Unit tests for UI components (FlagsCard, InfoCard, NavbarUser) to verify rendering behavior and functionality
   -Testing of verbose/non-verbose display modes for conditional UI rendering
   -Service tests with mock data to validate the domain data fetching functionality
   -Error handling tests to ensure robustness of API interactions
   -Proper test isolation using beforeEach/afterAll hooks and mock resetting
   -Console logging for clearer test execution visibility.

4. The web page has two modes - brief and detailed. To switch between these two modes, the Verbose view switch under the domain name is used.

5. After the Show button in the AuthInfo row is clicked, the secret password is displayed in separate window.

6. After the Username in the top right corner of the page is clicked, the user menu is displayed.

7. Web page is reasonably responsive – when two columns don‘t fit side by side, they are displayed on top of each other at breakpoint 1080px.

8. Unfortunately, it was not possible to implement PrimeVue styling as originally intended, because the project was initially built using custom styles without a UI library. During the attempt to integrate PrimeVue, significant challenges arose that could not be resolved within a short timeframe. Therefore, it was decided to complete the project using custom styles instead. This, however, did not have a critical impact on the final result or on the display of content in accordance with the technical specification and the provided PNG files.
