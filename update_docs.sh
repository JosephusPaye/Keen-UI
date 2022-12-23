# Exit on first error, treat unset variables as errors, and print commands as they're executed
set -eux

# Checkout the `gh-pages` branch
git checkout gh-pages

# Source the `version.sh` file to get the current version
source version.sh

# Truncate the current version to major and minor only
CURRENT_VERSION_MINOR=${CURRENT_VERSION%.*}

# Checkout the `package.json` file from master, to get the new version
git checkout origin/master package.json

# Read the new version into a variable
NEW_VERSION=$(node -p "require('./package.json').version")

# Truncate the new version to major and minor only
NEW_VERSION_MINOR=${NEW_VERSION%.*}

# Git automatically stages the checked out `package.json` file. Unstage and delete.
git reset HEAD package.json && rm package.json

# Exit if the new version is the same as the current version
if [[ $CURRENT_VERSION == $NEW_VERSION ]]; then
  echo "Current version ($CURRENT_VERSION) is the same as the new version from package.json ($NEW_VERSION). Skipping docs update."
  exit 0
fi

# The doc files in the current version folder and in the root folder have links to the `master` branch on GitHub.
# Find and replace those links to point to the appropriate branch for the current version, since with the new
# release that's incoming, `master` no longer has files for the current version, but the new one. Replace:
#   - `/tree/master` with `/tree/$CURRENT_VERSION_MINOR`
#   - `/blob/master` with `/blob/$CURRENT_VERSION_MINOR`
find $CURRENT_VERSION -type f -exec sed -i -e "s/\/tree\/master/\/tree\/$CURRENT_VERSION_MINOR/g" {} \;
find $CURRENT_VERSION -type f -exec sed -i -e "s/\/blob\/master/\/blob\/$CURRENT_VERSION_MINOR/g" {} \;

# If Git has changes, commit them
if [[ -n $(git status --porcelain) ]]; then
  git add .
  git -c user.name="Josephus Paye II" -c user.email="j.paye96@gmail.com" \
    commit -m "Version v$CURRENT_VERSION docs"
fi

# Checkout the new docs from master. These will have links to the `master` branch on GitHub,
# which we preserve as they will be updated to the specific branch when there is a new release.
git checkout origin/master -- docs/

# Git automatically stages the checked out files, unstage
git reset HEAD docs/

# Move the new docs into its own folder
mv docs $NEW_VERSION

# Replace the current docs in the root folder with the new docs
rm docs.bundle.* index.html
cp $NEW_VERSION/* .

# Update the `version.sh` file with the new version
echo "CURRENT_VERSION=$NEW_VERSION" > version.sh

# If Git has changes, commit them
if [[ -n $(git status --porcelain) ]]; then
  git add .
  git -c user.name="Josephus Paye II" -c user.email="j.paye96@gmail.com" \
    commit -m "Add v$NEW_VERSION docs"
fi

# Push the changes to the `gh-pages` branch
git push origin gh-pages
