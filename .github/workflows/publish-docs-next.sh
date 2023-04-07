# Exit on first error, treat unset variables as errors, and print commands as they're executed
set -eux

NEXT_BRANCH="paye/auto-publish-docs" # TODO: Change this to `next` before merging
GH_PAGES_BRANCH="gh-pages"

# Read --push flag
DO_PUSH=false
for arg in "$@"; do
  if [[ $arg == "--push" ]]; then
    DO_PUSH=true
  fi
done

# Exit if the current branch is not `next`
if [[ $(git rev-parse --abbrev-ref HEAD) != "$NEXT_BRANCH" ]]; then
  echo "This script can only be run on the $NEXT_BRANCH branch."
  echo "Current branch: $(git rev-parse --abbrev-ref HEAD)"
  exit 1
fi

# Keep track of the current commit sha
NEXT_LAST_COMMIT=$(git rev-parse --short HEAD)

# Build the docs
yarn build:docs

# Switch to the `gh-pages` branch
git checkout $GH_PAGES_BRANCH

# Replace the existing next docs with a copy of the new docs
rm -rf next && cp -r docs next

# Commit the changes to the `next` folder
if [[ -n $(git status --porcelain) ]]; then
  git add next
  git -c user.name="Josephus Paye II" -c user.email="j.paye96@gmail.com" \
    commit -m "Add \`next\` docs for commit $NEXT_LAST_COMMIT"
fi

# Push the changes to the `gh-pages` branch
if [[ $DO_PUSH == true ]]; then
  git push origin $GH_PAGES_BRANCH
fi
