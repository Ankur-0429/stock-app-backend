const fetchPrices = (symbol: string) => {
    fetch("/api/yahoo?" + new URLSearchParams({ symbol }))
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

fetchPrices('APPL')

export default fetchPrices
