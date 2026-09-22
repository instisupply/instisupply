/*
  InstiSupply catalogue data and renderer.
  Product records below are the single source of truth for both catalog.html
  and the product grids on the individual category landing pages.
*/
const categories=[
  {key:"stationery",name:"Stationery & Paper",page:"stationery-paper.html",image:"category-stationery-paper.webp",alt:"Stationery and paper supplies",status:"active"},
  {key:"printer",name:"Printer & IT Consumables",page:"printer-it-consumables.html",image:"category-printer-it.webp",alt:"Printer and IT consumables",status:"active"},
  {key:"hygiene",name:"Hygiene & Tissue",page:"hygiene-tissue.html",image:"category-hygiene-tissue.webp",alt:"Hygiene and tissue supplies",status:"active"},
  {key:"cleaning",name:"Cleaning & Janitorial",page:"cleaning-janitorial.html",image:"category-cleaning-janitorial.webp",alt:"Cleaning and janitorial supplies",status:"active"},
  {key:"pantry",name:"Pantry & Disposables",page:"pantry-disposables.html",image:"category-pantry-disposables.webp",alt:"Pantry and disposable supplies",status:"active"},
  {key:"ppe",name:"PPE & Safety",page:"ppe-safety.html",image:"category-ppe-safety.webp",alt:"PPE and safety supplies",status:"active"},
  {key:"foodpack",name:"Food Packaging Supplies",page:"food-packaging-supplies.html",image:"category-food-packaging.webp",alt:"Food packaging supplies for supermarkets, grocery stores and food service",status:"active"}
];

