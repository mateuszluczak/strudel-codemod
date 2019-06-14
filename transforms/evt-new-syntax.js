module.exports = function (file, api) {
    const j = api.jscodeshift;
    const root = j(file.source);

    console.log(file, api);

    root.toSource();

    return null;
}