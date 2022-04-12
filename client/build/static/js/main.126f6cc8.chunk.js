(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{115:function(e,t,a){e.exports=a(136)},121:function(e,t,a){},131:function(e,t,a){var n={"./placeholder.jpg":15};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=131},136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(43),o=a.n(l),i=(a(120),a(121),a(11)),c=a(36),s=a(62),d=a(17),m=a(110),u=a(112),h=a(157),p=a(152),g=a(109),y=a(15),E=a.n(y),b=a(147);var f=function(){return r.a.createElement(b.a,{className:"text-center mt-5",fluid:!0},r.a.createElement("h1",null,"Rocks and Ropes"),r.a.createElement("img",{src:E.a,style:{width:"50%"},alt:"Main gym"}),r.a.createElement("p",{className:"text-justify mt-5"},"Welcome to Rocks and Ropes, a climbing and fitness facility. If you\u2019re familiar with climbing, go ahead and peruse the website for information about training, or even better, signup to be able to create your own personalized weekly workout with the equipment we have available.  The QR codes around the gym will link you to descriptions of exercises and equipment. If you\u2019re new to climbing, this facility may seem a bit overwhelming at first, but don\u2019t worry, the QR codes throughout the gym will guide you through the gym and hopefully explain what is going on here! Rocks and Ropes is Tucson\u2019s oldest climbing facility and was established in 1970. Climbing is a very physical and mental sport. It is a great way to get fit, meet new people and explore new and exciting places. Gyms were originally built to facilitate training for climbers so they could be stronger when climbing outdoors, where climbing first began. However, over the years indoor climbing has taken a life of its own and many people enjoy solely climbing indoors. It has also found its way to the Olympics. Enjoy you\u2019re time here and we hope to see you again!"))},v=a(148),w=a(103),k=a(104),x=a(27),A=a(28),j=a(90),N=a.n(j),O=new(function(){function e(){Object(x.a)(this,e)}return Object(A.a)(e,[{key:"getProfile",value:function(){return N()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return N()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}());var C=function(e){var t=e.setShowModal,a=e.setActivity,n=e.setlink;function l(e,r){t(!0),a(e),n("/upstairs#".concat(r))}return r.a.createElement(b.a,null,r.a.createElement(v.a,{id:"tension",className:"mt-5"},r.a.createElement(w.a,{sm:4},r.a.createElement("img",{className:"justify-content-center",src:E.a,style:{borderRadius:"5px",height:"200px",width:"200px"},alt:"placeholder"})),r.a.createElement(w.a,{sm:8},r.a.createElement("h3",null,"Tension Board"),r.a.createElement("p",null,"The tension board is a training board designed to train power and body tension. To operate the board, download the tension app from your phone\u2019s app store. When connecting your app, this board is 12X8 with full set of holds and LED lights.  Name your board whatever you\u2019d like. Make sure your Bluetooth is on and connect. Once connected you can choose from hundreds of tension board bolder problems graded on a ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Grade_(bouldering)"},"V Scale"),". When you cast the boulder problem, LED lights show the hands and feet. Green=starting hands, purple=foot hold only, red=ending hold.  The tension board is also symmetrical to allow for balanced strengthening."),O.loggedIn()&&r.a.createElement(k.a,{variant:"secondary",onClick:function(){return l("Tension Board","tension")}},"Add to Calendar"))),r.a.createElement(v.a,{id:"spray",className:"mt-5"},r.a.createElement(w.a,{sm:{span:4,order:"last"}},r.a.createElement("img",{className:"justify-content-center",src:E.a,style:{borderRadius:"5px",height:"200px",width:"200px"},alt:"placeholder"})),r.a.createElement(w.a,{sm:8},r.a.createElement("h3",null,"Spray Wall"),r.a.createElement("p",null,"The spray wall, also known as a circuit board, is here to help train endurance, particularly power endurance. The wall contains an assortment of holds of various types. Feel free to choose your own path, or circuit, with the holds, or follow the numbered tags on the hold. Each colored number sequence corresponds to a different grade starting at 5.10 to 5.13 on the ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Yosemite_Decimal_System"},"Yosemite Decimal System"),". The numbered holds are hand holds and feet are whatever hold works for you."),O.loggedIn()&&r.a.createElement(k.a,{onClick:function(){return l("Spray Wall","spray")},variant:"secondary"},"Add to Calendar"))),r.a.createElement(v.a,{id:"hangboards",className:"mt-5"},r.a.createElement(w.a,{sm:4},r.a.createElement("img",{className:"justify-content-center",src:E.a,style:{borderRadius:"5px",height:"200px",width:"200px"},alt:"placeholder"})),r.a.createElement(w.a,{sm:8},r.a.createElement("h3",null,"Hangboards"),r.a.createElement("p",null,"These devices are for finger training and strengthening. As their name implies, you simply hang on these boards with anything from both hands to mere fingertips of two fingers. The smaller the hold or the more the weight, the more advanced the exercise.  Depending on the exercise, you can target tendon or ligament (finger pulley) strength.  More reps (seconds hanging) with less rest time will train ligaments, and long hangs on smaller holds or with more weight added to your body with more rest , will train tendons. Here are some typical hangboard workouts. Repeaters: 7sec hang, 3 sec rest, ten times. Max hangs: 10 sec hang (usually trying to add weight or decrease hold size) with two to three minute rest between. Try for three sets of three different hold types(crimps, slopers, pinches, open hand)"),O.loggedIn()&&r.a.createElement(k.a,{onClick:function(){return l("Hangboards","hangboards")},variant:"secondary"},"Add to Calendar"))),r.a.createElement(v.a,{id:"campus",className:"mt-5"},r.a.createElement(w.a,{sm:{span:4,order:"last"}},r.a.createElement("img",{className:"justify-content-center",src:E.a,style:{borderRadius:"5px",height:"200px",width:"200px"},alt:"placeholder"})),r.a.createElement(w.a,{sm:8},r.a.createElement("h3",null,"Campus Board"),r.a.createElement("p",null,"The campus board is a very advanced training exercise that would not typically be recommended for new climbers as it can lead to injury. Campusing is the act of moving from one hold to another without any feet on the wall. However, this board can be used to progress to this and develop the pure strength and power required to do so."),O.loggedIn()&&r.a.createElement(k.a,{onClick:function(){return l("Campus Board","campus")},variant:"secondary"},"Add to Calendar"))))};var I=function(){return r.a.createElement(b.a,{fluid:!0,className:"mx-auto text-center mt-5"},r.a.createElement("h1",{className:"mx-auto",style:{width:"600px"}},"Free Weights"),r.a.createElement(v.a,{className:"mt-5"},r.a.createElement(w.a,null,r.a.createElement(s.b,{to:"/weights/free",style:{textDecoration:"none"}},r.a.createElement("h3",{className:"weight-link text-red"},"Free Weights"),r.a.createElement("img",{src:E.a,style:{borderRadius:"5px",width:"20rem"},alt:"placeholder"}))),r.a.createElement(w.a,null,r.a.createElement(s.b,{to:"/weights/rings",style:{textDecoration:"none"}},r.a.createElement("h3",{className:"weight-link text-red"},"Rings"),r.a.createElement("img",{src:E.a,style:{borderRadius:"5px",width:"20rem"},alt:"placeholder"})))),r.a.createElement(v.a,{className:"mt-5"},r.a.createElement(w.a,null,r.a.createElement(s.b,{to:"/weights/trx",style:{textDecoration:"none"}},r.a.createElement("h3",{className:"weight-link text-red"},"TRX Bands"),r.a.createElement("img",{src:E.a,style:{borderRadius:"5px",height:"300px",width:"20rem"},alt:"placeholder"})))))},S=a(159),R=a(158);var T=function(e){return r.a.createElement(S.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(b.a,{fluid:!0},r.a.createElement(S.a.Brand,null,"Tour of Rocks and Ropes"),r.a.createElement(S.a.Toggle,{"aria-controls":"navbar"}),r.a.createElement(S.a.Collapse,{id:"navbar"},r.a.createElement(R.a,{className:"ml-auto"},r.a.createElement(R.a.Link,{href:"/"},"Home"),r.a.createElement(R.a.Link,{href:"/upstairs"},"Upstairs"),r.a.createElement(R.a.Link,{href:"/weights"},"Weights"),O.loggedIn()?r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a.Link,{href:"/week"},"See Your Exercises"),r.a.createElement(R.a.Link,{onClick:O.logout},"Logout")):r.a.createElement(R.a.Link,{href:"login"},"Login/Sign Up")))))},M=a(153);var D,F,B,P,_,L,W=function(){var e=new Date,t=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],a=e.getMonth(),l=Object(n.useState)(t),o=Object(i.a)(l,2),c=o[0],s=o[1],d=Object(n.useState)([]),m=Object(i.a)(d,2),u=m[0],h=m[1],p=e.getFullYear(),g=new Date("".concat(c," 1, ").concat(p)),y=g.getDay(),E=new Date(2022,g.getMonth(),0).getDate();return Object(n.useEffect)((function(){for(var e=7-y,t=1,n=[function(){for(var e=[{month:a,day:1}],t=0;t<y;t++)e.unshift({month:a-1,day:E-t});for(var n=1;n<=6-y;n++)e.push({month:a,day:1+n});return e}()],r=0;r<5;r++){for(var l=new Date(2022,a+1,0).getDate(),o=[],i=1;i<=7;i++)e+i>l?(o.push({month:a+1,day:t}),t+=1):o.push({month:a,day:e+i});n.push(o),e+=7}h(n)}),[c]),r.a.createElement(b.a,{fluid:!0,className:"mx-auto"},r.a.createElement("h2",null,"My WorkOut Calendar"),r.a.createElement(M.a,null,r.a.createElement(M.a.Toggle,{variant:"secondary",id:"dropdown-basic"},c),r.a.createElement(M.a.Menu,null,r.a.createElement(M.a.Item,{onClick:function(){return s("January")}},"January"),r.a.createElement(M.a.Item,{onClick:function(){return s("February")}},"February"),r.a.createElement(M.a.Item,{onClick:function(){return s("March")}},"March"),r.a.createElement(M.a.Item,{onClick:function(){return s("April")}},"April"),r.a.createElement(M.a.Item,{onClick:function(){return s("May")}},"May"),r.a.createElement(M.a.Item,{onClick:function(){return s("June")}},"June"),r.a.createElement(M.a.Item,{onClick:function(){return s("July")}},"July"),r.a.createElement(M.a.Item,{onClick:function(){return s("August")}},"August"),r.a.createElement(M.a.Item,{onClick:function(){return s("September")}},"September"),r.a.createElement(M.a.Item,{onClick:function(){return s("October")}},"October"),r.a.createElement(M.a.Item,{onClick:function(){return s("November")}},"November"),r.a.createElement(M.a.Item,{onClick:function(){return s("December")}},"December"))),r.a.createElement(v.a,{className:"mt-5 text-center"},r.a.createElement(w.a,{style:{borderRight:"solid",borderTop:"solid"},xs:1},"Sunday"),r.a.createElement(w.a,{style:{borderRight:"solid",borderTop:"solid"},xs:1},"Monday"),r.a.createElement(w.a,{style:{borderRight:"solid",borderTop:"solid"},xs:1},"Tuesday"),r.a.createElement(w.a,{style:{borderRight:"solid",borderTop:"solid"},xs:1},"Wednesday"),r.a.createElement(w.a,{style:{borderRight:"solid",borderTop:"solid"},xs:1},"Thursday"),r.a.createElement(w.a,{style:{borderRight:"solid",borderTop:"solid"},xs:1},"Friday"),r.a.createElement(w.a,{style:{borderRight:"solid",borderTop:"solid"},xs:1},"Saturday")),u.map((function(e,t){return r.a.createElement(v.a,{key:t,style:{height:"100px"}},e.map((function(e){return r.a.createElement(w.a,{key:"".concat(e.month," / ").concat(e.day),xs:1,className:"".concat(e.month,"-").concat(e.day," text-justify"),style:{borderRight:"solid",borderTop:"solid"}},r.a.createElement("ul",{style:{listStyleType:"none"}},r.a.createElement("li",{className:"text-right"},e.day)))})))})))},U=a(149),$=a(24),q=a(154),X=Object(q.a)(D||(D=Object($.a)(["\n{\n    me {\n        _id\n        username\n        email\n        savedActivities {\n            _id\n            day\n            length\n            name\n            note\n            sets\n            reps\n            link\n            userId {\n                _id\n            }\n        }\n    }\n}"]))),J=(Object(q.a)(F||(F=Object($.a)(["\n{\n    activities {\n        _id\n        day\n        length\n        name\n        note\n        sets\n        reps\n        link\n        userId {\n            _id\n        }\n    }\n}"]))),Object(q.a)(B||(B=Object($.a)(["\n    query activity($id: ID!) {\n        activity(id: $id) {\n            _id\n            day\n            length\n            name\n            note\n            sets\n            reps\n            link\n            userId {\n              _id\n            } \n        }\n    }"]))),Object(q.a)(P||(P=Object($.a)(["\n    query ActivitiesByDay($userId: String, $day: String) {\n        activitiesByDay(userId: $userId, day: $day) {\n          _id\n          day\n          length\n          name\n          note\n          sets\n          reps\n          link\n          userId {\n            username\n          }\n        }\n      }"]))),Object(q.a)(_||(_=Object($.a)(["\nquery freeWeights{\n    freeWeights {\n      name\n      description\n      image\n      link\n    }\n  }"]))));Object(q.a)(L||(L=Object($.a)(["\n    query FreeWeight($id: ID!) {\n        freeWeight(_id: $id) {\n          _id\n          name\n          description\n          image\n          link\n        }\n    }"])));var K=function(e){var t=Object(U.a)(J),n=t.loading,l=t.data,o=(null===l||void 0===l?void 0:l.freeWeights)||{},i=e.setShowModal,c=e.setActivity,s=e.setlink;return n?r.a.createElement("div",null):r.a.createElement(b.a,{className:"mx-5",fluid:!0},o.map((function(e,t){return r.a.createElement(v.a,{key:e.link,id:e.link,className:"mt-5 mx-5"},r.a.createElement(w.a,{sm:4},r.a.createElement("img",{src:a(131)("./".concat(e.image,".jpg")),className:"justify-content-center",style:{borderRadius:"5px",height:"200px",width:"200px"},alt:"placeholder"})),r.a.createElement(w.a,{sm:{span:8,order:"".concat(t%2===0?"last":"first")}},r.a.createElement("h3",null,e.name),r.a.createElement("p",null,e.description),O.loggedIn()&&r.a.createElement(k.a,{variant:"secondary",onClick:function(){return t="".concat(e.name),a="".concat(e.link),i(!0),c(t),void s("/weights/free#".concat(a));var t,a}},"Add to Calendar")))})))};var G=function(e){var t=e.setShowModal,a=e.setActivity,n=e.setlink;function l(e,r){t(!0),a(e),n("/weights/rings#".concat(r))}return r.a.createElement(b.a,{className:"mx-5",fluid:!0},r.a.createElement(v.a,{id:"pushups",className:"mt-5 mx-5"},r.a.createElement(w.a,{sm:4},r.a.createElement("img",{className:"justify-content-center",src:E.a,style:{borderRadius:"5px",height:"200px",width:"200px"},alt:"placeholder"})),r.a.createElement(w.a,{sm:8},r.a.createElement("h3",null,"Push Ups"),r.a.createElement("p",null,"Adjust the ring height to your preferred level of difficulty, the closer to the ground the rings are the harder the exercise will be. Get in plank position and lower your chest to the bottom of the rings, keeping your shoulders stable and elbows in, close to your body.  This workout will really challenge shoulder stability and strength, more so than your average push up.                    "),O.loggedIn()&&r.a.createElement(k.a,{variant:"secondary",onClick:function(){return l("Push Ups","pushups")}},"Add to Calendar"))),r.a.createElement(v.a,{id:"ringflys",className:"mt-5 mx-5"},r.a.createElement(w.a,{sm:{span:4,order:"last"}},r.a.createElement("img",{className:"justify-content-center",src:E.a,style:{borderRadius:"5px",height:"200px",width:"200px"},alt:"placeholder"})),r.a.createElement(w.a,{sm:8},r.a.createElement("h3",null,"Ring Flys"),r.a.createElement("p",null,"Adjust the ring height to your preferred level of difficulty, the closer to the ground the rings are the harder the exercise will be. Get in plank position and slowly, with control lower your body by opening your arms out to the side into a T position. Reverse the motion by squeezing your arms together and repeat.                     "),O.loggedIn()&&r.a.createElement(k.a,{variant:"secondary",onClick:function(){return l("Ring Flys","ringflys")}},"Add to Calendar"))),r.a.createElement(v.a,{id:"invertrow",className:"mt-5 mx-5"},r.a.createElement(w.a,{sm:4},r.a.createElement("img",{className:"justify-content-center",src:E.a,style:{borderRadius:"5px",height:"200px",width:"200px"},alt:"placeholder"})),r.a.createElement(w.a,{sm:8},r.a.createElement("h3",null,"Inverted Ring Row"),r.a.createElement("p",null,"Adjust the ring height to your preferred level of difficulty, the closer to the ground the rings are the harder the exercise will be. Get under the rings and lift your butt off the ground, getting into a reverse plank position with the rings positioned right above your shoulders. Pull yourself up towards the rings and lower.                     "),O.loggedIn()&&r.a.createElement(k.a,{variant:"secondary",onClick:function(){return l("Inverted Ring Row","invertrow")}},"Add to Calendar"))),r.a.createElement(v.a,{id:"skincat",className:"mt-5 mx-5"},r.a.createElement(w.a,{sm:{span:4,order:"last"}},r.a.createElement("img",{className:"justify-content-center",src:E.a,style:{borderRadius:"5px",height:"200px",width:"200px"},alt:"placeholder"})),r.a.createElement(w.a,{sm:8},r.a.createElement("h3",null,"Skin the Cat"),r.a.createElement("p",null,"Adjust the rings so they are a few inches above your head. Grab the rings with arms straight overhead and hang. For an easier variation keep knees bent. Straighten legs for more advanced exercise. Tuck your pelvis up, curling up while rotating up and over, through the rings, ending with your face facing forward and your arms behind your back holding the rings. Reverse the motion. This exercise is advanced even with the easier variation, but will strengthen small rotator cuff muscles."),O.loggedIn()&&r.a.createElement(k.a,{variant:"secondary",onClick:function(){return l("Skin the Cat","skincat")}},"Add to Calendar"))))};var H,Y,z,Q,V,Z,ee=function(e){var t=e.setShowModal,a=e.setActivity,n=e.setlink;function l(e,r){t(!0),a(e),n("/weights/trx#".concat(r))}return r.a.createElement(b.a,{className:"mx-5",fluid:!0},r.a.createElement(v.a,{id:"kneetuck",className:"mt-5 mx-5"},r.a.createElement(w.a,{sm:4},r.a.createElement("img",{className:"justify-content-center",src:E.a,style:{borderRadius:"5px",height:"200px",width:"200px"},alt:"placeholder"})),r.a.createElement(w.a,{sm:8},r.a.createElement("h3",null,"Knee Tuck"),r.a.createElement("p",null,"Lower the bands to a foot off the ground. Place your feet in the trx foot loops (the unpadded loops) and get into plank position with your feet positioned directly below the bands. Squeeze your abdominal muscles in while you tuck your knees to your chest.                     "),O.loggedIn()&&r.a.createElement(k.a,{variant:"secondary",onClick:function(){return l("Knee Tuck","kneetuck")}},"Add to Calendar"))),r.a.createElement(v.a,{id:"singlerow",className:"mt-5 mx-5"},r.a.createElement(w.a,{sm:{span:4,order:"last"}},r.a.createElement("img",{className:"justify-content-center",src:E.a,style:{borderRadius:"5px",height:"200px",width:"200px"},alt:"placeholder"})),r.a.createElement(w.a,{sm:8},r.a.createElement("h3",null,"Single Arm Row"),r.a.createElement("p",null,"Position the TRX handles a couple feet off the ground. Grab one handle and lean back with your arm extended in front of you. To make this exercise easier, walk your feet back to get in a more vertical position with your body, completely parallel to the ground is the most advanced. Pull your body toward the TRX band while simultaneously rotating and reaching your opposite, free hand up toward the top of the TRX band.                     "),O.loggedIn()&&r.a.createElement(k.a,{variant:"secondary",onClick:function(){return l("Single Arm Row","singlerow")}},"Add to Calendar"))),r.a.createElement(v.a,{id:"yfly",className:"mt-5 mx-5"},r.a.createElement(w.a,{sm:4},r.a.createElement("img",{className:"justify-content-center",src:E.a,style:{borderRadius:"5px",height:"200px",width:"200px"},alt:"placeholder"})),r.a.createElement(w.a,{sm:8},r.a.createElement("h3",null,"Y-Fly"),r.a.createElement("p",null,"Position TRX handles at chest level. Hold handles straight out in front with arms extended, lean back (the more parallel your body to the ground, the harder the exercise will be). In one motion, pull your body up by lifting your arms above your head at a 45 degree angle ending with them extended overhead in a y position. Reverse and repeat.                     "),O.loggedIn()&&r.a.createElement(k.a,{variant:"secondary",onClick:function(){return l("Y-Fly","yfly")}},"Add to Calendar"))),r.a.createElement(v.a,{id:"reversefly",className:"mt-5 mx-5"},r.a.createElement(w.a,{sm:{span:4,order:"last"}},r.a.createElement("img",{className:"justify-content-center",src:E.a,style:{borderRadius:"5px",height:"200px",width:"200px"},alt:"placeholder"})),r.a.createElement(w.a,{sm:8},r.a.createElement("h3",null,"Reverse Fly"),r.a.createElement("p",null,"Position TRX handles at chest level. Hold handles straight out in front with arms extended, lean back (the more parallel your body to the ground, the harder the exercise will be). In one motion, pull your body toward the bands by opening your arms out straight to the side, ending in a T position. Reverse and repeat                    "),O.loggedIn()&&r.a.createElement(k.a,{variant:"secondary",onClick:function(){return l("Reverse Fly","reversefly")}},"Add to Calendar"))))},te=a(23),ae=a.n(te),ne=a(47),re=a(151),le=Object(q.a)(H||(H=Object($.a)(["\n    mutation addUser($username: String!, $email: String!, $password: String!) {\n        addUser(username: $username, email: $email, password: $password) {\n          token\n            user {\n            _id\n            username\n            email\n          }\n        }\n    }"]))),oe=(Object(q.a)(Y||(Y=Object($.a)(["   \nmutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }"]))),Object(q.a)(z||(z=Object($.a)(["\n    mutation AddActivity($input: ActivityInput) {\n        addActivity(input: $input) {\n          username\n          email\n          savedActivities {\n            _id\n            day\n            name\n            note\n            length\n            link\n            sets\n            reps\n          }\n        }\n      }"])))),ie=Object(q.a)(Q||(Q=Object($.a)(["\n    mutation RemoveActivity($activityId: ID!) {\n        removeActivity(activityId: $activityId) {\n          _id\n          username\n          email\n          savedActivities {\n            _id\n            day\n            length\n            name\n            note\n            sets\n            reps\n            link\n          }\n        }\n    }"]))),ce=Object(q.a)(V||(V=Object($.a)(["\n    mutation RemoveAllActivities($userId: ID!) {\n        removeAllActivities(userId: $userId) {\n          _id\n          username\n          email\n          savedActivities {\n            _id\n            day\n            name\n            length\n            note\n            sets\n            reps\n            link\n            userId {\n              _id\n            }\n          }\n        }\n      }"]))),se=Object(q.a)(Z||(Z=Object($.a)(["\nmutation UpdateActivity($activityId: ID!, $input: ActivityInput) {\n    updateActivity(activityId: $activityId, input: $input) {\n        _id\n        day\n        length\n        name\n        note\n        sets\n        reps\n        link\n    }\n}"]))),de=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),c=Object(i.a)(o,2),s=c[0],d=c[1],m=Object(n.useState)(""),u=Object(i.a)(m,2),h=u[0],p=u[1],g=Object(re.a)(le),y=Object(i.a)(g,2),E=y[0],b=y[1].error,f=function(e){var t=e.target,a=t.name,n=t.value;"username"===a?l(n):"email"===a?d(n):p(n)},v=function(){var e=Object(ne.a)(ae.a.mark((function e(t){var n,r;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,E({variables:{username:a,email:s,password:h}});case 4:n=e.sent,r=n.data,O.login(r.addUser.token),l(""),p(""),d(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"d-flex flex-row justify-content-center"},r.a.createElement("form",{onSubmit:v,style:{width:"50%"}},r.a.createElement("div",{className:"d-flex flex-column align-items-start pt-5",style:{width:"100%"}},r.a.createElement("h2",{className:"h2"},"Welcome!"),r.a.createElement("h3",{className:"h3"},"Create an account."),r.a.createElement("label",{htmlFor:"username"},"Username:"),r.a.createElement("input",{className:"mr-5 mb-5 p-2 rounded text-red",required:!0,style:{width:"70%"},name:"username",id:"username",type:"username",placeholder:"Your username",value:a,onChange:f}),r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{className:"mr-5 mb-5 p-2 rounded text-red",required:!0,style:{width:"70%"},name:"email",id:"email",type:"email",placeholder:"Your email",value:s,onChange:f}),r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{className:"mr-5 mb-5 p-2 rounded text-red",required:!0,style:{width:"70%"},name:"password",id:"password",type:"password",minLength:"5",placeholder:"*******",value:h,onChange:f}),r.a.createElement("div",{className:"d-flex justify-content-center",style:{width:"65%"}},r.a.createElement(k.a,{type:"submit",variant:"secondary"},"Submit")),r.a.createElement("div",{className:"d-flex justify-content-start align-items-center",style:{width:"65%",paddingTop:"50px"}},r.a.createElement("p",{className:"mr-4 text-center"},"Already have an account? "),r.a.createElement(k.a,{variant:"secondary",href:"/login"},"Login")),b&&r.a.createElement("div",{className:"p-2 rounded",style:{backgroundColor:"pink",color:"red",width:"70%"}},"Sign up failed"))))},me=a(71),ue=a(155),he=a(156);var pe=function(e){var t=e.showModal,a=e.setShowModal,n=e.activity,l=e.link,o=e.formData,s=e.setFormData,d=e.isEdit,m=e.setIsEdit,u=e.updateId;console.log(u,"updateId");var h=Object(re.a)(oe),p=Object(i.a)(h,1)[0],g=Object(re.a)(se),y=Object(i.a)(g,1)[0],E=function(){return a(!1)},f=function(e,t){s(Object(c.a)(Object(c.a)({},o),{},Object(me.a)({},e,t)))},x=function(){var e=Object(ne.a)(ae.a.mark((function e(){var t,r;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(c.a)(Object(c.a)({},o),{},{name:"".concat(n),link:"".concat(l)}),e.prev=1,e.next=4,p({variables:{input:t}});case 4:r=e.sent,r.data,s({day:"",length:"",reps:0,sets:0,note:""}),a(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(ne.a)(ae.a.mark((function e(){var t,r;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(c.a)(Object(c.a)({},o),{},{name:"".concat(n),link:"".concat(l)}),e.prev=1,e.next=4,y({variables:{input:t,activityId:u}});case 4:r=e.sent,r.data,s({day:"",length:"",reps:0,sets:0,note:""}),m(!1),a(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue.a,{show:t,onHide:E},r.a.createElement(ue.a.Header,{closeButton:!0,className:"background-brown text-tan"},r.a.createElement(ue.a.Title,{className:"modalTitle"},"Track A Workout")),r.a.createElement(ue.a.Body,{className:"background-tan"},r.a.createElement(he.a,{className:"modalForm"},r.a.createElement(he.a.Label,{className:"modalLabel"},n),r.a.createElement(b.a,{className:"mb-3"},r.a.createElement(v.a,{className:"mb-3"},r.a.createElement(w.a,null,r.a.createElement(M.a,null,r.a.createElement(M.a.Toggle,{id:"dropdown-button-dark-example1",variant:"secondary",className:"dayBtn"},""===o.day?"Day":"".concat(o.day)),r.a.createElement(M.a.Menu,{variant:"dark",className:"dayMenu"},r.a.createElement(M.a.Item,{onClick:function(){return f("day","Monday")}},"Monday"),r.a.createElement(M.a.Item,{onClick:function(){return f("day","Tuesday")}},"Tuesday"),r.a.createElement(M.a.Item,{onClick:function(){return f("day","Wednesday")}},"Wednesday"),r.a.createElement(M.a.Item,{onClick:function(){return f("day","Thursday")}},"Thursday"),r.a.createElement(M.a.Item,{onClick:function(){return f("day","Friday")}},"Friday"),r.a.createElement(M.a.Item,{onClick:function(){return f("day","Saturday")}},"Saturday"),r.a.createElement(M.a.Item,{onClick:function(){return f("day","Sunday")}},"Sunday"))))),r.a.createElement(v.a,null,r.a.createElement(w.a,null,r.a.createElement(M.a,null,r.a.createElement(M.a.Toggle,{id:"dropdown-button-dark-example1",variant:"secondary",className:"optionBtn"},""===o.length?"Length":"".concat(o.length)),r.a.createElement(M.a.Menu,{variant:"dark",className:"optionMenu"},r.a.createElement(M.a.Item,{onClick:function(){return f("length","30Mins")}},"30Mins"),r.a.createElement(M.a.Item,{onClick:function(){return f("length","60Mins")}},"60Mins"),r.a.createElement(M.a.Item,{onClick:function(){return f("length","90Mins")}},"90Mins"),r.a.createElement(M.a.Item,{onClick:function(){return f("length","120Mins")}},"120Mins")))),r.a.createElement("label",null,"Sets"),r.a.createElement(w.a,null,r.a.createElement(M.a,null,r.a.createElement(M.a.Toggle,{id:"dropdown-button-dark-example1",variant:"secondary",className:"optionBtn"},0===o.sets?"Sets":"".concat(o.sets)),r.a.createElement(M.a.Menu,{variant:"dark",className:"optionMenu"},r.a.createElement(M.a.Item,{onClick:function(){return f("sets",1)}},"1"),r.a.createElement(M.a.Item,{onClick:function(){return f("sets",2)}},"2"),r.a.createElement(M.a.Item,{onClick:function(){return f("sets",3)}},"3"),r.a.createElement(M.a.Item,{onClick:function(){return f("sets",4)}},"4")))),r.a.createElement("label",null,"Reps"),r.a.createElement(w.a,null,r.a.createElement(M.a,null,r.a.createElement(M.a.Toggle,{id:"dropdown-button-dark-example1",variant:"secondary",className:"optionBtn"},0===o.reps?"Reps":"".concat(o.reps)),r.a.createElement(M.a.Menu,{variant:"dark",className:"optionMenu"},r.a.createElement(M.a.Item,{onClick:function(){return f("reps",5)}},"5"),r.a.createElement(M.a.Item,{onClick:function(){return f("reps",10)}},"10"),r.a.createElement(M.a.Item,{onClick:function(){return f("reps",12)}},"12"),r.a.createElement(M.a.Item,{onClick:function(){return f("reps",15)}},"15")))))),r.a.createElement(he.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1"},r.a.createElement(he.a.Label,null,"Note"),r.a.createElement(he.a.Control,{name:"note",value:o.note,onChange:function(e){var t=e.target,a=t.name,n=t.value;s(Object(c.a)(Object(c.a)({},o),{},Object(me.a)({},a,n)))},as:"textarea",rows:3,className:"text-red"})))),r.a.createElement(ue.a.Footer,{className:"background-brown"},r.a.createElement(k.a,{variant:"secondary",onClick:E},"Close"),d?r.a.createElement(k.a,{variant:"secondary",onClick:A},"Save Changes"):r.a.createElement(k.a,{variant:"secondary",onClick:x},"Save"))))},ge=a(55),ye=a(96),Ee=a(94);var be=function(e){var t=e.showDetailModal,a=e.setShowDetailModal,n=e.activity,l=e.detailModalProps,o=Object(i.a)(l,6),c=o[0],s=o[1],d=o[2],m=o[3],u=o[4],h=o[5],p=function(){return a(!1)};return r.a.createElement(ue.a,{show:t,onHide:p},r.a.createElement(ue.a.Header,{closeButton:!0,className:"background-brown"},r.a.createElement(ue.a.Title,{className:"text-tan"},"Activity Details")),r.a.createElement(ue.a.Body,{className:"background-tan"},r.a.createElement(b.a,{className:"mt-3"},r.a.createElement(w.a,null,r.a.createElement("h4",null,n.name),r.a.createElement("div",{className:"p-2"},r.a.createElement("p",null,"Day: ",n.day),r.a.createElement("p",null,"Duration: ","".concat(n.length))),r.a.createElement("div",{className:"p-2"},r.a.createElement("p",null,"Sets: ",n.sets),r.a.createElement("p",null,"Reps: ",n.reps)),r.a.createElement("div",{className:"p-2"},r.a.createElement("p",null,"Note: ",n.note),r.a.createElement(k.a,{variant:"secondary",href:n.link},"More information"))))),r.a.createElement(ue.a.Footer,{className:"background-brown"},r.a.createElement(k.a,{variant:"secondary",onClick:p},"Close"),r.a.createElement(k.a,{variant:"secondary",onClick:function(){s(!0),m(n.name),u(n.link),d({day:n.day,length:n.length,reps:n.reps,sets:n.sets,note:n.note}),h(n._id),c(!0),a(!1)}},"Edit")))},fe=function(e){var t=e.activity,a=e.setActivities,l=e.activities,o=(e.days,e.detailModalProps),c=Object(n.useState)(!1),s=Object(i.a)(c,2),d=s[0],m=s[1],u=Object(re.a)(ie),h=Object(i.a)(u,2),p=h[0],g=h[1].error,y=function(){var e=Object(ne.a)(ae.a.mark((function e(n){var r,o;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p({variables:{activityId:t._id}});case 3:if(r=e.sent,r.data,!g){e.next=7;break}throw new Error("something went wrong!");case 7:o=(o=Object(ge.a)(l)).filter((function(e){return e._id!==t._id})),a(o),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"activity border border-dark rounded m-2 text-center background-tan"},r.a.createElement(be,{showDetailModal:d,detailModalProps:o,setShowDetailModal:m,activity:t}),r.a.createElement("div",null,r.a.createElement("p",{className:"font-weight-bold p-1"},t.name)),r.a.createElement("div",null,r.a.createElement("p",null,t.length)),r.a.createElement("div",{className:"m-2"},r.a.createElement(k.a,{variant:"secondary",className:"detail m-2",onClick:function(e){m(!0)}},r.a.createElement(ye.a,{icon:Ee.a})),r.a.createElement(k.a,{variant:"secondary",className:"delete m-2",onClick:y},r.a.createElement(ye.a,{icon:Ee.b}))))},ve=function(e){var t=e.day,a=e.setActivities,n=e.allActivities,l=e.days,o=e.detailModalProps,i=(null===e||void 0===e?void 0:e.activities)||[];return r.a.createElement("div",{className:"d-flex flex-column col-12 border border-dark background-brown"},r.a.createElement("p",{className:"border border-dark rounded mt-2 background-red text-tan shadow",style:{fontSize:"1.5em"}},t),r.a.createElement("div",{className:"d-flex flex-row justify-content-center flex-wrap"},i.map((function(e,i){return r.a.createElement(fe,{activity:e,days:l,activities:n,setActivities:a,detailModalProps:o,key:"".concat(t).concat(e.name).concat(i)})}))))},we=function(e){O.loggedIn()||window.location.assign("/");var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=e.activities,l=e.setActivities,o=e.detailModalProps,c=O.getProfile(),s=Object(re.a)(ce),d=Object(i.a)(s,2),m=d[0],u=d[1].error,h=Object(U.a)(X),p=h.data,g=(h.loading,[]);Object(n.useEffect)((function(){p&&(g=p.me.savedActivities,l(g))}),[p]);var y=function(){var e=Object(ne.a)(ae.a.mark((function e(t){var a;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m({variables:{userId:c.data._id}});case 3:if(a=e.sent,a.data,!u){e.next=7;break}throw new Error("something went wrong!");case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:l([]);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(b.a,{className:"text-center mt-5",fluid:!0},r.a.createElement("h2",null,"Weekly Calendar"),r.a.createElement(w.a,{className:"w-100 justify-content-center "},t.map((function(e,n){var i=a.filter((function(e){return e.day===t[n]}));return r.a.createElement(ve,{day:e,days:t,activities:i||[],allActivities:a,setActivities:l,detailModalProps:o,key:e})}))),r.a.createElement(k.a,{className:"mt-3 mb-3",variant:"secondary",onClick:y},"Clear Calendar"))},ke=Object(m.a)({uri:"/graphql"}),xe=Object(g.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(c.a)(Object(c.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),Ae=new u.a({link:xe.concat(ke),cache:new h.a});var je=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),c=Object(i.a)(o,2),m=c[0],u=c[1],h=Object(n.useState)([]),g=Object(i.a)(h,2),y=g[0],E=g[1],b=Object(n.useState)(""),v=Object(i.a)(b,2),w=v[0],k=v[1],x=Object(n.useState)(!1),A=Object(i.a)(x,2),j=A[0],N=A[1],O=Object(n.useState)({day:"",length:"",reps:0,sets:0,note:""}),S=Object(i.a)(O,2),R=S[0],M=S[1],D=Object(n.useState)(""),F=Object(i.a)(D,2),B=F[0],P=F[1],_=[l,N,M,u,k,P];return r.a.createElement(p.a,{client:Ae},r.a.createElement(T,null),r.a.createElement(pe,{updateId:B,setShowModal:l,setFormData:M,setIsEdit:N,formData:R,isEdit:j,showModal:a,activity:m,link:w}),r.a.createElement(s.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:f}),r.a.createElement(d.a,{exact:!0,path:"/upstairs",render:function(e){return r.a.createElement(C,Object.assign({},e,{setShowModal:l,setActivity:u,setlink:k}))}}),r.a.createElement(d.a,{exact:!0,path:"/weights",component:I}),r.a.createElement(d.a,{exact:!0,path:"/calendar",component:W}),r.a.createElement(d.a,{exact:!0,path:"/weights/trx",render:function(e){return r.a.createElement(ee,Object.assign({},e,{setShowModal:l,setActivity:u,setlink:k}))}}),r.a.createElement(d.a,{exact:!0,path:"/weights/rings",render:function(e){return r.a.createElement(G,Object.assign({},e,{setShowModal:l,setActivity:u,setlink:k}))}}),r.a.createElement(d.a,{exact:!0,path:"/weights/free",render:function(e){return r.a.createElement(K,Object.assign({},e,{setShowModal:l,setActivity:u,setlink:k}))}}),r.a.createElement(d.a,{exact:!0,path:"/signup",component:de}),r.a.createElement(d.a,{exact:!0,path:"/week",render:function(e){return r.a.createElement(we,Object.assign({},e,{detailModalProps:_,activities:y,setActivities:E}))}}))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(je,null)),document.getElementById("root"))},15:function(e,t){e.exports="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAMFBMVEXY2NimpqbX19e0tLSysrKvr6/Ly8uoqKijo6PJycmsrKy6urq3t7fU1NTb29u+vr5vALI/AAACUElEQVR4nO3b63KDIBhFUa8EvMD7v21FU4OSRCWZOv3c62cnmZHTIxLFLAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXEuR6uwD/xarXJnKKXv24X9D0eY6T6XzVkAXbJuewJhC+/+boD5KwFNnD+FjztegSZwOal8Ed/YQPtb5CGyqZvh2d/YQPuYzKFNPaVtKyKDwGVTJGVQ+g39/ZVhlcGw8UwbfPqS/FvbA9q6rq/bAPC+vB6rx1widl7sHJa0Hdl4p6GpvCNJ60DePtZ/bOUlK64ELln63ft+3pfWgDNe/5tlH42CE9aCoNzKwpol+KEvrQbWRgRkuGmYVgrAeZF3wG/oWrRGsuY1/X4YgrQcmqEETfczcE1qGIK0HWTUXQUedH1swprMIQVoPhgWC/l0erD+kgvMkDEFcD7K+u+Va5806gkcL1k0Q14OBcs6Zfn0irG+3PUKQ14NRvEpetCBfXB0k9uAJq9YRBCHI6MFmBiZKIAhBRgZP76UFk96TFgQTo9xzwcw3Uax69QBmaoLUHgxXQn0f1qsWTE3I5PbA/+v11IR3z6B0XUjtwX095JvwrgWDRwbCejBPAEMIG08ipfYgXBVXzcvhS+5BtCq+Xg9stCq+XA825sBL9ODgbgyJPTjWApE9KDYuA1fowfL5wkV7kJ4BPaAHwnpwbK+mxN+NRVcf08nrwfG965mUHmzeU31LRg8K9miyV9djzzZ79z3e4ch4l2fEO12jy7/bBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADY6QdKxiT02tNlSwAAAABJRU5ErkJggg=="}},[[115,1,2]]]);
//# sourceMappingURL=main.126f6cc8.chunk.js.map