const medalWidgetService = {
  getMedalsData: async function () {
    try {
      const resp = await fetch(`../constant/medals.json`);
      const jsonResponse = resp.json();

      return jsonResponse;
    } catch (error) {
      console.log(error);
    }
  },
  getMedalImg: async function (countryCode) {
    try {
      const resp = await fetch(`https://flagcdn.com/16x12/${countryCode}.png`);
      const blobResp = await resp.blob();
      const formattedBlob = URL.createObjectURL(blobResp);
      return formattedBlob;
    } catch (error) {
      console.log(error);
    }
  },
};

export default medalWidgetService;
