(()=>{var e={31963:e=>{e.exports={handleSignin:(e,s,r,t)=>{const{email:n,password:o}=e.body;if(!n||!o)return s.status(400).json("incorrect form submission");r.select("email","hash").from("login").where("email","=",n).then((e=>{if(t.compareSync(o,e[0].hash))return r.select("*").from("users").where("email","=",n).then((e=>{s.json(e[0])})).catch((e=>s.status(400).json("unable to get user")));s.status(400).json("wrong credentials")})).catch((e=>s.status(400).json("wrong credentials")))}}}},s={};!function r(t){var n=s[t];if(void 0!==n)return n.exports;var o=s[t]={exports:{}};return e[t](o,o.exports,r),o.exports}(31963)})();