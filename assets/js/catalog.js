const products=[
  {name:"A4 Copier Paper 80gsm", category:"Stationery & Paper", description:"Office copier paper available in ream and carton quantities.", image:""},
  {name:"A3 Copier Paper", category:"Stationery & Paper", description:"A3 copier paper for office, education and print-room applications.", image:""},
  {name:"Ballpoint Pens", category:"Stationery & Paper", description:"Blue, black and red ballpoint pens supplied in bulk packs.", image:""},
  {name:"Permanent Markers", category:"Stationery & Paper", description:"Permanent markers available in assorted colours and tip sizes.", image:""},
  {name:"Whiteboard Markers", category:"Stationery & Paper", description:"Dry-erase markers for classrooms, training rooms and meeting spaces.", image:""},
  {name:"Lever Arch Files", category:"Stationery & Paper", description:"Lever arch filing solutions in multiple spine sizes and colours.", image:""},
  {name:"Notebooks & Writing Pads", category:"Stationery & Paper", description:"Notebooks, memo pads and writing pads for office and classroom use.", image:""},
  {name:"Labels & Envelopes", category:"Stationery & Paper", description:"Common office label and envelope sizes for daily administrative use.", image:""},

  {name:"Laser Toner Cartridges", category:"Printer & IT Consumables", description:"OEM and approved compatible toner options, supplied according to printer model.", image:""},
  {name:"Ink Cartridges", category:"Printer & IT Consumables", description:"Ink cartridges for commonly used business printer models.", image:""},
  {name:"Thermal / Barcode Labels", category:"Printer & IT Consumables", description:"Thermal and barcode label rolls for office, logistics and operational applications.", image:""},
  {name:"Batteries", category:"Printer & IT Consumables", description:"AA, AAA and other commonly required battery sizes for workplace equipment.", image:""},

  {name:"Facial Tissue Boxes", category:"Hygiene & Tissue", description:"Facial tissue boxes supplied in institutional and bulk-carton quantities.", image:""},
  {name:"Jumbo Toilet Rolls", category:"Hygiene & Tissue", description:"Commercial jumbo toilet rolls for high-traffic washrooms and facilities.", image:""},
  {name:"Hand Towel Rolls", category:"Hygiene & Tissue", description:"Hand towel rolls suitable for commercial washroom dispensers.", image:""},
  {name:"Interfold Hand Towels", category:"Hygiene & Tissue", description:"Interfold paper hand towels for institutional washrooms and dispensers.", image:""},
  {name:"Liquid Handwash 5L", category:"Hygiene & Tissue", description:"Bulk liquid handwash refills for offices, schools, healthcare and facilities.", image:""},
  {name:"Hand Sanitizer", category:"Hygiene & Tissue", description:"Hand sanitizer supplied in multiple bottle and refill sizes.", image:""},

  {name:"Heavy-Duty Garbage Bags", category:"Cleaning & Janitorial", description:"Commercial refuse bags available in multiple colours, gauges and capacities.", image:""},
  {name:"Microfiber Cloths", category:"Cleaning & Janitorial", description:"Reusable microfiber cleaning cloths for general facility and surface cleaning.", image:""},
  {name:"Floor Cleaner", category:"Cleaning & Janitorial", description:"Commercial floor-cleaning solutions in institutional pack sizes.", image:""},
  {name:"Glass Cleaner", category:"Cleaning & Janitorial", description:"Glass and multi-surface cleaner available in ready-to-use and bulk formats.", image:""},
  {name:"Mops & Handles", category:"Cleaning & Janitorial", description:"Commercial mop heads, handles and related cleaning equipment.", image:""},
  {name:"Waste Bins", category:"Cleaning & Janitorial", description:"Waste bins for offices, washrooms, common areas and facility operations.", image:""},

  {name:"Paper Cups", category:"Pantry & Disposables", description:"Disposable paper cups for hot and cold beverages in institutional settings.", image:""},
  {name:"Disposable Cutlery", category:"Pantry & Disposables", description:"Disposable forks, spoons and knives supplied in individual or bulk packs.", image:""},
  {name:"Paper Napkins", category:"Pantry & Disposables", description:"Paper napkins for staff pantries, canteens, meetings and events.", image:""},
  {name:"Disposable Plates", category:"Pantry & Disposables", description:"Disposable plates available in multiple sizes and material options.", image:""},

  {name:"Disposable Face Masks", category:"PPE & Safety", description:"General-purpose disposable face masks; required specification is confirmed at RFQ stage.", image:""},
  {name:"Disposable Gloves", category:"PPE & Safety", description:"Nitrile, latex and vinyl disposable glove options subject to user requirements.", image:""},
  {name:"Shoe Covers", category:"PPE & Safety", description:"Disposable shoe covers for general workplace and controlled-area use.", image:""},
  {name:"Disposable Protective Gowns", category:"PPE & Safety", description:"Disposable protective gowns; material and protection specification confirmed at RFQ stage.", image:""}
];

