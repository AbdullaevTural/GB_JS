module.exports = async function solution({ urls, fetcher, maximumRetryCount, delay }) {
    const result = [];
    const errors = {};
  
    async function requestSequential(urls) {
      for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        let retryCount = 0;
        while (retryCount <= maximumRetryCount) {
          try {
            const response = await fetcher(url);
            if (response) {
              result.push(url);
              break;
            }
          } catch (error) {
            retryCount++;
            if (retryCount > maximumRetryCount) {
              if (!errors[url]) {
                errors[url] = 1;
              } else {
                errors[url]++;
              }
              console.error(`Error occurred while fetching ${url}. Retried ${retryCount} times.`);
            } else {
              console.error(`Error occurred while fetching ${url}. Retrying (${retryCount}/${maximumRetryCount})...`);
            }
          }
          await delayExecution(delay);
        }
      }
    }
  
    async function delayExecution(delay) {
      return new Promise(resolve => setTimeout(resolve, delay));
    }
  
    try {
      await requestSequential(urls);
    } catch (error) {
      console.error("An error occurred during the request sequential process:", error);
    }
  
    return { result, errors };
  };