# @graphql-tools/url-loader

## 7.13.3

### Patch Changes

- 4dc7c3a0: Ignore readable stream errors after completion (browsers raise errors after canceling fetch requests)

## 7.13.2

### Patch Changes

- 3c8fb360: chore(deps): update @whatwg-node/fetch to fix vulnerability

## 7.13.1

### Patch Changes

- Updated dependencies [2a3b45e3]
  - @graphql-tools/utils@8.9.0
  - @graphql-tools/delegate@8.8.1
  - @graphql-tools/wrap@8.5.1

## 7.13.0

### Minor Changes

- e98c84a3: Handle SSE responses by using TextDecoderStream if fetch API returns ReadableStream but not AsyncIterable. Previously we handle that with some extra logic that is already available in TextDecoderStream

## 7.12.2

### Patch Changes

- eda0da95: Replace 'cross-undici-fetch' with '@whatwg-node/fetch' since the previous one is deprecated

## 7.12.1

### Patch Changes

- ead60ca3: Upgrade cross-undici-fetch to the latest that uses undici@5.5.1 as pinned dependency until the issues with 5.6.0 fixed

## 7.12.0

### Minor Changes

- adbf372c: Some environments like CF Workers don't support `credentials` in RequestInit object. But by default UrlLoader sends 'same-origin' and it wasn't possible to disable it. Now you can pass 'disable' to remove `credentials` property from RequestInit object completely.

  ```ts
  new UrlLoader().load(url, { credentials: 'disable' });
  ```

## 7.11.0

### Minor Changes

- d76a299c: Support TypeScript module resolution.

### Patch Changes

- Updated dependencies [a0abbbcd]
- Updated dependencies [d76a299c]
  - @graphql-tools/utils@8.8.0
  - @graphql-tools/delegate@8.8.0
  - @graphql-tools/wrap@8.5.0

## 7.10.0

### Minor Changes

- 4914970b: New 'batch' flag! Now you can configure your remote schema to batch parallel queries to the upstream.

### Patch Changes

- Updated dependencies [6df204de]
- Updated dependencies [4914970b]
  - @graphql-tools/delegate@8.7.12
  - @graphql-tools/utils@8.7.0
  - @graphql-tools/wrap@8.4.21

## 7.9.25

### Patch Changes

- 05218bfe: Handle legacy protocol properly

## 7.9.24

### Patch Changes

- 041c5ba1: Use caret range for the tslib dependency
- Updated dependencies [041c5ba1]
  - @graphql-tools/delegate@8.7.11
  - @graphql-tools/utils@8.6.13
  - @graphql-tools/wrap@8.4.20

## 7.9.23

### Patch Changes

- Updated dependencies [7c3b2797]
- Updated dependencies [da7ad43b]
  - @graphql-tools/wrap@8.4.19
  - @graphql-tools/utils@8.6.12
  - @graphql-tools/delegate@8.7.10

## 7.9.22

### Patch Changes

- Updated dependencies [c0762ee3]
  - @graphql-tools/utils@8.6.11
  - @graphql-tools/delegate@8.7.9
  - @graphql-tools/wrap@8.4.18

## 7.9.21

### Patch Changes

- Updated dependencies [0fc510cb]
  - @graphql-tools/utils@8.6.10
  - @graphql-tools/delegate@8.7.8
  - @graphql-tools/wrap@8.4.17

## 7.9.20

### Patch Changes

- ab0549cc: fix(url-loader): handle live queries as subscriptions correctly

## 7.9.19

### Patch Changes

- 627565a8: Bump cross-undici-fetch

## 7.9.18

### Patch Changes

- 84ae31ea: Bump cross-undici-fetch

## 7.9.17

### Patch Changes

- 3d89a26e: Bump cross-undici-fetch for Node 14 compat

## 7.9.16

### Patch Changes

- 4b70d2be: Bump cross-undici-fetch for Node 18 compatibility

## 7.9.15

### Patch Changes

- dd8563f1: Remove GraphQL Yoga dependency from url-loader

## 7.9.14

### Patch Changes

