# Tristan Sun — personal homepage

Static homepage for GitHub Pages. Includes the public profile, publications,
education and experience, with links to the hosted blog and learning notes.
The editor, accounts, reader approvals and database remain on the original host.

## Publish

1. Sign in to the intended GitHub account.
2. Create or open its `<username>.github.io` repository. Check for an existing
   homepage before uploading; do not overwrite existing work without review.
3. Upload the contents of this directory to the repository root on `main`.
4. In Settings → Pages, select Deploy from a branch, then `main` and `/(root)`.
5. Visit `https://<username>.github.io/` after deployment completes.

To update this export, run `node scripts/export-github-pages.mjs` in the source
project and upload the regenerated contents. No npm build is needed on GitHub.
