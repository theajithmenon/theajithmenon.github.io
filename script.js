'use strict';
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu(){ if(!toggle || !navigation) return; navigation.classList.remove('open');toggle.setAttribute('aria-expanded','false'); }
if(toggle && navigation){
  toggle.addEventListener('click',()=>{const open = navigation.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
  navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape' && navigation.classList.contains('open')){closeMenu();toggle.focus();}});
  window.matchMedia('(min-width: 761px)').addEventListener('change',closeMenu);
}
const cards = [...document.querySelectorAll('.work-card')];
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});
  cards.forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;});
  const count=cards.filter(card=>!card.hidden).length;
  document.querySelector('#filter-status').textContent=`${count} ${count===1?'project':'projects'} shown.`;
}));
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
