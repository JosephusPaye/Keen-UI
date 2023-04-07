# Exit on first error, treat unset variables as errors
set -eu

NEXT_BRANCH="paye/auto-publish-docs" # TODO: Change this to `next` before merging
GH_PAGES_BRANCH="gh-pages"

echo "NEXT_BRANCH: $NEXT_BRANCH"
echo "GH_PAGES_BRANCH: $GH_PAGES_BRANCH"

# Read --push flag
DO_PUSH=false
for arg in "$@"; do
  if [[ $arg == "--push" ]]; then
    DO_PUSH=true
  fi
done

echo "DO_PUSH: $DO_PUSH"

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
rm -rf next && cp -r docs next

# Exit if there are no changes to the `next` directory
HAS_NEXT_DIR_CHANGES=$(git diff --quiet --exit-code next)
if [[ $HAS_NEXT_DIR_CHANGES == 0 ]]; then
  echo "No changes to built \`next\` docs, skipping publish."
  exit 0
fi

echo ""
echo "Committing the changes..."
git add next
git -c user.name="Josephus Paye II" -c user.email="j.paye96@gmail.com" \
  commit -m "Add \`next\` docs for commit $NEXT_LAST_COMMIT"

# Push the changes to the `gh-pages` branch
if [[ $DO_PUSH == true ]]; then
  echo ""
  echo "Pushing the changes to the $GH_PAGES_BRANCH branch..."
  git push origin $GH_PAGES_BRANCH
else
  echo ""
  echo "Skipping push to the $GH_PAGES_BRANCH branch, use the --push flag to push."
fi
