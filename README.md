# Keen UI Docs

This branch holds the docs that are served at [https://josephuspaye.github.io/Keen-UI](https://josephuspaye.github.io/Keen-UI).

Keen UI's actual source code is available on these branches:

- Latest published version: [master branch](https://github.com/JosephusPaye/Keen-UI/tree/master).
- Most recent changes: [next branch](https://github.com/JosephusPaye/Keen-UI/tree/next).

The docs are developed and compiled on the `next` and `master` branches, then copied here to the `gh-pages` branch for versioning and deployment. See the [deploy script](./update_docs.sh) for details.

## Docs versioning

The docs for the latest version resides at the root of this branch, and is also duplicated in its own version folder. Links to source code on GitHub in the latest docs (at the root and in the version folder) point to the `master` branch.

Docs for older versions are in their respective version folders. Links to source code on GitHub in these older doc versions point to the specific branch for the doc's version. There's one branch for all patch versions of a given minor version, e.g. `1.1.0`, `1.1.1`, `1.1.2`, etc. all point to the `1.1` branch.
