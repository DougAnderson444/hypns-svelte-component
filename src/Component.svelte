<script>
  // Import rollup verison (es module)
  // TODO: configure Rollup so that these work too
  // import * as HyPNS from "HyPNS/dist/index.browser.js"; // Rollup UMD for browser; require is not defined
  // import * as HyPNS from "HyPNS/browser/index.mjs"; // No native build (node-gyp-build)
  // import * as HyPNS from "HyPNS"; // No native build (node-gyp-build)
  
  // Import browserify version (umd module)
  import HyPNS from "../hypns-bundle.js" 
  // import { hypns } from "../../HyPNS/browser/hypns-bundle" // WTF? 'hypns' is not exported by HyPNS
  
  import { onMount, onDestroy } from "svelte";

  // passed down from Parent component
  export let opts = {
    persist: false,
  };

  export let hypnsNode;

  onMount(() => {
    hypnsNode = new HyPNS(opts);
    console.log('hypnsNode is: ', hypnsNode)

    // Close the HyPNS connection if the browser is closed
    window.addEventListener("unload", async (event) => {
      await hypnsNode.close();
    });
  });

  // this function will be called automatically when mounted svelte component is destroyed
  onDestroy(async () => await hypnsNode.close());
</script>
