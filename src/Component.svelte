<script>
  import HyPNS from "hypns"; // uses the browser field in package.json

  import { onMount, onDestroy } from "svelte";

  // passed down from Parent component
  export let opts = {
    persist: false,
  };

  export let hypnsNode;

  onMount(() => {
    hypnsNode = new HyPNS(opts);

    // Close the HyPNS connection if the browser is closed
    // https://developers.google.com/web/updates/2018/07/page-lifecycle-api#the-unload-event
    const terminationEvent = "onpagehide" in self ? "pagehide" : "unload";

    addEventListener(
      terminationEvent,
      async (event) => {
        await hypnsNode.close();
        // Note: if the browser is able to cache the page, `event.persisted`
        // is `true`, and the state is frozen rather than terminated.
      },
      { capture: true }
    );
  });

  // this function will be called automatically when mounted svelte component is destroyed
  onDestroy(async () => await hypnsNode.close());
</script>
