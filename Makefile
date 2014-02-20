export PATH := ./node_modules/component/bin:$(PATH)

build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

test: build
	@component-test phantom

sauce: build
	@component-test sauce

.PHONY: clean test sauce
