import { Easing, Notifier, NotifierComponents } from "react-native-notifier";

export const errorToast = (error: any) => {
  const errMessage = error?.cause?.result?.errors[0]?.message || error?.message;
  Notifier.showNotification({
    title: "Error",
    description: errMessage,
    duration: 0,
    showAnimationDuration: 800,
    showEasing: Easing.bounce,
    hideOnPress: false,
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType: "error",
    },
    translucentStatusBar: true,
  });
};

export const errorWrapper = async (fn: Function) => {
  try {
    return await fn();
  } catch (error: any) {
    const errMessage =
      error?.cause?.result?.errors[0]?.message || error?.message;

    Notifier.showNotification({
      title: "Error",
      description: errMessage,
      duration: 0,
      showAnimationDuration: 800,
      showEasing: Easing.bounce,
      hideOnPress: false,
      Component: NotifierComponents.Alert,
      componentProps: {
        alertType: "error",
      },
      translucentStatusBar: true,
    });
  }
};
