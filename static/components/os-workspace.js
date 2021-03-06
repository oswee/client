const workspace = document.createElement('template');

workspace.innerHTML = `
    <style>
    :host {
        flex: 1;
    }

    .workspace {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .toolbar {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 32px;
        border-bottom: 1px solid #A2C8FF;
    }

    .ws-panels {
        display: flex;
        width: 100%;
        flex: 1;
        flex-direction: row;
        box-sizing: border-box;
        //border: 3px solid red;
    }
    .sidebar {
        display: none;
    }
    .main-panel {
        flex: 1;
        border-right: 1px solid #A2C8FF;
    }
    .right-panel {
        flex: 1;
        display: flex;
        flex-direction: column;
        //border: 3px solid orange;
    }
    .statusbar {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 22px;
        border-top: 1px solid #A2C8FF;
        background-color: #E7F1FF;
        font-size: 0.7em;
        padding: 0 6px;
    }

    </style>
    <div class="workspace">
        <nav class="toolbar"><slot name="ws-toolbar"></slot></nav>
        <div class="ws-panels">
            <div class="sidebar"><slot name="ws-sidebar"></slot></div>
            <div class="main-panel"><slot name="ws-main-panel"></slot></div>
            <div class="right-panel"><slot name="ws-right-panel"></slot></div>
        </div>
        <div class="statusbar"><slot name="ws-statusbar"></slot></div>
    </div>
`;

customElements.define('os-workspace', class extends HTMLElement {
    constructor() {
        super();
        let shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(workspace.content.cloneNode(true))
    }
});