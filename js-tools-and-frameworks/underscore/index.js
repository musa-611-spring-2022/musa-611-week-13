let bikeshareData;
fetch('https://kiosks.bicycletransit.workers.dev/phl')
  .then(resp => resp.json())
  .then(data => {
    bikeshareData = data;
  });