- Updated dependencies [31a33e2b]
  - @graphql-tools/utils@8.6.9
  - @graphql-tools/delegate@8.7.7
  - @graphql-tools/wrap@8.4.16

## 7.9.13

### Patch Changes

- 8d9f48bc: Remove graphql-sse dependency completely
- Updated dependencies [26e4b464]
  - @graphql-tools/delegate@8.7.6
  - @graphql-tools/wrap@8.4.15

## 7.9.12

### Patch Changes

- 43758d61: Remove subscriptions-transport-ws and graphql-sse dependency
- Updated dependencies [cb238877]
  - @graphql-tools/utils@8.6.8
  - @graphql-tools/delegate@8.7.5
  - @graphql-tools/wrap@8.4.14

## 7.9.11

### Patch Changes

- 0bbb1769: Refine generic typings using `extends X` when appropriate

  Typescript 4.7 has stricter requirements around generics
  which is explained well in the related PR:
  https://github.com/microsoft/TypeScript/pull/48366

  These changes resolve the errors that these packages will
  face when attempting to upgrade to TS 4.7 (still in beta
  at the time of writing this). Landing these changes now
  will allow other TS libraries which depend on these
  packages to experiment with TS 4.7 in the meantime.

- Updated dependencies [0bbb1769]
  - @graphql-tools/delegate@8.7.4
  - @graphql-tools/utils@8.6.7
  - @graphql-tools/wrap@8.4.13

## 7.9.10

### Patch Changes

- fe9402af: Bump data-loader and cross-undici-fetch
- Updated dependencies [fe9402af]
  - @graphql-tools/delegate@8.7.3
  - @graphql-tools/wrap@8.4.12

## 7.9.9

### Patch Changes

- Updated dependencies [904c0847]
  - @graphql-tools/utils@8.6.6
  - @graphql-tools/delegate@8.7.2
  - @graphql-tools/wrap@8.4.11

## 7.9.8

### Patch Changes

- @graphql-tools/delegate@8.7.1
- @graphql-tools/wrap@8.4.10

## 7.9.7

### Patch Changes

- Updated dependencies [d8fd6b94]
  - @graphql-tools/delegate@8.7.0
  - @graphql-tools/wrap@8.4.9

## 7.9.6

### Patch Changes

- Updated dependencies [be2c02d7]
  - @graphql-tools/utils@8.6.5
  - @graphql-tools/delegate@8.6.1
  - @graphql-tools/wrap@8.4.8

## 7.9.5

### Patch Changes

- Updated dependencies [c40e801f]
- Updated dependencies [d36d530b]
  - @graphql-tools/delegate@8.6.0
  - @graphql-tools/utils@8.6.4
  - @graphql-tools/wrap@8.4.7

## 7.9.4

### Patch Changes

- 0c0c6857: fix - align versions
- Updated dependencies [0c0c6857]
  - @graphql-tools/delegate@8.5.4
  - @graphql-tools/wrap@8.4.6

## 7.9.3

### Patch Changes

- 3da3d66c: fix - align versions
- Updated dependencies [3da3d66c]
  - @graphql-tools/wrap@8.4.5
  - @graphql-tools/utils@8.6.3

## 7.9.2

### Patch Changes

- c84840cd: fix(url-loader): get dynamic endpoint value correctly
- Updated dependencies [c84840cd]
  - @graphql-tools/wrap@8.4.4

## 7.9.1

### Patch Changes

- 6609981d: enhance(url-loader): improve executor generation

## 7.9.0

### Minor Changes

- 2c647764: enhance(url-loader): use JSON.parse(response.text()) to respect JSON.parse & stringify polyfills

## 7.8.0

### Minor Changes

- e351f661: feat(url-loader): retry/timeout
- e351f661: feat(url-loader): provide custom endpoint url in the extensions

## 7.7.2

### Patch Changes

- 18341363: feat(visitResult): ignore if field not present in visited object
- Updated dependencies [18341363]
  - @graphql-tools/delegate@8.5.1
  - @graphql-tools/wrap@8.4.2
  - @graphql-tools/utils@8.6.2

