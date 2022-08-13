import * as path from 'path';
import { workspace, ExtensionContext } from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
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

  client = new LanguageClient("malgo-mode", serverOptions, clientOptions);
  client.start();
}

export function deactivate() {
  if (client) return client.stop();
}
