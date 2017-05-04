const ChartAPI = {
  api: null,

  getApi (){
    let self = this;
    
    return self.api || new Promise((resolve, reject) => {
      google.charts.load("current", { packages:["corechart"] });
      google.charts.setOnLoadCallback(() => {
        self.api = google.visualization;//cache for future requests
        resolve(self.api);
      });
    });
  }
}

export default ChartAPI;