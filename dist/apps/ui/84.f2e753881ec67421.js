"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[84],{2084:(H,r,n)=>{n.r(r),n.d(r,{HomeModule:()=>x});var c=n(2506),m=n(7481),s=n(7168),e=n(8811),u=n(4983),h=n(9800);const d=["searchBar"],p=[{path:"",component:(()=>{class o{constructor(t,l,i){this._route=t,this._router=l,this.fb=i,this.homeData={}}ngOnInit(){this.form=this.fb.group({search:new s.NI("",{})})}ngAfterViewInit(){this.getPlaceAutocomplete()}getPlaceAutocomplete(){const t=new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);t.setComponentRestrictions({country:["us"]}),t.setTypes(["(cities)"]),google.maps.event.addListener(t,"place_changed",()=>{this.place=t.getPlace()})}search(){const t=this.place.address_components?.at(0)?.long_name,l=this.place.address_components?.at(2)?.short_name,i=this.place.geometry?.location?.lat(),y=this.place.geometry?.location?.lng();this._router.navigate(["/search"],{relativeTo:this._route,queryParams:{city:t,state_code:l,limit:"10",lat:i,lng:y},skipLocationChange:!1})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.gz),e.Y36(m.F0),e.Y36(s.qu))},o.\u0275cmp=e.Xpm({type:o,selectors:[["starter-home"]],viewQuery:function(t,l){if(1&t&&e.Gf(d,5),2&t){let i;e.iGM(i=e.CRH())&&(l.searchElementRef=i.first)}},decls:14,vars:1,consts:[[1,"h-[85vh]","md:h-[90vh]","lg:h-[86.5vh]",2,"background-image","url('https://images.unsplash.com/photo-1625950019503-cae6a7825762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')"],[3,"formGroup","ngSubmit"],[1,"text-center","pt-40"],[1,"text-white","text-3xl","sm:text-5xl"],[1,"flex","justify-center","rounded-lg"],[1,"h-16","w-3/5","sm:w-2/5","bg-white","flex","justify-between","mt-4","rounded-full"],["formControlName","search","type","text","placeholder","Enter a city or ZIP code",1,"w-full","placeholder:text-slate-600","placeholder:text-xl","text-xl","pl-6","rounded-full","outline-none"],["searchBar",""],[1,"flex","items-center","justify-center","align-middle","pr-2","ml-2"],["mat-mini-fab","",1,"bg-white","text-4xl"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return l.search()}),e.TgZ(2,"div",2)(3,"p",3),e._uU(4,"Find Your Next Home Here"),e.qZA()(),e.TgZ(5,"div",4)(6,"div",5),e._UZ(7,"input",6,7),e.TgZ(9,"div",8)(10,"button",9)(11,"mat-icon"),e._uU(12,"search"),e.qZA()()()(),e._UZ(13,"div"),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",l.form))},dependencies:[s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,u.Hw,h.lW],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),o})()}];let f=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.Bz.forChild(p),m.Bz]}),o})();var g=n(5942),v=n(2861);let x=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.ez,f,s.UX,g.m,v.Y4]}),o})()}}]);