const products=[
  {name:"A4 Copier Paper 80gsm", category:"Stationery & Paper", description:"Office copier paper available in ream and carton quantities.", image:"", status:"active"},
  {name:"A3 Copier Paper", category:"Stationery & Paper", description:"A3 copier paper for office, education and print-room applications.", image:"", status:"active"},
  {name:"Ballpoint Pens", category:"Stationery & Paper", description:"Blue, black and red ballpoint pens supplied in bulk packs.", image:"", status:"active"},
  {name:"Permanent Markers", category:"Stationery & Paper", description:"Permanent markers available in assorted colours and tip sizes.", image:"", status:"active"},
  {name:"Whiteboard Markers", category:"Stationery & Paper", description:"Dry-erase markers for classrooms, training rooms and meeting spaces.", image:"", status:"active"},
  {name:"Lever Arch Files", category:"Stationery & Paper", description:"Lever arch filing solutions in multiple spine sizes and colours.", image:"", status:"active"},
  {name:"Notebooks & Writing Pads", category:"Stationery & Paper", description:"Notebooks, memo pads and writing pads for office and classroom use.", image:"", status:"active"},
  {name:"Labels & Envelopes", category:"Stationery & Paper", description:"Common office label and envelope sizes for daily administrative use.", image:"", status:"active"},
  {name:"Laser Toner Cartridges", category:"Printer & IT Consumables", description:"OEM and approved compatible toner options, supplied according to printer model.", image:"", status:"active"},
  {name:"Ink Cartridges", category:"Printer & IT Consumables", description:"Ink cartridges for commonly used business printer models.", image:"", status:"active"},
  {name:"Thermal / Barcode Labels", category:"Printer & IT Consumables", description:"Thermal and barcode label rolls for office, logistics and operational applications.", image:"", status:"active"},
  {name:"Batteries", category:"Printer & IT Consumables", description:"AA, AAA and other commonly required battery sizes for workplace equipment.", image:"", status:"active"},
  {name:"Facial Tissue Boxes", category:"Hygiene & Tissue", description:"Facial tissue boxes supplied in institutional and bulk-carton quantities.", image:"", status:"active"},
  {name:"Jumbo Toilet Rolls", category:"Hygiene & Tissue", description:"Commercial jumbo toilet rolls for high-traffic washrooms and facilities.", image:"", status:"active"},
  {name:"Hand Towel Rolls", category:"Hygiene & Tissue", description:"Hand towel rolls suitable for commercial washroom dispensers.", image:"", status:"active"},
  {name:"Interfold Hand Towels", category:"Hygiene & Tissue", description:"Interfold paper hand towels for institutional washrooms and dispensers.", image:"", status:"active"},
  {name:"Liquid Handwash 5L", category:"Hygiene & Tissue", description:"Bulk liquid handwash refills for offices, schools, healthcare and facilities.", image:"", status:"active"},
  {name:"Hand Sanitizer", category:"Hygiene & Tissue", description:"Hand sanitizer supplied in multiple bottle and refill sizes.", image:"", status:"active"},
  {name:"Heavy-Duty Garbage Bags", category:"Cleaning & Janitorial", description:"Commercial refuse bags available in multiple colours, gauges and capacities.", image:"", status:"active"},
  {name:"Microfiber Cloths", category:"Cleaning & Janitorial", description:"Reusable microfiber cleaning cloths for general facility and surface cleaning.", image:"", status:"active"},
  {name:"Floor Cleaner", category:"Cleaning & Janitorial", description:"Commercial floor-cleaning solutions in institutional pack sizes.", image:"", status:"active"},
  {name:"Glass Cleaner", category:"Cleaning & Janitorial", description:"Glass and multi-surface cleaner available in ready-to-use and bulk formats.", image:"", status:"active"},
  {name:"Mops & Handles", category:"Cleaning & Janitorial", description:"Commercial mop heads, handles and related cleaning equipment.", image:"", status:"active"},
  {name:"Waste Bins", category:"Cleaning & Janitorial", description:"Waste bins for offices, washrooms, common areas and facility operations.", image:"", status:"active"},
  {name:"Paper Cups", category:"Pantry & Disposables", description:"Disposable paper cups for hot and cold beverages in institutional settings.", image:"", status:"active"},
  {name:"Disposable Cutlery", category:"Pantry & Disposables", description:"Disposable forks, spoons and knives supplied in individual or bulk packs.", image:"", status:"active"},
  {name:"Paper Napkins", category:"Pantry & Disposables", description:"Paper napkins for staff pantries, canteens, meetings and events.", image:"", status:"active"},
  {name:"Disposable Plates", category:"Pantry & Disposables", description:"Disposable plates available in multiple sizes and material options.", image:"", status:"active"},
  {name:"Disposable Face Masks", category:"PPE & Safety", description:"General-purpose disposable face masks; required specification is confirmed at RFQ stage.", image:"", status:"active"},
  {name:"Disposable Gloves", category:"PPE & Safety", description:"Nitrile, latex and vinyl disposable glove options subject to user requirements.", image:"", status:"active"},
  {name:"Shoe Covers", category:"PPE & Safety", description:"Disposable shoe covers for general workplace and controlled-area use.", image:"", status:"active"},
  {name:"Disposable Protective Gowns", category:"PPE & Safety", description:"Disposable protective gowns; material and protection specification confirmed at RFQ stage.", image:"", status:"active"},
  {name:"Produce Bags on Rolls", category:"Food Packaging Supplies", description:"Perforated food-grade bags on rolls for loose fruits and vegetables in supermarkets, hypermarkets, grocery stores and fresh-produce departments.", image:"", status:"active"},
  {name:"Food Storage Bags", category:"Food Packaging Supplies", description:"Food-contact storage bags in assorted sizes for fresh produce, bakery, preparation and general food handling requirements.", image:"", status:"active"},
  {name:"Cling Film / Food Wrap", category:"Food Packaging Supplies", description:"Commercial food wrap and cling film rolls for kitchens, catering operations, food preparation and storage.", image:"", status:"active"},
  {name:"Aluminium Foil Rolls", category:"Food Packaging Supplies", description:"Commercial aluminium foil rolls for food preparation, wrapping, catering and takeaway applications.", image:"", status:"active"},
  {name:"Takeaway Food Containers", category:"Food Packaging Supplies", description:"Disposable takeaway containers in multiple sizes and material options, subject to food type and application.", image:"", status:"active"},
  {name:"Food Packaging Trays", category:"Food Packaging Supplies", description:"Food trays for fresh produce, bakery, prepared food and retail presentation, with specifications confirmed at RFQ stage.", image:"", status:"active"},
  {name:"Paper Food Bags", category:"Food Packaging Supplies", description:"Paper bags for bakery, snacks, takeaway and general food-service packaging in assorted sizes.", image:"", status:"active"},
  {name:"Kraft Takeaway Bags", category:"Food Packaging Supplies", description:"Kraft paper carry bags for takeaway, catering, bakery and food-service orders in multiple sizes.", image:"", status:"active"},
  {name:"Bakery & Sandwich Packaging", category:"Food Packaging Supplies", description:"Packaging options for sandwiches, bakery items, pastries and grab-and-go food, selected according to product requirements.", image:"", status:"active"}
];

const VALID_STATUSES=new Set(["active","unavailable","hidden"]);
const normaliseStatus=value=>VALID_STATUSES.has(value)?value:"active";
const isCategoryActive=c=>normaliseStatus(c.status)==="active";
const isProductActive=p=>normaliseStatus(p.status)==="active";
const activeCategories=()=>categories.filter(isCategoryActive);
const activeCategoryNames=()=>new Set(activeCategories().map(c=>c.name));
const activeProducts=()=>{
  const names=activeCategoryNames();
  return products.filter(p=>names.has(p.category)&&isProductActive(p));
};
const categoryByKey=Object.fromEntries(categories.map(c=>[c.key,c]));
const keyByCategory=Object.fromEntries(categories.map(c=>[c.name,c.key]));

function productCard(p){
  const media=p.image
    ? `<div class="product-media"><img src="assets/img/products/${p.image}" alt="${p.name}" loading="lazy"></div>`
    : "";
  return `<article class="product${p.image?' has-image':''}">${media}<div class="product-body"><div class="product-category">${p.category}</div><h3>${p.name}</h3><p>${p.description}</p><a class="product-quote" href="index.html#contact">Request Quote <span aria-hidden="true">→</span></a></div></article>`;
}

