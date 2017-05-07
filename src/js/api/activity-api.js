const ActivityAPI = {

  async xhr( url ){
    const req = await fetch(url , { method: 'get' });
    const res = await req.json();
    console.log('res: ',res)
    return res;
  },

  host: window.location.href.split('/')[2],

  protocol: location.protocol,

  numbersData: [],


  
  getActivityNumbers (){
    let data = this.xhr( 'http://' + this.host + '/data/numbers.json' );
    console.log('getActivityNumbers data: ', data);
    // if(this.numbersData.length === 0){
    //   const req = await fetch('http://' + this.uri + '/data/numbers.json', { method: 'get' });
    //   const res = await req.json();
    //   this.numbersData = res.activity_numbers;
    // }
    //
    // return await this.numbersData;
    return 'Andrew';
  }
}
export default ActivityAPI;