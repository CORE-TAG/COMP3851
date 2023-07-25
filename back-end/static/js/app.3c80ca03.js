(function(){var t={8440:function(){},1006:function(t,e,i){"use strict";var a=i(7754),n=i.n(a),s=i(6369),o=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],l=i(8440),c=i.n(l),d=c(),u=i(1001),p=(0,u.Z)(d,o,r,!1,null,null,null),h=p.exports,m=i(2631),f=function(){var t=this,e=t._self._c;return e("div",[e("el-container",[e("el-header",[e("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal"}},[e("div",{staticStyle:{"margin-top":"5px"}},[e("img",{staticStyle:{width:"50px"},attrs:{src:i(6949),fit:"contain"}}),e("img",{staticStyle:{width:"60px"},attrs:{src:i(8475),fit:"contain"}})]),t._l(t.navText,(function(i,a){return e("el-menu-item",{key:a,attrs:{index:i.id}},[e("a",{staticStyle:{"font-family":"'Helvetica Neue'","font-size":"20px","font-weight":"bolder",width:"100%",height:"100%",display:"flex",color:"black"},on:{click:function(e){return e.preventDefault(),t.anchor(i.name)}}},[t._v(t._s(i.text))])])})),e("el-menu-item",{attrs:{index:"9"}},[e("a",{staticStyle:{"font-family":"'Helvetica Neue'","font-size":"20px","font-weight":"bolder",width:"100%",height:"100%",display:"flex",color:"black"},attrs:{href:"/#/qa"}},[t._v("Q&A")])])],2)],1),e("el-main",[e("Overview",{attrs:{id:"Overview"}}),e("News",{attrs:{id:"News"}}),e("Facilities",{attrs:{id:"Facilities"}}),e("Clubs",{attrs:{id:"Clubs"}}),e("ToSchRoutes",{attrs:{id:"Navigation"}}),e("SchMap",{attrs:{id:"Map"}}),e("RoomRental",{attrs:{id:"RoomRental"}}),e("Journal",{attrs:{id:"Journal"}},[t._v("8")])],1)],1)],1)},g=[],y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"block"},[e("el-carousel",{attrs:{trigger:"click",height:"63em"}},t._l(t.images,(function(t){return e("el-carousel-item",{key:t},[e("img",{attrs:{src:t,"object-fit":"cover",width:"100%",height:"100%"}})])})),1),e("Musk")],1)},v=[],w=function(){var t=this,e=t._self._c;return t.show?e("div",{staticStyle:{"z-index":"1500",position:"fixed",height:"100%",top:"0",left:"0",width:"100%"},attrs:{id:"musk"}},[e("el-row",{staticStyle:{display:"flex","justify-content":"center",height:"100%","background-color":"rgb(255, 128, 0, 0.3)"},attrs:{gutter:20}},[e("el-col",{attrs:{span:10}},[e("div",{staticStyle:{"text-shadow":"2px 2px 4px #000000"}},[e("p",{staticStyle:{"font-size":"35px",color:"white","margin-top":"200px"}},[t._v(" Welcome to PSB University Freshman Portal! ")]),e("hr",{staticClass:"hr-light"}),e("p",{staticStyle:{"font-size":"25px",color:"white"}},[t._v(" Are you a new student at PSB University? Our website is specifically designed to assist newcomers like you in navigating campus life and the surrounding environment. We understand that starting university can be overwhelming, which is why we offer a comprehensive range of services to address any challenges you may encounter. "),e("br"),e("br"),t._v(" Our portal serves as a one-stop solution, providing essential information on campus life, course details, accommodation options, and much more. Let us walk you through the key features of our website: ")])]),e("el-button",{staticStyle:{"background-color":"rgb(0, 0, 0, 0)","font-size":"25px",color:"white","text-shadow":"2px 2px 4px #000000"},attrs:{size:"medium"},on:{click:function(e){return t.close()}}},[t._v(" Get it! ")])],1)],1)],1):t._e()},b=[],S={name:"Musk",data(){return{show:!0}},methods:{close(){this.show=!1}}},x=S,_=(0,u.Z)(x,w,b,!1,null,null,null),k=_.exports,A=i(4161);let P=A.Z.create({baseURL:"http://52.253.114.82:8080/api/",timeout:5e3});P.interceptors.request.use((t=>t)),P.interceptors.response.use((t=>t.data),(t=>{alert(t)}));var I=P,C={name:"Overview",components:{Musk:k},data(){return{images:[]}},mounted(){let t=this;I({method:"get",url:"overviews"}).then((function(e){t.images=e.results}))},methods:{}},T=C,M=(0,u.Z)(T,y,v,!1,null,null,null),O=M.exports,j=function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticStyle:{display:"flex","justify-content":"center"}},[t._v("School News")]),e("el-row",{staticStyle:{padding:"0 20px 0 20px"},attrs:{gutter:20}},t._l(t.news.results,(function(i){return e("el-col",{key:i.id,attrs:{span:8}},[e("div",{staticStyle:{"margin-top":"15px"}},[e("el-card",{attrs:{"body-style":{padding:"0px"},shadow:"hover"}},[e("img",{staticClass:"image",attrs:{src:i.cover}}),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v(t._s(i.title))]),e("br"),e("div",{staticClass:"bottom clearfix"},[e("time",{staticClass:"time"},[t._v(t._s(i.created_time))]),e("el-button",{staticClass:"button",attrs:{type:"text"},on:{click:function(e){return t.showDetail(i.id)}}},[t._v("Detail")])],1)])])],1)])})),1),e("el-pagination",{staticStyle:{display:"flex","justify-content":"center","margin-top":"10px"},attrs:{background:"",layout:"prev, pager, next",total:t.news.count,pageSize:t.limit},on:{"current-change":t.changePage}}),e("DetailCard",{attrs:{show:t.show,idUrl:t.idUrl},on:{close:()=>t.show=!1}})],1)},B=[],L=function(){var t=this,e=t._self._c;return e("div",[e("el-dialog",{attrs:{title:"Detail",width:"70%",visible:t.show},on:{close:function(e){return t.$emit("close")}}},[e("el-row",{staticStyle:{"margin-top":"-20px"},attrs:{gutter:30}},[e("el-col",{attrs:{span:12}},[e("img",{staticClass:"image",attrs:{src:t.detail.cover}})]),e("el-col",{staticStyle:{"margin-top":"-15px"},attrs:{span:12}},[e("h1",[t._v(t._s(t.detail.title))]),e("time",{staticClass:"time"},[t._v(t._s(t.detail.created_time))]),e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.detail.content)}})])],1)],1)],1)},R=[],z={name:"DetailCard",props:{show:{type:Boolean,default:!1},idUrl:{type:String,default:""}},data(){return{detail:{}}},watch:{idUrl(){let t=this;I({method:"get",url:t.idUrl}).then((function(e){t.detail=e}))}},methods:{}},D=z,H=(0,u.Z)(D,L,R,!1,null,"2ed72468",null),U=H.exports,N={name:"News",components:{DetailCard:U},data(){return{news:{},limit:6,show:!1,idUrl:""}},mounted(){let t=this;I({method:"get",url:"news",params:{limit:t.limit}}).then((function(e){t.news=e}))},methods:{changePage(t){let e=this;I({method:"get",url:"news",params:{limit:e.limit,offset:(t-1)*e.limit}}).then((function(t){e.news=t}))},showDetail(t){this.show=!0,this.idUrl="news/"+t}}},W=N,Z=(0,u.Z)(W,j,B,!1,null,"fd33d5ca",null),F=Z.exports,q=function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticStyle:{display:"flex","justify-content":"center"}},[t._v("Facilities")]),e("el-row",{staticStyle:{padding:"0 20px 0 20px",height:"45em"},attrs:{gutter:20}},[e("el-col",{staticStyle:{"margin-top":"-15px"},attrs:{span:10}},[e("h1",[t._v(t._s(t.facility.title))]),e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.facility.content)}})]),e("el-col",{attrs:{span:14}},[e("img",{staticClass:"image",attrs:{src:t.facility.cover}})])],1),e("el-pagination",{staticStyle:{display:"flex","justify-content":"center","margin-top":"10px"},attrs:{background:"",layout:"prev, pager, next",total:t.total,pageSize:1},on:{"current-change":t.changePage}})],1)},E=[],Q={name:"Facilities",data(){return{facilities:[],facility:{},total:0}},mounted(){let t=this;I({method:"get",url:"facilities",params:{limit:999999}}).then((function(e){t.total=e.count,t.facilities=e.results,I({method:"get",url:"facilities/"+t.facilities[0].id}).then((function(e){t.facility=e}))}))},methods:{changePage(t){let e=this;I({method:"get",url:"facilities/"+e.facilities[t-1].id}).then((function(t){e.facility=t}))}}},J=Q,G=(0,u.Z)(J,q,E,!1,null,"d13075a2",null),Y=G.exports,K=function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticStyle:{display:"flex","justify-content":"center"}},[t._v("Clubs")]),e("el-row",{staticStyle:{padding:"0 20px 0 20px",height:"45em"},attrs:{gutter:20}},[e("el-col",{attrs:{span:14}},[e("img",{staticClass:"image",attrs:{src:t.club.cover}})]),e("el-col",{staticStyle:{"margin-top":"-15px"},attrs:{span:10}},[e("h1",[t._v(t._s(t.club.title))]),e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.club.content)}})])],1),e("el-pagination",{staticStyle:{display:"flex","justify-content":"center","margin-top":"10px"},attrs:{background:"",layout:"prev, pager, next",total:t.total,pageSize:1},on:{"current-change":t.changePage}})],1)},$=[],V={name:"Clubs",data(){return{clubs:[],club:{},total:0}},mounted(){let t=this;I({method:"get",url:"clubs",params:{limit:999999}}).then((function(e){t.total=e.count,t.clubs=e.results,I({method:"get",url:"clubs/"+t.clubs[0].id}).then((function(e){t.club=e}))}))},methods:{changePage(t){let e=this;I({method:"get",url:"clubs/"+e.clubs[t-1].id}).then((function(t){e.club=t}))}}},X=V,tt=(0,u.Z)(X,K,$,!1,null,"1ef8fd60",null),et=tt.exports,it=function(){var t=this,e=t._self._c;return e("div",{staticClass:"body"},[e("h1",[t._v("Nearby Facilities Map")]),e("el-row",{staticStyle:{width:"100%"},attrs:{gutter:20}},[e("el-col",{attrs:{span:12}},[e("el-select",{attrs:{id:"facility-type",placeholder:"Please select facility type"},model:{value:t.facilityType,callback:function(e){t.facilityType=e},expression:"facilityType"}},[e("el-option",{attrs:{value:"bank",label:"Banks"}},[t._v("Banks")]),e("el-option",{attrs:{value:"restaurant",label:"Restaurants"}},[t._v("Restaurants")]),e("el-option",{attrs:{value:"library",label:"Library"}},[t._v("Library")]),e("el-option",{attrs:{value:"museum",label:"Museum"}},[t._v("Museum")])],1),e("el-button",{staticStyle:{"margin-left":"10px"},attrs:{id:"searchBtn"},on:{click:t.searchFacilities}},[t._v("Search")]),e("div",{attrs:{id:"map"}})],1),e("el-col",{attrs:{span:12}},[e("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.load,expression:"load"}],staticClass:"infinite-list box"},[e("div",{attrs:{id:"info-box"}})])])],1)],1)},at=[],nt=(i(7658),i(1528));const st=new nt.aN({apiKey:"AIzaSyAc9G53kJLRz8mfgo2Dr1tameT3Tc0h2jc",version:"weekly",libraries:["places"],language:"en"});var ot={name:"SchMap",data(){return{PSBAcademy:{lat:1.290381779233532,lng:103.85878109719954},ICA:{lat:1.3068028327182046,lng:103.86276887080366},map:"",markers:[],google:"",facilityType:""}},mounted(){this.initMap(),this.searchFacilities()},methods:{initMap(){const t={zoom:14,center:this.PSBAcademy};st.load().then((e=>{this.google=e,this.map=new e.maps.Map(document.getElementById("map"),t),this.google.maps.event.addListener(this.map,"click",this.clickMap)})).catch((t=>{console.log(t)}));const e=this.createMarker(this.PSBAcademy,"PSBAcademy",this.getPSBContentString()),i=this.createMarker(this.ICA,"Immigration & Checkpoints Authority",this.getICAContentString());e.addListener("click",(()=>{const t=new this.google.maps.InfoWindow({content:this.getPSBContentString()});t.open(this.map,e)})),i.addListener("click",(()=>{const t=new this.google.maps.InfoWindow({content:this.getICAContentString()});t.open(this.map,i)}))},createMarker(t,e){const i=new this.google.maps.Marker({position:t,map:this.map,title:e});return this.markers.push(i),i},searchFacilities(){const t={location:this.PSBAcademy,radius:1e3,types:[this.facilityType]},e=new this.google.maps.places.PlacesService(this.map);e.nearbySearch(t,this.callback)},callback(t,e){if(e===this.google.maps.places.PlacesServiceStatus.OK){const e=document.getElementById("info-box");e.innerHTML="";for(let i=0;i<t.length;i++){const a=t[i],n=a.name,s=a.vicinity,o={placeId:a.place_id,fields:["formatted_address","formatted_phone_number","opening_hours","website","photos","rating"]},r=new this.google.maps.places.PlacesService(this.map);r.getDetails(o,((t,i)=>{i===this.google.maps.places.PlacesServiceStatus.OK&&(e.innerHTML+="<strong>"+n+"</strong><br>"+s+"<br>",t.formatted_address&&(e.innerHTML+="Address: "+t.formatted_address+"<br>"),t.formatted_phone_number&&(e.innerHTML+="Phone: "+t.formatted_phone_number+"<br>"),t.opening_hours&&(e.innerHTML+="Opening Hours: "+t.opening_hours.weekday_text.join("<br>")+"<br>"),t.website&&(e.innerHTML+='Website: <a href="'+t.website+'">'+t.website+"</a><br>"),t.photos&&t.photos.length>0&&(e.innerHTML+='<img src="'+t.photos[0].getUrl({maxWidth:200,maxHeight:200})+'"><br>'),t.rating&&(e.innerHTML+="Rating: "+t.rating+"<br>"),e.innerHTML+="<br>")}))}}},getPSBContentString(){return'<div id="content">\n                <div id="siteNotice"></div>\n                <h1 id="firstHeading" class="firstHeading">PSBAcademy</h1>\n                <div id="bodyContent">\n                  <p><b>CITY CAMPUS AND STEM WING IN MARINA SQUARE</b></p>\n                  <p><strong>Website:</strong> <a href="https://www.psb-academy.edu.sg/">https://www.psb-academy.edu.sg/</a></p>\n                  <p>Vibrant environment, the convenience of travel, easy access to a myriad of recreational spaces.\n                  Enjoy them all simply by studying at PSB Academy City Campus which encompasses the Main and STEM Wing!!\n                  As one of the few schools in Singapore with campuses built in the heart of the city,\n                  there is much that PSB Academy has to offer.</p>\n                </div>\n              </div>'},getICAContentString(){return'<div id="content">\n                <div id="siteNotice"></div>\n                <h1 id="firstHeading" class="firstHeading">Immigration & Checkpoints Authority</h1>\n                <div id="bodyContent">\n                  <p><b>10 Kallang Rd, Singapore 208718</b></p>\n                  <p><strong>Website:</strong> <a href="https://www.ica.gov.sg/">https://www.ica.gov.sg/</a></p>\n                  <p><b>APPLYING FOR A STUDENT PASS AT ICA</b></p>\n                  <p>Welcome to the Immigration & Checkpoints Authority (ICA), the place to apply for a Student Pass in Singapore!\n                  If you\'re a new student planning to study in Singapore, we\'re here to guide you through the process.</p>\n                  <p><b>Step 1: Secure admission to an approved educational institution</b></p>\n                  <p>Before applying for a Student Pass, you need to gain acceptance into a Singaporean educational institution\n                  that is recognized by the Ministry of Education or the Council for Private Education.</p>\n                  <p><b>Step 2: Receive the offer letter or In-Principle Approval (IPA)</b></p>\n                  <p>Once you\'ve been accepted by an educational institution, they will issue you an offer letter or an In-Principle Approval (IPA) letter.\n                  This letter is a requirement for your Student Pass application.</p>\n                  <p><b>Step 3: Submit your application</b></p>\n                  <p>Visit the ICA website and access the e-Service for Student\'s Pass Online Application & Registration (SOLAR). Fill in the required information, including personal details, educational institution details, and other necessary documents. Ensure that you have all the required documents, such as passport details, a recent passport-sized photograph, the offer letter or IPA letter, and any other documents specified by the ICA.</p>\n                  <p><b>Step 4: Pay the necessary fees</b></p>\n                  <p>As part of the application process, you will need to pay the required fees. The current fee for a Student Pass application is typically SGD 30, with an additional SGD 60 for issuance.</p>\n                  <p><b>Step 5: Complete the medical examination (if required)</b></p>\n                  <p>Depending on your nationality and the length of your course, you may need to undergo a medical examination at a recognized clinic or hospital. The ICA will provide instructions regarding this if applicable.</p>\n                  <p><b>Step 6: Wait for the outcome</b></p>\n                  <p>After submitting your application, you\'ll need to wait for the ICA to process it. The processing time can vary, but it typically takes a few weeks. You can track the status of your application using the SOLAR system.</p>\n                  <p><b>Step 7: Collect your Student Pass</b></p>\n                  <p>If your application is approved, you will receive an In-Principle Approval (IPA) letter. You\'ll need to visit the ICA in person to complete the formalities and collect your Student Pass. Make sure to bring your passport and other necessary documents as specified in the IPA letter.</p>\n                  <p>Remember that the above steps are a general guideline, and there may be additional requirements or specific procedures based on your individual circumstances. It\'s always recommended to refer to the ICA website or contact the ICA directly for the most up-to-date and accurate information regarding Student Pass applications in Singapore.</p>\n                </div>\n              </div>'}}},rt=ot,lt=(0,u.Z)(rt,it,at,!1,null,"584d8f70",null),ct=lt.exports,dt=function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticStyle:{display:"flex","justify-content":"center"}},[t._v("Room Rental")]),e("el-row",{staticStyle:{padding:"0 20px 0 20px"},attrs:{gutter:20}},t._l(t.rooms.results,(function(i){return e("el-col",{key:i.id,attrs:{span:6}},[e("div",{staticStyle:{"margin-top":"15px"}},[e("el-card",{attrs:{"body-style":{padding:"0px"},shadow:"hover"}},[e("img",{staticClass:"image",attrs:{src:i.image}}),e("div",{staticStyle:{padding:"14px"}},[e("span",{staticStyle:{"font-size":"20px","font-weight":"bolder"}},[t._v(t._s(i.name))]),e("br"),e("span",{staticStyle:{"font-size":"17px"}},[t._v("📍"+t._s(i.location))]),e("br"),e("a",{staticStyle:{"font-size":"17px"},attrs:{href:i.email}},[t._v("📧"+t._s(i.email))]),e("div",{staticClass:"bottom"},[e("el-rate",{attrs:{value:i.score,disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"}}),e("span",{staticStyle:{"font-size":"17px","font-weight":"bold"}},[t._v("$"+t._s(i.price)+"/month")])],1)])])],1)])})),1),e("el-pagination",{staticStyle:{display:"flex","justify-content":"center","margin-top":"10px"},attrs:{background:"",layout:"prev, pager, next",total:t.rooms.count,pageSize:t.limit},on:{"current-change":t.changePage}})],1)},ut=[],pt={name:"RoomRental",data(){return{rooms:{},limit:8,show:!1,idUrl:""}},mounted(){let t=this;I({method:"get",url:"rooms",params:{limit:t.limit}}).then((function(e){t.rooms=e}))},methods:{changePage(t){let e=this;I({method:"get",url:"rooms",params:{limit:e.limit,offset:(t-1)*e.limit}}).then((function(t){e.rooms=t}))}}},ht=pt,mt=(0,u.Z)(ht,dt,ut,!1,null,"f4e0a9d4",null),ft=mt.exports,gt=function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticStyle:{display:"flex","justify-content":"center"}},[t._v("Journal")]),e("el-row",[e("el-card",{staticClass:"card"},[e("p",[t._v("Dear new PSB students,")]),e("p",[t._v(" Welcome to our big family! I am your senior and the writer of this letter. I hope this letter can answer some of the questions you may have when you first arrive in a new environment and help you integrate into our campus faster and better. ")]),e("p",[t._v(" First of all, I would like to recommend Pizza Hut on the third floor of the school. I personally love the pizza and grilled chicken wings there, they taste really good. As PSB students, we also have a special offer - just show your student ID and get a 20% discount. I'm always full of energy and feel like my whole body is rejuvenated after every Pizza Hut meal. This is a little secret that you can't miss. ")]),e("p",[t._v(" And then I want to say something about immigration. If you are an international student, I would recommend that you go to ICA as early as possible to take care of the paperwork. It's very popular there and if you go late, you might need to wait in a long line. I don't think anyone likes to waste time on queuing, right? So make sure you get up early and go ahead of others to process it. ")]),e("p",[t._v(" The next thing I would like to remind you is that you may need to use your bank card to pay before you get your student card. I suggest you get a DBS card. All they need is your IPA to process it, which is very convenient. Also, when you apply for a bank card, remember to email your school for proof of address documents. ")]),e("p",[t._v(" Lastly, I would like to tell you a good news. The food court on the third floor of the school has great discounts. You can find a wide variety of food there at affordable prices, and it's definitely good value for money. ")]),e("p",[t._v(" I hope this letter will help you have a good start when you first arrive on campus. Of course, if you have any questions about your life or studies, feel free to ask us seniors for help. We will be happy to help you answer your questions and spend this wonderful university time together. ")]),e("p",[t._v(" We wish you all the best in your life at PSB University and look forward to meeting you on campus! ")]),e("p",[t._v("Blessings to you.")]),e("p",[t._v("Your seniors")])])],1),e("el-row",{staticStyle:{display:"flex","justify-content":"center","margin-top":"20px"}},[e("video",{staticStyle:{width:"80%",height:"700px"},attrs:{src:i(8752),controls:""}})]),e("el-row",{staticStyle:{display:"flex","justify-content":"center","margin-top":"20px","margin-bottom":"20px"},attrs:{gutter:30}},[e("el-col",{attrs:{span:6}},[e("el-card",{staticStyle:{height:"250px"}},[e("p",[t._v("Testimonial from John Li:")]),e("p",[t._v(' "PSB Academy provided a transformative learning experience. The real-world curriculum and globally-recognized partnerships prepared me for my future. The professors are knowledgeable and helpful, making PSB an ideal place to study." ')])])],1),e("el-col",{attrs:{span:6}},[e("el-card",{staticStyle:{height:"250px"}},[e("p",[t._v("Testimonial from Mei Wong:")]),e("p",[t._v(' "Studying at PSB Academy was enriching. The multicultural environment fostered an international mindset, and the practical focus of the curriculum made learning engaging and relevant. I gained invaluable industry exposure." ')])])],1),e("el-col",{attrs:{span:6}},[e("el-card",{staticStyle:{height:"250px"}},[e("p",[t._v("Testimonial from Ananya Patel:")]),e("p",[t._v(' "PSB Academy offers a rigorous academic program with strong student support. The passionate professors nurtured my critical thinking skills. Studying in a cosmopolitan city like Singapore broadened my horizons and enriched my life experiences." ')])])],1)],1)],1)},yt=[],vt={name:"Journal"},wt=vt,bt=(0,u.Z)(wt,gt,yt,!1,null,"0f3c4dc8",null),St=bt.exports,xt=function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticStyle:{display:"flex","justify-content":"center"}},[t._v("Navigation")]),e("h2",[t._v("Elevators")]),e("el-row",{staticStyle:{padding:"0 20px 0 20px"},attrs:{gutter:20}},t._l(t.elevators,(function(i){return e("el-col",{key:i.id,attrs:{span:8}},[e("div",{staticStyle:{"margin-top":"15px"}},[e("el-card",{attrs:{"body-style":{padding:"0px"},shadow:"hover"},nativeOn:{click:function(e){return t.showDetail0(i.id)}}},[e("img",{staticClass:"image",attrs:{src:i.image}}),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v(t._s(i.brief))])])])],1)])})),1),e("h2",[t._v("Circle Line")]),e("el-row",{staticStyle:{padding:"0 20px 0 20px"},attrs:{gutter:20}},t._l(t.circleLines,(function(i){return e("el-col",{key:i.id,attrs:{span:8}},[e("div",{staticStyle:{"margin-top":"15px"}},[e("el-card",{attrs:{"body-style":{padding:"0px"},shadow:"hover"},nativeOn:{click:function(e){return t.showDetail1(i.id)}}},[e("img",{staticClass:"image",attrs:{src:i.image}}),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v(t._s(i.brief))])])])],1)])})),1),e("h2",[t._v("Dowtown Line")]),e("el-row",{staticStyle:{padding:"0 20px 0 20px"},attrs:{gutter:20}},t._l(t.downtownLines,(function(i){return e("el-col",{key:i.id,attrs:{span:8}},[e("div",{staticStyle:{"margin-top":"15px"}},[e("el-card",{attrs:{"body-style":{padding:"0px"},shadow:"hover"},nativeOn:{click:function(e){return t.showDetail2(i.id)}}},[e("img",{staticClass:"image",attrs:{src:i.image}}),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v(t._s(i.brief))])])])],1)])})),1),e("h2",[t._v("Bus")]),e("el-row",{staticStyle:{padding:"0 20px 0 20px"},attrs:{gutter:20}},t._l(t.buss,(function(i){return e("el-col",{key:i.id,attrs:{span:8}},[e("div",{staticStyle:{"margin-top":"15px"}},[e("el-card",{attrs:{"body-style":{padding:"0px"},shadow:"hover"},nativeOn:{click:function(e){return t.showDetail3(i.id)}}},[e("img",{staticClass:"image",attrs:{src:i.image}}),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v(t._s(i.brief))])])])],1)])})),1),e("RoutesDetail",{attrs:{show:t.show,idUrl:t.idUrl},on:{close:()=>t.show=!1}})],1)},_t=[],kt=function(){var t=this,e=t._self._c;return e("div",[e("el-dialog",{attrs:{title:"Detail",width:"70%",visible:t.show},on:{close:function(e){return t.$emit("close")}}},[e("el-row",{staticStyle:{"margin-top":"-20px"},attrs:{gutter:30}},[e("el-col",{attrs:{span:12}},[e("img",{staticClass:"image",attrs:{src:t.detail.image}})]),e("el-col",{staticStyle:{"margin-top":"-15px"},attrs:{span:12}},[e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.detail.detail)}}),e("time",{staticClass:"time"},[t._v(t._s(t.detail.created_time))])])],1)],1)],1)},At=[],Pt={name:"RoutesDetail",props:{show:{type:Boolean,default:!1},idUrl:{type:String,default:""}},data(){return{detail:{}}},watch:{idUrl(){let t=this;I({method:"get",url:t.idUrl}).then((function(e){t.detail=e}))}},methods:{}},It=Pt,Ct=(0,u.Z)(It,kt,At,!1,null,"9a2396d2",null),Tt=Ct.exports,Mt={name:"ToSchRoutes",components:{RoutesDetail:Tt},data(){return{elevators:[],circleLines:[],downtownLines:[],buss:[],show:!1,idUrl:""}},mounted(){let t=this;I({method:"get",url:"elevator"}).then((function(e){t.elevators=e.results})),I({method:"get",url:"circle-line"}).then((function(e){t.circleLines=e.results})),I({method:"get",url:"downtown-line"}).then((function(e){t.downtownLines=e.results})),I({method:"get",url:"bus"}).then((function(e){t.buss=e.results}))},methods:{showDetail0(t){this.show=!0,this.idUrl="elevator/"+t},showDetail1(t){this.show=!0,this.idUrl="circle-line/"+t},showDetail2(t){this.show=!0,this.idUrl="downtown-line/"+t},showDetail3(t){this.show=!0,this.idUrl="bus/"+t}}},Ot=Mt,jt=(0,u.Z)(Ot,xt,_t,!1,null,"73f2369a",null),Bt=jt.exports,Lt={name:"Layout",components:{Overview:O,News:F,Facilities:Y,Clubs:et,SchMap:ct,RoomRental:ft,Journal:St,ToSchRoutes:Bt},data(){return{navText:[{id:1,name:"Overview",text:"Overview"},{id:2,name:"News",text:"News"},{id:3,name:"Facilities",text:"Facilities"},{id:4,name:"Clubs",text:"Clubs"},{id:5,name:"Navigation",text:"Navigation"},{id:6,name:"Map",text:"Map"},{id:7,name:"RoomRental",text:"Room Rental"},{id:8,name:"Journal",text:"Journal"}]}},methods:{anchor(t){let e=document.getElementById(t);e&&e.scrollIntoView()}}},Rt=Lt,zt=(0,u.Z)(Rt,f,g,!1,null,"058bccfc",null),Dt=zt.exports,Ht=function(){var t=this,e=t._self._c;return e("div",[e("el-button",{staticStyle:{margin:"10px"},attrs:{type:"primary",icon:"el-icon-arrow-left",round:""},on:{click:t.back}},[t._v("返回")]),e("el-row",{staticStyle:{display:"flex","justify-content":"center",margin:"0 20vh 0 20vh"}},[e("el-card",{staticStyle:{width:"100%"}},[e("p",[t._v("Q: What is the primary purpose of this website?")]),e("p",[t._v(" A: The primary purpose of this website is to assist new students in familiarizing themselves with PSB Academy in Singapore, its facilities, student societies, academic, and social resources. It aims to provide all necessary information to ease the transition and integrate new students into campus life. ")])])],1),e("el-row",{staticStyle:{display:"flex","justify-content":"center",margin:"20px 20vh 0 20vh"}},[e("el-card",{staticStyle:{width:"100%"}},[e("p",[t._v(" Q: I'm a new student. How can I find out more about the different facilities at the school? ")]),e("p",[t._v(" A: Our website features a dedicated section for school facilities. Here, you can find detailed information about various facilities, including their location, open hours, and any relevant policies. ")])])],1),e("el-row",{staticStyle:{display:"flex","justify-content":"center",margin:"20px 20vh 0 20vh"}},[e("el-card",{staticStyle:{width:"100%"}},[e("p",[t._v(" Q: I'm interested in joining student clubs and societies. Where can I find more information? ")]),e("p",[t._v(" A: We have a 'Student Societies' page that provides an overview of all student-led clubs and societies. Each listing provides a brief description of the society, its mission, and information on how to join or who to contact for more information. ")])])],1),e("el-row",{staticStyle:{display:"flex","justify-content":"center",margin:"20px 20vh 0 20vh"}},[e("el-card",{staticStyle:{width:"100%"}},[e("p",[t._v("Q: How can I access the campus map?")]),e("p",[t._v(" A: You can access the campus map through the 'Interest Map' section of our website. This map is equipped with a Google API feature that shows the exact geographical location of different campus facilities and landmarks. ")])])],1),e("el-row",{staticStyle:{display:"flex","justify-content":"center",margin:"20px 20vh 0 20vh"}},[e("el-card",{staticStyle:{width:"100%"}},[e("p",[t._v(" Q: I'm having trouble finding my way to school. Is there any guidance on the best routes? ")]),e("p",[t._v(" A: Yes, we have a 'New Student Guide' section that includes pictures and texts explaining the best routes to reach the school from different parts of the city. ")])])],1),e("el-row",{staticStyle:{display:"flex","justify-content":"center",margin:"20px 20vh 20px 20vh"}},[e("el-card",{staticStyle:{width:"100%"}},[e("p",[t._v(" Q: I'm looking for affordable and delicious food options near the school. Where can I find this information? ")]),e("p",[t._v(" A: Our website's 'Interest Map' section also includes information about local amenities, including the best, most affordable food options around the campus. ")])])],1)],1)},Ut=[],Nt={name:"QAadA",methods:{back(){this.$router.go(-1)}}},Wt=Nt,Zt=(0,u.Z)(Wt,Ht,Ut,!1,null,null,null),Ft=Zt.exports;s["default"].use(m.Z);const qt=new m.Z({routes:[{path:"/",name:"layout",component:Dt},{path:"/qa",name:"Q&A",component:Ft}]});var Et=qt;s["default"].use(n(),{size:"small",zIndex:3e3}),s["default"].use(n()),s["default"].prototype.axios=A.Z,new s["default"]({el:"#app",router:Et,render:t=>t(h)}),s["default"].config.productionTip=!1},8752:function(t,e,i){"use strict";t.exports=i.p+"static/media/exp.424e2679.mp4"},6949:function(t,e,i){"use strict";t.exports=i.p+"static/img/logo.07463416.png"},8475:function(t,e,i){"use strict";t.exports=i.p+"static/img/psb.b2f2fa74.png"}},e={};function i(a){var n=e[a];if(void 0!==n)return n.exports;var s=e[a]={exports:{}};return t[a].call(s.exports,s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,a,n,s){if(!a){var o=1/0;for(d=0;d<t.length;d++){a=t[d][0],n=t[d][1],s=t[d][2];for(var r=!0,l=0;l<a.length;l++)(!1&s||o>=s)&&Object.keys(i.O).every((function(t){return i.O[t](a[l])}))?a.splice(l--,1):(r=!1,s<o&&(o=s));if(r){t.splice(d--,1);var c=n();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[a,n,s]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.p="/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,s,o=a[0],r=a[1],l=a[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(n in r)i.o(r,n)&&(i.m[n]=r[n]);if(l)var d=l(i)}for(e&&e(a);c<o.length;c++)s=o[c],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(d)},a=self["webpackChunkPSB_Student_Hub"]=self["webpackChunkPSB_Student_Hub"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(1006)}));a=i.O(a)})();
//# sourceMappingURL=app.3c80ca03.js.map