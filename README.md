# HyPNS Svelte Component

A Svelte wrapper for [HyPNS](https://github.com/DougAnderson444/HyPNS)

## Install

```js
npm i hypns-svelte-component
```

## Rationale

[HyPNS](https://github.com/DougAnderson444/HyPNS) uses [@corestore/networker](https://www.npmjs.com/package/@corestore/networker) which has networking that should be opened and closed intelligently.

Notably, when using HyPNS, you should remember to

```js
await HyPNS.close(); // remembering things sucks, there's a better way! Let's use the computer
```

Instead of pushing this obligation out into userland, this handy little Svelte component wraps HyPNS with listeners that activate if:

- The window is [terminated](https://developers.google.com/web/updates/2018/07/page-lifecycle-api#state-terminated) using [`"pagehide"`](https://developers.google.com/web/updates/2018/07/page-lifecycle-api#the-unload-event), or
- The svelte component is destroyed, using [`"onDestroy"`](https://svelte.dev/docs#onDestroy)

## Demo

This repo comes with a demo that runs using

```
npm run dev
```

The demo shows how to use a keypair, provided by the PeerPiper web wallet, to sign posts to HYPNS.

## Versions

'>= 2.80 Supports HyPNS v2.0'

'< 2.8.0 Supports HyPNS v1.0'