/* Hide category links/cards anywhere on the site when the category is not active.
   This keeps the homepage, footer and other static navigation in sync with catalog.js. */
function applyCategoryVisibility(){
  categories.forEach(c=>{
    if(isCategoryActive(c)) return;
    document.querySelectorAll(`a[href="${c.page}"], a[href="./${c.page}"]`).forEach(a=>{
      const card=a.closest('.category-card, article');
      (card||a).hidden=true;
    });
  });
}

function renderCategoryLanding(grid){
  const categoryName=grid.dataset.category;
  const c=categories.find(x=>x.name===categoryName);
  if(!c) return;
  const state=normaliseStatus(c.status);
  if(state!=="active"){
    const section=grid.closest('.section');
    if(section){
      const title=state==="unavailable" ? `${c.name} are temporarily unavailable.` : `This category is not currently listed.`;
      const msg=state==="unavailable"
        ? `This category is temporarily unavailable. Please browse our other institutional supply categories or contact us regarding your requirements.`
        : `This category is not currently part of our published range. Please browse our other institutional supply categories.`;
      section.innerHTML=`<div class="container"><div class="category-status-panel"><span class="eyebrow">CATEGORY UPDATE</span><h2>${title}</h2><p>${msg}</p><div class="category-landing-actions"><a class="btn btn-primary" href="catalog.html">Browse Full Catalogue</a><a class="btn btn-outline" href="index.html#contact">Contact InstiSupply</a></div></div></div>`;
    }
    return;
  }
  const list=products.filter(p=>p.category===categoryName&&isProductActive(p));
  grid.innerHTML=list.map(productCard).join('');
  if(!list.length) grid.innerHTML='<div class="category-status-panel"><h3>No products are currently listed in this category.</h3><p>Please contact us regarding your requirements.</p></div>';
}

function initFullCatalog(){
  const grid=document.getElementById('product-grid');
  const search=document.getElementById('search');
  const category=document.getElementById('category');
  const empty=document.getElementById('empty');
  const categoryStrip=document.getElementById('category-strip');
  const categoryGrid=categoryStrip?.querySelector('.category-grid');
  const selectedBar=document.getElementById('selected-category-bar');
  const selectedTitle=document.getElementById('selected-category-title');
  const viewAll=document.getElementById('view-all-categories');
  if(!grid||!search||!category||!empty) return false;

  const visibleCategories=activeCategories();
  category.innerHTML='<option value="all">All categories</option>'+visibleCategories.map(c=>`<option value="${c.name}">${c.name}</option>`).join('');
  if(categoryGrid){
    categoryGrid.innerHTML=visibleCategories.map(c=>`<a class="category-card" href="?category=${c.key}"><img src="assets/img/${c.image}" alt="${c.alt}" loading="lazy"><div><span>${c.name}</span><b>→</b></div></a>`).join('');
  }

  function render(){
    const q=search.value.toLowerCase().trim();
    const c=category.value;
    const list=activeProducts().filter(p=>(c==='all'||p.category===c)&&(!q||`${p.name} ${p.category} ${p.description}`.toLowerCase().includes(q)));
    grid.innerHTML=list.map(productCard).join('');
    empty.style.display=list.length?'none':'block';
  }

  function setCategoryView(value,{updateUrl=false,scroll=false}={}){
    const targetCategory=visibleCategories.find(c=>c.name===value);
    if(value!=="all"&&!targetCategory) value="all";
    category.value=value;
    const filtered=value!=="all";
    if(categoryStrip) categoryStrip.hidden=filtered;
    if(selectedBar) selectedBar.hidden=!filtered;
    if(filtered&&selectedTitle) selectedTitle.textContent=value;
    if(updateUrl){
      const url=new URL(location.href);
      if(filtered) url.searchParams.set('category',keyByCategory[value]||'');
      else url.searchParams.delete('category');
      history.replaceState({},'',url.pathname+(url.search?url.search:'')+url.hash);
    }
    render();
    if(scroll){
      const target=filtered?selectedBar:categoryStrip;
      target?.scrollIntoView({behavior:'smooth',block:'start'});
    }
  }

  const params=new URLSearchParams(location.search);
  const qp=params.get('category');
  const searchQuery=params.get('q');
  if(searchQuery) search.value=searchQuery;
  const requested=qp&&categoryByKey[qp];
  if(requested&&isCategoryActive(requested)) setCategoryView(requested.name);
  else setCategoryView('all');

  search.addEventListener('input',render);
  category.addEventListener('change',()=>setCategoryView(category.value,{updateUrl:true,scroll:true}));
  viewAll?.addEventListener('click',()=>setCategoryView('all',{updateUrl:true,scroll:true}));
  return true;
}

applyCategoryVisibility();
if(!initFullCatalog()){
  document.querySelectorAll('.product-grid[data-category]').forEach(renderCategoryLanding);
}
