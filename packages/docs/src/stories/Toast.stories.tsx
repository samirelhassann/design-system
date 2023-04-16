import { Toast, ToastProps } from "@saturn-design-system/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Exhibition/Toast",
  component: Toast,
  args: {
    open: true,
    title: "Agendamento Realizado",
    description: "Quarta-feira, 23 de Outubro às 16h",
    duration: 5000,
  },
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};
