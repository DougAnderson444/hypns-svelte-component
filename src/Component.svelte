<script>
  import HyPNS from "hypns" // uses the browser field in package.json
    
  import { onMount, onDestroy } from "svelte";

  // passed down from Parent component
  export let opts = {
    persist: false,
  };

  export let hypnsNode;

  onMount(() => {
    hypnsNode = new HyPNS(opts);

    // Close the HyPNS connection if the browser is closed
    window.addEventListener("unload", async (event) => {
      await hypnsNode.close();
    });
  });

  // this function will be called automatically when mounted svelte component is destroyed
  onDestroy(async () => await hypnsNode.close());
</script>
