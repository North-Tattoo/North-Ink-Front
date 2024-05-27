import React from "react";
import SidebarGerenciamentoConta from "@/components/sidebar/Sidebar";

function Estudio() {
  return (
      <div style={{display: "flex"}}>
        <SidebarGerenciamentoConta />
        <div>
            <h1>Estudio PAGE</h1>
            <h3>Welcome User</h3>
            <p>Lorem ipsum dolor sit amet...</p>
       </div>
    </div>
  );
}

export default Estudio;