import { hot } from "vite/hmr";

// Change this line to trigger HMR
console.log("foo.js");

if (__DEV__) {
	hot.accept(() => {
		console.log("A");
	});
	hot.accept(() => {
		console.log("B");
	});
}
