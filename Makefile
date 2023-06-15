publish:
	npm publish --dry-run
install:
	npm ci
lint: 
	npx eslint .
test:
	npx jest
test-coverage:
	npx jest --coverage