const grid=document.getElementById('product-grid');
const search=document.getElementById('search');
const category=document.getElementById('category');
const empty=document.getElementById('empty');
const categoryStrip=document.getElementById('category-strip');
const selectedBar=document.getElementById('selected-category-bar');
const selectedTitle=document.getElementById('selected-category-title');
const viewAll=document.getElementById('view-all-categories');

const queryCategory={
  stationery:'Stationery & Paper',
  printer:'Printer & IT Consumables',
  hygiene:'Hygiene & Tissue',
  cleaning:'Cleaning & Janitorial',
  pantry:'Pantry & Disposables',
  ppe:'PPE & Safety'
};
const reverseCategory=Object.fromEntries(Object.entries(queryCategory).map(([k,v])=>[v,k]));

function setCategoryView(value,{updateUrl=false,scroll=false}={}){
  category.value=value;
  const filtered=value!=='all';
  categoryStrip.hidden=filtered;
  selectedBar.hidden=!filtered;
  if(filtered) selectedTitle.textContent=value;
  if(updateUrl){
    const url=new URL(location.href);
    if(filtered) url.searchParams.set('category',reverseCategory[value]||'');
    else url.searchParams.delete('category');
    history.replaceState({},'',url.pathname+(url.search?url.search:'')+url.hash);
  }
  render();
  if(scroll){
    const target=filtered?selectedBar:categoryStrip;
    target.scrollIntoView({behavior:'smooth',block:'start'});
  }
}

function productCard(p){
  const media = p.image
    ? `<div class="product-media"><img src="assets/img/products/${p.image}" alt="${p.name}" loading="lazy"></div>`
    : '';
  return `<article class="product${p.image?' has-image':''}">
    ${media}
    <div class="product-body">
      <div class="product-category">${p.category}</div>
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <a class="product-quote" href="index.html#contact">Request Quote <span aria-hidden="true">→</span></a>
    </div>
  </article>`;
}

function render(){
  const q=search.value.toLowerCase().trim();
  const c=category.value;
  const list=products.filter(p=>(c==='all'||p.category===c)&&(!q||`${p.name} ${p.category} ${p.description}`.toLowerCase().includes(q)));
  grid.innerHTML=list.map(productCard).join('');
  empty.style.display=list.length?'none':'block';
}

const params=new URLSearchParams(location.search);
const qp=params.get('category');
const searchQuery=params.get('q');
if(searchQuery) search.value=searchQuery;

if(qp&&queryCategory[qp]) setCategoryView(queryCategory[qp]);
else setCategoryView('all');

search.addEventListener('input',render);
category.addEventListener('change',()=>setCategoryView(category.value,{updateUrl:true,scroll:true}));
viewAll.addEventListener('click',()=>setCategoryView('all',{updateUrl:true,scroll:true}));
