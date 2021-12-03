export default function getFullResponseFromAPI(success) {
  if (success) {
    return Promise.resolve({
      status: 200,
      body: 'Success',
    }).then(() => {
      console.log('Got a response from the API');
    });
  }
  return Promise.reject(new Error('The fake API is not working currently'));
}