## 7.7.1

### Patch Changes

- d57c56d2: bump cross-undici-fetch

## 7.7.0

### Minor Changes

- 787f4b94: Added support for .graphqls extension to url-loader

## 7.6.0

### Minor Changes

- 21abe270: - Handle W3C File/Blob Inputs with multipart request
  - Better error message in case of bad response type

## 7.5.3

### Patch Changes

- 3a33c9d8: adjust accept headers sent to the server.

  - `text/event-stream` is only sent if Subscriptions are executed over SSE (GET).
  - `multipart/mixed` is only send for POST requests

## 7.5.2

### Patch Changes

- 63a29361: fix(url-loader): handle SSE ping event correctly

## 7.5.1

### Patch Changes

- ef9c3853: fix: bump Node <v16.5 compatible version

## 7.5.0

### Minor Changes

- 41d9a996: enhance: use undici instead of node-fetch if available

## 7.4.2

### Patch Changes

- 981eef80: enhance: remove isPromise and cleanup file-upload handling
- 4bfb3428: enhance: use ^ for tslib dependency
- Updated dependencies [981eef80]
- Updated dependencies [4bfb3428]
  - @graphql-tools/wrap@8.3.1
  - @graphql-tools/delegate@8.4.1
  - @graphql-tools/utils@8.5.1

## 7.4.1

### Patch Changes

- 5dfea0b5: Correctly handle response cancelation for SSE (subscriptions and live queries) and HTTP Multipart responses (defer and stream).

  `AbortController.signal` wasn't passed to `Request` while calling `fetch`, so it wasn't possible to stop the HTTP request by the user.

## 7.4.0

### Minor Changes

- ad04dc79: enhance: make operationType optional

### Patch Changes

- Updated dependencies [ad04dc79]
  - @graphql-tools/delegate@8.4.0
  - @graphql-tools/utils@8.5.0
  - @graphql-tools/wrap@8.3.0

## 7.3.0

### Minor Changes

- 9b1026dd: replace heavy lodash dependency with dset/merge

### Patch Changes

- 2563447a: fix(url-loader): handle SSE correctly with ReadableStream

## 7.2.1

### Patch Changes

- f895177e: fix(url-loader): incremental delivery for defer/stream and SSE

## 7.2.0

### Minor Changes

- eeba7390: Integrate and document `graphql-sse`

## 7.1.0

### Minor Changes

- c5b0719c: feat: GraphQL v16 support

### Patch Changes

- Updated dependencies [c5b0719c]
- Updated dependencies [c5b0719c]
- Updated dependencies [c5b0719c]
- Updated dependencies [c5b0719c]
- Updated dependencies [c5b0719c]
  - @graphql-tools/delegate@8.2.0
  - @graphql-tools/utils@8.2.0
  - @graphql-tools/wrap@8.1.0

## 7.0.12

### Patch Changes

- e4dc54de: Add missing `@types/ws` dependency
- Updated dependencies [c8c13ed1]
  - @graphql-tools/delegate@8.1.1
  - @graphql-tools/utils@8.1.2

## 7.0.11

### Patch Changes

- e50852e6: use version ranges instead of a fixed version for the graphql-tools package versions
- Updated dependencies [631b11bd]
- Updated dependencies [e50852e6]
  - @graphql-tools/delegate@8.1.0
  - @graphql-tools/wrap@8.0.13

## 7.0.10

### Patch Changes

- Updated dependencies [2c807ddb]
  - @graphql-tools/utils@8.1.1
  - @graphql-tools/delegate@8.0.10
  - @graphql-tools/wrap@8.0.12

## 7.0.9

### Patch Changes

- Updated dependencies [9a13357c]
  - @graphql-tools/delegate@8.0.9
  - @graphql-tools/wrap@8.0.11

## 7.0.8

### Patch Changes

- Updated dependencies [b9684631]
- Updated dependencies [9ede806a]
- Updated dependencies [67691b78]
  - @graphql-tools/utils@8.1.0
  - @graphql-tools/delegate@8.0.8
  - @graphql-tools/wrap@8.0.10

