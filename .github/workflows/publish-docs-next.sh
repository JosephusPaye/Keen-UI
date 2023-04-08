# Exit on first error, treat unset variables as errors
set -eu

NEXT_BRANCH="paye/auto-publish-docs" # TODO: Change this to `next` before merging
GH_PAGES_BRANCH="gh-pages"

echo "NEXT_BRANCH: $NEXT_BRANCH"
echo "GH_PAGES_BRANCH: $GH_PAGES_BRANCH"

# Exit if the current branch is not `next`
if [[ $(git rev-parse --abbrev-ref HEAD) != "$NEXT_BRANCH" ]]; then
  echo "This script can only be run on the $NEXT_BRANCH branch."
  echo "Current branch: $(git rev-parse --abbrev-ref HEAD)"
  exit 1
fi

# Keep track of the current commit sha
NEXT_LAST_COMMIT=$(git rev-parse --short HEAD)
echo "NEXT_LAST_COMMIT: $NEXT_LAST_COMMIT"

echo ""
echo "Building docs..."
yarn build:docs

echo ""
echo "Switching to the $GH_PAGES_BRANCH branch..."
git checkout $GH_PAGES_BRANCH

echo ""
echo "Replacing the existing \`next\` docs with a copy of the new docs..."
rm -rf next && mv docs/ next/

# If there are changes in the built docs, commit and push them
if ! git diff --quiet -- next/; then
  echo ""
  echo "Committing the changes..."
  git add next/
  git -c user.name="Josephus Paye II" -c user.email="j.paye96@gmail.com" \
    commit -m "Add \`next\` docs for commit $NEXT_LAST_COMMIT"

  echo ""
  echo "Pushing the changes to the $GH_PAGES_BRANCH branch..."
  git push origin $GH_PAGES_BRANCH
else
  echo ""
  echo "No changes to built docs, skipping publish"
  exit 0
fi
