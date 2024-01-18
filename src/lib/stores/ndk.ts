import NDKSvelte from '@nostr-dev-kit/ndk-svelte';

export let base_relays = import.meta.env.DEV
    ? [
        "ws://localhost:8055",
    ]
    : [
        "wss://relayable.org",
        "wss://relay.f7z.io",
        "wss://relay.damus.io",
        "wss://relay.snort.social",
        // "wss://nostr.wine/",
        // "wss://eden.nostr.land/",
        // "wss://relay.nostr.band/",

    ];

// TODO: fallback_relays for if profile cannot be found

export const ndk = new NDKSvelte({
    explicitRelayUrls: [...base_relays],
});

ndk.connect();