## 7.0.7

### Patch Changes

- Updated dependencies [d47dcf42]
  - @graphql-tools/delegate@8.0.7
  - @graphql-tools/wrap@8.0.7

## 7.0.6

### Patch Changes

- Updated dependencies [ded29f3d]
  - @graphql-tools/delegate@8.0.6
  - @graphql-tools/wrap@8.0.6

## 7.0.5

### Patch Changes

- Updated dependencies [7fdef335]
  - @graphql-tools/delegate@8.0.5
  - @graphql-tools/wrap@8.0.5

## 7.0.4

### Patch Changes

- Updated dependencies [04830049]
  - @graphql-tools/utils@8.0.2
  - @graphql-tools/delegate@8.0.4
  - @graphql-tools/wrap@8.0.4

## 7.0.3

### Patch Changes

- Updated dependencies [b823dbaf]
  - @graphql-tools/utils@8.0.1
  - @graphql-tools/delegate@8.0.3
  - @graphql-tools/wrap@8.0.3

## 7.0.2

### Patch Changes

- Updated dependencies [d93945fa]
  - @graphql-tools/delegate@8.0.2
  - @graphql-tools/wrap@8.0.2

## 7.0.1

### Patch Changes

- c36defbe: fix(delegate): fix ESM import
- Updated dependencies [c36defbe]
  - @graphql-tools/delegate@8.0.1
  - @graphql-tools/wrap@8.0.1

## 7.0.0

### Major Changes

- af9a78de: BREAKING CHANGE

  - Now each loader handles glob patterns internally and returns an array of `Source` object instead of single `Source`

  - GraphQL Tag Pluck now respects code locations and returns graphql-js `Source` objects for each found code block

  - Thanks to the one above, `CodeFileLoader` now returns different `Source` objects for each found SDL code block.

- 614c08cc: BREAKING CHANGE
  - Remove `handleSDLAsync` and `handleSDLSync`; use `handleSDL` instead
  - Remove `useSSEForSubscription` and `useWebSocketLegacyProtocol`; use `subscriptionProtocol` instead
  - If introspection source is different than endpoint, use `endpoint` for remote execution source
  - Default HTTP Executor is renamed to `buildHTTPExecutor` with a new signature
  - `build*Subscriber` methods are renamed to `buildWSLegacyExecutor`, `buildWSExecutor` and `buildSSEExecutor` with new signatures
  - `getFetch` no longer takes `async` flag
- dae6dc7b: refactor: ExecutionParams type replaced by Request type

  rootValue property is now a part of the Request type.

  When delegating with delegateToSchema, rootValue can be set multiple ways:

  - when using a custom executor, the custom executor can utilize a rootValue in whichever custom way it specifies.
  - when using the default executor (execute/subscribe from graphql-js):
    -- rootValue can be passed to delegateToSchema via a named option
    -- rootValue can be included within a subschemaConfig
    -- otherwise, rootValue is inferred from the originating schema

  When using wrapSchema/stitchSchemas, a subschemaConfig can specify the createProxyingResolver function which can pass whatever rootValue it wants to delegateToSchema as above.

- c0ca3190: BREAKING CHANGE
  - Remove Subscriber and use only Executor
  - - Now `Executor` can receive `AsyncIterable` and subscriptions will also be handled by `Executor`. This is a future-proof change for defer, stream and live queries
- 7d3e3006: BREAKING CHANGE

  - No more accept arrays or functions for `headers`

  NEW FEATURES

  - Respect `operationName` and `extensions`
  - Ability to get headers from `extensions.headers`

### Patch Changes

