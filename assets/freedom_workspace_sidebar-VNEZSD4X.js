function o(i,t){let a=document.createElement("style");a.textContent=`
    .layout-sidebar{display:grid;height:100%;gap:12px;grid-template-columns:72px minmax(0,1fr) 310px;grid-template-rows:minmax(0,1fr) 104px}
    .layout-sidebar>[data-slot=nav]{grid-column:1;grid-row:1/3;flex-direction:column;padding:16px 0;border-right:1px solid var(--line)}
    .layout-sidebar>[data-slot=viewport]{grid-column:2;grid-row:1}
    .layout-sidebar>[data-slot=settings]{grid-column:3;grid-row:1/3}
    .layout-sidebar>[data-slot=activity]{grid-column:2;grid-row:2}
    .layout-sidebar .nav-button{width:68px;flex-direction:column;gap:7px;padding:14px 2px;font-size:10px}
    @media(max-width:1050px){.layout-sidebar{grid-template-columns:62px minmax(0,1fr) 270px;gap:10px}.layout-sidebar .nav-button{width:60px}}
  `;let e=document.createElement("section");return e.className="workspace layout-sidebar",e.dataset.workspace="freedom.workspace.sidebar",e.append(t.navigation,t.viewport,t.settings,t.activity),document.head.append(a),i.replaceChildren(e),{dispose(){e.remove(),a.remove()}}}export{o as mount};
