import * as Toast from "@radix-ui/react-toast";

import { styled } from "../../styles";

import { Text } from "../Text";

export const ToastProvider = styled(Toast.Provider, {});

export const ToastRoot = styled(Toast.Root, {
  display: "flex",
  flexDirection: "column",
  gap: ".25rem",
  padding: "$3 $5",
  width: "$90",

  backgroundColor: "$gray800",
  border: "1px solid $gray500",
  borderRadius: "$sm",
});

export const ToastTitleContainer = styled(Toast.Title, {});

export const ToastTitleArea = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "& svg": {
    width: "$5",
    height: "$5",
    color: "$gray200",
  },
});

export const ToastTitle = styled(Text, {
  color: "$white",
  fontWeight: "$bold",
});

export const ToastDescriptionContainer = styled(Toast.Description, {});

export const ToastDescription = styled(Text, {
  color: "$gray200",
  fontWeight: "$regular",
});

export const ToastViewPort = styled(Toast.Viewport, {});
