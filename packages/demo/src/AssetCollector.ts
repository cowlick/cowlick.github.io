import * as core from "@cowlick/core";

export class AssetCollector extends core.DefaultAssetCollector {
  collectScript(script: core.Script): string[] {
    switch (script.tag as string) {
      case core.Tag.extension:
        return this.collectScript((script as core.Extension).data);
      default:
        return super.collectScript(script);
    }
  }
}
