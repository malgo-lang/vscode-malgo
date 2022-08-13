"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const node_1 = require("vscode-languageclient/node");
let client;
function activate(context) {
    const serverOptions = {
        command: "malgo",
        args: [
            "lsp"
        ],
    };
    const clientOptions = {
        documentSelector: [
            {
                scheme: "file",
                language: "malgo",
            }
        ],
    };
    client = new node_1.LanguageClient("malgo-mode", serverOptions, clientOptions);
    client.start();
}
exports.activate = activate;
function deactivate() {
    if (client)
        return client.stop();
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map