/* Sun, Moon and naked-eye planets: low-precision ephemeris after Paul Schlyter's "Computing planetary positions"
   (good to a few arc-minutes). Returns geocentric RA/Dec of date in degrees; Moon distance in Earth radii. */
(function(){
  const R=Math.PI/180, sin=x=>Math.sin(x*R), cos=x=>Math.cos(x*R), rev=x=>((x%360)+360)%360;
  const EL={
    Sun:    d=>({N:0,i:0,w:282.9404+4.70935e-5*d,a:1,e:0.016709-1.151e-9*d,M:356.0470+0.9856002585*d}),
    Moon:   d=>({N:125.1228-0.0529538083*d,i:5.1454,w:318.0634+0.1643573223*d,a:60.2666,e:0.0549,M:115.3654+13.0649929509*d}),
    Mercury:d=>({N:48.3313+3.24587e-5*d,i:7.0047+5.0e-8*d,w:29.1241+1.01444e-5*d,a:0.387098,e:0.205635+5.59e-10*d,M:168.6562+4.0923344368*d}),
    Venus:  d=>({N:76.6799+2.4659e-5*d,i:3.3946+2.75e-8*d,w:54.8910+1.38374e-5*d,a:0.72333,e:0.006773-1.302e-9*d,M:48.0052+1.6021302244*d}),
    Mars:   d=>({N:49.5574+2.11081e-5*d,i:1.8497-1.78e-8*d,w:286.5016+2.92961e-5*d,a:1.523688,e:0.093405+2.516e-9*d,M:18.6021+0.5240207766*d}),
    Jupiter:d=>({N:100.4542+2.76854e-5*d,i:1.3030-1.557e-7*d,w:273.8777+1.64505e-5*d,a:5.20256,e:0.048498+4.469e-9*d,M:19.8950+0.0830853001*d}),
    Saturn: d=>({N:113.6634+2.3898e-5*d,i:2.4886-1.081e-7*d,w:339.3939+2.97661e-5*d,a:9.55475,e:0.055546-9.499e-9*d,M:316.9670+0.0334442282*d})
  };
  function orbit(el){ // position in the orbit plane -> ecliptic rectangular (heliocentric; geocentric for the Moon)
    const M=rev(el.M), e=el.e; let E=M+(180/Math.PI)*e*sin(M)*(1+e*cos(M));
    for(let k=0;k<8;k++){const dE=(E-(180/Math.PI)*e*sin(E)-M)/(1-e*cos(E)); E-=dE; if(Math.abs(dE)<1e-6)break;}
    const xv=el.a*(cos(E)-e), yv=el.a*Math.sqrt(1-e*e)*sin(E), v=Math.atan2(yv,xv)/R, r=Math.hypot(xv,yv), u=v+el.w;
    return {x:r*(cos(el.N)*cos(u)-sin(el.N)*sin(u)*cos(el.i)), y:r*(sin(el.N)*cos(u)+cos(el.N)*sin(u)*cos(el.i)), z:r*sin(u)*sin(el.i), r};
  }
  const lonlat=p=>({lon:rev(Math.atan2(p.y,p.x)/R), lat:Math.atan2(p.z,Math.hypot(p.x,p.y))/R, r:Math.hypot(p.x,p.y,p.z)});
  const fromLL=(lon,lat,r)=>({x:r*cos(lon)*cos(lat), y:r*sin(lon)*cos(lat), z:r*sin(lat)});
  function equ(p,ecl){ const ye=p.y*cos(ecl)-p.z*sin(ecl), ze=p.y*sin(ecl)+p.z*cos(ecl);
    return {ra:rev(Math.atan2(ye,p.x)/R), dec:Math.atan2(ze,Math.hypot(p.x,ye))/R, r:Math.hypot(p.x,ye,ze)}; }
  window.skyBodies=function(date){
    const d=date.getTime()/86400000+2440587.5-2451543.5, ecl=23.4393-3.563e-7*d, out=[];
    const es=EL.Sun(d), so=orbit(es), sunLon=rev(Math.atan2(so.y,so.x)/R), sr=so.r; // orbit() with N=i=0 gives lon = v+w
    const sun={x:sr*cos(sunLon), y:sr*sin(sunLon), z:0};
    out.push(Object.assign({id:"Sun",name:"Sun",lon:sunLon,lat:0},equ(sun,ecl)));
    // Moon with the main perturbations
    const em=EL.Moon(d); let m=lonlat(orbit(em));
    const Ms=rev(es.M), Mm=rev(em.M), Ls=rev(es.M+es.w), Lm=rev(em.M+em.w+em.N), D=Lm-Ls, F=Lm-em.N;
    m.lon+= -1.274*sin(Mm-2*D)+0.658*sin(2*D)-0.186*sin(Ms)-0.059*sin(2*Mm-2*D)-0.057*sin(Mm-2*D+Ms)+0.053*sin(Mm+2*D)
           +0.046*sin(2*D-Ms)+0.041*sin(Mm-Ms)-0.035*sin(D)-0.031*sin(Mm+Ms)-0.015*sin(2*F-2*D)+0.011*sin(Mm-4*D);
    m.lat+= -0.173*sin(F-2*D)-0.055*sin(Mm-F-2*D)-0.046*sin(Mm+F-2*D)+0.033*sin(F+2*D)+0.017*sin(2*Mm+F);
    m.r+= -0.58*cos(Mm-2*D)-0.46*cos(2*D);
    const elong=Math.acos(cos(m.lon-sunLon)*cos(m.lat))/R;
    out.push(Object.assign({id:"Moon",name:"Moon",lon:rev(m.lon),lat:m.lat,lit:(1-cos(elong))/2,waxing:rev(m.lon-sunLon)<180,distER:m.r},equ(fromLL(m.lon,m.lat,m.r),ecl)));
    const Mj=rev(EL.Jupiter(d).M), Msa=rev(EL.Saturn(d).M);
    for(const id of ["Mercury","Venus","Mars","Jupiter","Saturn"]){
      let h=lonlat(orbit(EL[id](d)));
      if(id==="Jupiter") h.lon+= -0.332*sin(2*Mj-5*Msa-67.6)-0.056*sin(2*Mj-2*Msa+21)+0.042*sin(3*Mj-5*Msa+21)-0.036*sin(Mj-2*Msa)+0.022*cos(Mj-Msa)+0.023*sin(2*Mj-3*Msa+52)-0.016*sin(Mj-5*Msa-69);
      if(id==="Saturn"){ h.lon+= 0.812*sin(2*Mj-5*Msa-67.6)-0.229*cos(2*Mj-4*Msa-2)+0.119*sin(Mj-2*Msa-3)+0.046*sin(2*Mj-6*Msa-69)+0.014*sin(Mj-3*Msa+32);
                         h.lat+= -0.020*cos(2*Mj-4*Msa-2)+0.018*sin(2*Mj-6*Msa-49); }
      const hp=fromLL(h.lon,h.lat,h.r), g={x:hp.x+sun.x,y:hp.y+sun.y,z:hp.z};
      const gl=lonlat(g); out.push(Object.assign({id,name:id,lon:gl.lon,lat:gl.lat,elong:Math.acos(cos(gl.lon-sunLon)*cos(gl.lat))/R},equ(g,ecl)));
    }
    return out;
  };
  // precess J2000 RA/Dec (deg) to the equinox of the given date (Meeus ch. 21, rigorous)
  window.precessFromJ2000=function(ra,dec,date){
    const T=(date.getTime()/86400000+2440587.5-2451545)/36525, as=1/3600;
    const zeta=(2306.2181*T+0.30188*T*T+0.017998*T*T*T)*as, z=(2306.2181*T+1.09468*T*T+0.018203*T*T*T)*as, th=(2004.3109*T-0.42665*T*T-0.041833*T*T*T)*as;
    const A=cos(dec)*sin(ra+zeta), B=cos(th)*cos(dec)*cos(ra+zeta)-sin(th)*sin(dec), C=sin(th)*cos(dec)*cos(ra+zeta)+cos(th)*sin(dec);
    return [rev(Math.atan2(A,B)/R+z), Math.asin(Math.max(-1,Math.min(1,C)))/R];
  };
})();
