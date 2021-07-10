import React from "react";
import { useLinkProps } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
// ...

const LinkButton = ({ to, action, children, ...rest }) => {
  const { onPress, ...props } = useLinkProps({ to, action });
  
  return (
    <TouchableOpacity onPress={onPress} {...props} {...rest}>
      {children}
    </TouchableOpacity>
  );
};

export default LinkButton;
