import App from './App.pug';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
