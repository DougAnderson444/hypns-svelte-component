# HyPNS Svelte Component

## Versions

'>= 2.80 Supports HyPNS v2.0'

'< 2.8.0 Supports HyPNS v1.0'

## An open/close wrapper for HyPNS

```js
npm i hypns-svelte-component
```

[HyPNS](https://github.com/DougAnderson444/HyPNS) uses [@corestore/networker](https://www.npmjs.com/package/@corestore/networker) which has networking that needs to opened and closed intelligently.

When using HyPNS, you need to remember to

```js
await HyPNS.close() // remembering things sucks, there's a better way! Let's use the computer
```

Instead of pushing this obligation out into userland, this handy little Svelte component wraps HyPNS with listeners that activate if:

-   The window is [terminated](https://developers.google.com/web/updates/2018/07/page-lifecycle-api#state-terminated) using [`"pagehide"`](https://developers.google.com/web/updates/2018/07/page-lifecycle-api#the-unload-event), or
-   The svelte component is destroyed, using [`"onDestroy"`](https://svelte.dev/docs#onDestroy)

## Notes

The "svelte" entry in package.json needs to be empty for this to work. Otherwise things break...

> TODO: Config the rollup to bundle alright even if "svelte" field is included.

## Development

Remember to build before git push.