- a31f9593: enhance(url-loader): avoid doing extra work on loader level
- fd81e800: fix(url-loader): fix node support for EventSource
- Updated dependencies [af9a78de]
- Updated dependencies [7d3e3006]
- Updated dependencies [7d3e3006]
- Updated dependencies [9c26b847]
- Updated dependencies [7d3e3006]
- Updated dependencies [d53e3be5]
- Updated dependencies [7d3e3006]
- Updated dependencies [dae6dc7b]
- Updated dependencies [6877b913]
- Updated dependencies [c42e811d]
- Updated dependencies [7d3e3006]
- Updated dependencies [8c8d4fc0]
- Updated dependencies [c0ca3190]
- Updated dependencies [7d3e3006]
- Updated dependencies [aa43054d]
- Updated dependencies [7d3e3006]
- Updated dependencies [74581cf3]
- Updated dependencies [c0ca3190]
- Updated dependencies [982c8f53]
- Updated dependencies [7d3e3006]
- Updated dependencies [7d3e3006]
  - @graphql-tools/utils@8.0.0
  - @graphql-tools/delegate@8.0.0
  - @graphql-tools/wrap@8.0.0

## 6.10.1

### Patch Changes

- 491e77cf: enhance(url-loader): start legacy subscriptions connection lazily

## 6.10.0

### Minor Changes

- 20d2c7bc: feat(url-loader): multipart response support
- 20d2c7bc: feat(url-loader): ability to provide different subscriptionsEndpoint
  feat(url-loader): ability to provide headers factory that takes executionParams
- 77d63ab8: feat(url-loader): use fetch-event-source instead of sse-z

### Patch Changes

- Updated dependencies [20d2c7bc]
  - @graphql-tools/utils@7.9.0

## 6.9.0

### Minor Changes

- 854ce659: - Added support for legacy ws protocol
  - Ensured that headers are passed into ws connection params
- 947ccee8: feat(url-loader): ability to provide custom subscriptionsEndpoint

## 6.8.3

### Patch Changes

- 64663c45: chore(url-loader): Use compatible graphq-ws versioning

## 6.8.2

### Patch Changes

- 50bc2178: fix(url-loader): support newer cross-fetch

## 6.8.1

### Patch Changes

- f80ce4f4: enhance(url-loader/links): use new form-data that already supports streams

## 6.8.0

### Minor Changes

- c50deec5: chore(url-loader): bump graphql-ws version

## 6.7.1

### Patch Changes

- 298cd39e: fix(url-loader): do not fail multipart request when null variable given
- Updated dependencies [298cd39e]
  - @graphql-tools/utils@7.1.5

## 6.7.0

### Minor Changes

- cfe3e1f9: feat(url-loader): handle HTTP result as an SDL with handleAsSDL option

## 6.6.0

### Minor Changes

- 1ce1b9f7: feat(url-loader): support SSE for subscriptions

### Patch Changes

- 1ce1b9f7: fix(url-loader): fix issues with nonobject variables in multipart requests

## 6.5.0

### Minor Changes

- 4240a959: feat(url-loader): support graphql-ws and multipart requests and file upload

### Patch Changes

- Updated dependencies [4240a959]
- Updated dependencies [4240a959]
  - @graphql-tools/wrap@7.0.4
  - @graphql-tools/utils@7.1.4

## 6.4.0

### Minor Changes

- f9e72f2b: feat(url-loader): support loadSync

## 6.3.2

### Patch Changes

- 294dedda: fix(url-loader): fix typing mismatch
- Updated dependencies [294dedda]
- Updated dependencies [8133a907]
- Updated dependencies [2b6c813e]
  - @graphql-tools/delegate@7.0.1
  - @graphql-tools/utils@7.0.1

## 6.3.1

### Patch Changes

- Updated dependencies [be1a1575]
  - @graphql-tools/delegate@7.0.0
  - @graphql-tools/utils@7.0.0
  - @graphql-tools/wrap@7.0.0

## 6.3.0

### Minor Changes

- ead8c164: feat(url-loader): handle graphql sdl

## 6.2.4

### Patch Changes

- 533d6d53: Bump all packages to allow adjustments
- Updated dependencies [32c3c4f8]
- Updated dependencies [32c3c4f8]
- Updated dependencies [32c3c4f8]
- Updated dependencies [533d6d53]
  - @graphql-tools/wrap@6.2.4
  - @graphql-tools/utils@6.2.4
  - @graphql-tools/delegate@6.2.4
