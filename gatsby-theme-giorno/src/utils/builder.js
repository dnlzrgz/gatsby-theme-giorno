import React from "react";

const builder = (serializer, modules) => {
  return modules.map((m) => {
    const Component = serializer.get(m._type);
    if (!Component) {
      console.error("Unknown module", m);
      return null;
    }
    return <Component key={m._key} module={m} />;
  });
};

export default builder;
