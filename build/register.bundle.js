(()=>{var e={90892:e=>{e.exports={handleRegister:(e,t,n,r)=>{const{email:s,name:o,password:a}=e.body;if(!s||!o||!a)return t.status(400).json("incorrect form submission");const i=r.hashSync(a);n.transaction((e=>{e.insert({hash:i,email:s}).into("login").returning("email").then((n=>{e("users").returning("*").insert({email:n[0].email,name:o,joined:new Date}).then((e=>{t.json(e[0])}))})).then(e.commit).catch(e.rollback)})).catch((e=>t.status(400).json("unable to register")))}}}},t={};!function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(90892)})();