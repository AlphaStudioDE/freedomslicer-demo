function r(a,o){let e=document.createElement("style");e.textContent=`
    .layout-topbar{display:grid;height:100%;gap:16px;grid-template-columns:minmax(0,1fr) 310px;grid-template-rows:46px minmax(0,1fr) 124px}
    .layout-topbar>[data-slot=nav]{grid-column:1/3;grid-row:1;flex-direction:row;justify-content:flex-start;gap:4px;border-bottom:1px solid var(--line)}
    .layout-topbar>[data-slot=viewport]{grid-column:1;grid-row:2}
    .layout-topbar>[data-slot=settings]{grid-column:2;grid-row:2/4}
    .layout-topbar>[data-slot=activity]{grid-column:1;grid-row:3}
    .layout-topbar .nav-button{padding:10px 18px;gap:9px;font-size:12px}
    @media(max-width:1050px){.layout-topbar{grid-template-columns:minmax(0,1fr) 270px;gap:10px}}
  `;let t=document.createElement("section");return t.className="workspace layout-topbar",t.dataset.workspace="freedom.workspace.topbar",t.append(o.navigation,o.viewport,o.settings,o.activity),document.head.append(e),a.replaceChildren(t),{dispose(){t.remove(),e.remove()}}}export{r as mount};
