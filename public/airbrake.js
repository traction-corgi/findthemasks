// TODO we should have the environment change so we don't alert on local dev machines
const airbrake = new airbrakeJs.Client({
  projectId: 266956,
  projectKey: '2c966fe44a092a4dfe2abeb19c9e112d',
  environment: 'production'
});
try {
  // This will throw if the document has no head tag
  document.head.insertBefore(document.createElement("style"), null);
} catch(err) {
  airbrake.notify(err);
  throw err;
}
