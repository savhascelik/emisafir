import { createStore } from 'vuex'

export default createStore({
  state: {
  loginState:false,
  token_origin:"",
  token_plaintext:"",
  apiUrl:"http://127.0.0.1:8000/api",
  apiLogin:'/login',
  apiRoomSave:"/roomsave",
  apiAllRoom:"/rooms",
  getselectrooms:"/getselectrooms",
  apiAllGuest:"/guests",
  apiWelcomeGuest:"/welcomeguests",
  guests:"/guests",
  guestinfo:"/guestinfo",
  filterprintpdf:"/pdf/filterprintpdf",
  guestfastinfo:"/guestfastinfo",
  apiGuestSave:"/guestsave",
  apiGuestUpdate:"/guestupdate",
  apiGetGuest:"/getguest",
  apiGuestFastSave:"/guestfastsave",
  apiDiseasesSave:"/diseasessave",
  gettoguestinfopdf:"/pdf/gettoguestinfopdf",
  gettoguesteatpdf:"/pdf/gettoguesteatpdf",
  gettofloorsumpdf:"/pdf/gettofloorsumpdf",

  gotoCurrentStatus:"/pdf/gotoCurrentStatus",

  gotoroomguestlist:"/pdf/gotoroomguestlist",
  roomcurrentstatus:"/pdf/roomcurrentstatus",
  searchguest:"/searchguest", 
  filterdata:"/filterdata",
  addlist:"/addlist",
  deleteguestlist:"/deleteguestlist",
  apiAllLists:"/apialllists",
  apiotherlist:"/apiotherlist",
  apicloselist:"/apicloselist",

  apiListAllGuest:"/listallguest",
  closelist:"/closelist", 
  list_info:"/list_info",
  lastest_list:"/lastest_list",
  

apiBagsSave:'/bagssave',
apiSafeBoxSave:'/safeboxsave',
apiBoxSave:"/boxsave",

getallblock:"/getallblock",
saveallblock:"/saveallblock",

getallfloor:"/getallfloor",
saveallfloor:"/saveallfloor",

deleteRoom:'/deleteroom',
bringinginstitutionsave:"/bringinginstitutionsave",


getallcity:"/info/city",
bannerType:"success",
mesaj:"varsayılan mesaj"
  },
  getters: {
  },
  mutations: {
    loginChange(state=state,loginstate)
    {
      state.loginState=loginstate
    },
    token_origin(state,token)
    {
      state.token_origin=token
    },
    token_plaintext(state,token)
    {
      state.token_plaintext=token
    }
  },
  actions: {
  },
  modules: {
  }
})
