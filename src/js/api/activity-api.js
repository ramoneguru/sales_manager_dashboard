const ActivityAPI = {

  uri: window.location.href.split('/')[2],

  protocol: location.protocol,
  
  async getActivityNumbers (){
    const res = await fetch('http://' + this.uri + '/data/numbers.json', {
      method: 'get'
    });
    return await res.json();
  },

  init: function(){
    console.log('init activity api');
  }
}
ActivityAPI.init();
export default ActivityAPI;