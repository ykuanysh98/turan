import{i as u}from"./DVShB6SZ.js";const a=()=>{const r=u(!1);return{error:function(t){const e=u("");return r.value===!1||(t?t.slice(0,1)!=="7"?e.value="Номер телефона введен некорректно. Убедитесь, что номер телефона введен в формате: +7 (XXX) XXX-XX-XX.":t.length<13&&(e.value="Это поле должно быть заполнено"):e.value="Это поле должно быть заполнено"),e.value},touch:function(){r.value=!0}}};export{a as p};