module.exports = function(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  root
    .find(j.ClassBody)
    .find(j.Decorator)
    .find(j.CallExpression)
    .filter(identifier => {
      const { value } = identifier;
      const { identifierName } = value.callee.loc;

      return identifierName === "Evt";
    })
    .forEach(function(identifier) {
      const { value } = identifier;
      const decoratorArguments = value.arguments;

      const eventArgument = decoratorArguments[0].value.replace(" ", "_");
      const preventDefault = (decoratorArguments[1] || {}).value;
      const eventName = eventArgument.split("_")[0];
      const eventSelector = eventArgument.split("_")[1];
      let newArguments = [
        {
          type: "StringLiteral",
          value: eventName,
        }
      ];

      if (eventSelector) {
        newArguments.push({
          type: "StringLiteral",
          value: eventSelector
        });
      }

      if (typeof preventDefault !== 'undefined') {
        newArguments.push({
          type: "BooleanLiteral",
          value: preventDefault
        });
      }

      value.arguments = newArguments;
    });

  return root.toSource();
};
