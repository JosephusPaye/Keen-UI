# Exit on first error, treat unset variables as errors
set -eu

BRANCH_NEXT="paye/auto-publish-docs" # TODO: Change this to `next` before merging
BRANCH_GH_PAGES="gh-pages"

echo "BRANCH_NEXT: $BRANCH_NEXT"
echo "BRANCH_GH_PAGES: $BRANCH_GH_PAGES"

# Exit if the current branch is not the next branch
if [[ $(git rev-parse --abbrev-ref HEAD) != "$BRANCH_NEXT" ]]; then
  echo "This script can only be run on the $BRANCH_NEXT branch."
  echo "Current branch: $(git rev-parse --abbrev-ref HEAD)"
  exit 1
fi

# Keep track of the current commit sha
LAST_COMMIT_ON_NEXT=$(git rev-parse --short HEAD)
echo "LAST_COMMIT_ON_NEXT: $LAST_COMMIT_ON_NEXT"

# Change the version to "next" before building the docs
echo "export default \"next\";" > ./build/version.mjs

echo ""
echo "Building docs..."
yarn build:docs

echo ""
echo "Switching to the $BRANCH_GH_PAGES branch..."
git checkout $BRANCH_GH_PAGES

echo ""
echo "Replacing the existing \`next\` docs with a copy of the new docs..."
rm -rf next && mv docs/ next/

# If there are changes in the built docs, commit and push them
if ! git diff --quiet -- next/; then
  echo ""
  echo "Committing the changes..."
  git add next/
  git -c user.name="Josephus Paye II" -c user.email="j.paye96@gmail.com" \
    commit -m "Add \`next\` docs for commit $LAST_COMMIT_ON_NEXT"

  echo ""
  echo "Pushing the changes to the $BRANCH_GH_PAGES branch..."
  git push origin $BRANCH_GH_PAGES
else
  echo ""
  echo "No changes to built docs, skipping publish"
  exit 0
fi
