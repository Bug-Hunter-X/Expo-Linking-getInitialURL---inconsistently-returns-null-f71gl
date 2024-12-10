```javascript
import * as Linking from 'expo-linking';

async function getInitialURLWithRetry() {
  let url = await Linking.getInitialURL();
  let retryCount = 0;
  const maxRetries = 5;
  while (url === null && retryCount < maxRetries) {
    await new Promise(resolve => setTimeout(resolve, 100)); // Wait 100ms
    url = await Linking.getInitialURL();
    retryCount++;
  }
  return url;
}

export default async function App() {
  // ... other code ...

  const initialUrl = await getInitialURLWithRetry();
  console.log('Initial URL:', initialUrl);
  // Handle initialUrl here

  // ... rest of your app
}
```