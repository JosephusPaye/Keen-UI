# Exit on first error, treat unset variables as errors
set -eu

BRANCH_NEXT="next"
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

# Undo the change to the version, to switch branches
git checkout -- ./build/version.mjs

echo ""
echo "Switching to the $BRANCH_GH_PAGES branch..."
git checkout $BRANCH_GH_PAGES

echo ""
echo "Replacing the existing \`next\` docs with a copy of the new docs..."
rm -rf next && mv docs/ next/

# The built files have links to the `master` branch on GitHub.
# Find and replace those links to point to the next branch. Replace:
#   - `/tree/master` with `/tree/$BRANCH_NEXT`
#   - `/blob/master` with `/blob/$BRANCH_NEXT`
echo ""
echo "Replacing links to \`master\` with links to \`$BRANCH_NEXT\`..."
BRANCH_NEXT_SLASH_ESCAPED=$(echo "$BRANCH_NEXT" | sed 's/\//\\\//g')
find next/ -type f -exec sed -i -e "s/\/tree\/master/\/tree\/$BRANCH_NEXT_SLASH_ESCAPED/g" {} \;
find next/ -type f -exec sed -i -e "s/\/blob\/master/\/blob\/$BRANCH_NEXT_SLASH_ESCAPED/g" {} \;

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
